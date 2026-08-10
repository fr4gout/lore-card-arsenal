import type { NuiEventName, NuiMessage } from "@/types/lore";
import { getOwnedCount, getPacksAvailable, openPack } from "./rewards";

/**
 * NUI transport abstraction.
 *
 * In the FiveM build `post()` becomes `fetch(https://lore-card-system/<name>)`
 * and inbound messages arrive from `SendNUIMessage` via window "message".
 * Swapping this single module is the only change required — no component or
 * hook talks to the transport directly.
 */

const isNui = typeof window !== "undefined" && Boolean((window as { invokeNative?: unknown }).invokeNative);

type Listener = (data: unknown) => void;
const listeners = new Map<NuiEventName, Set<Listener>>();

export function subscribe(action: NuiEventName, listener: Listener): () => void {
  const set = listeners.get(action) ?? new Set<Listener>();
  set.add(listener);
  listeners.set(action, set);
  return () => set.delete(listener);
}

export function emit<T>(message: NuiMessage<T>): void {
  listeners.get(message.action)?.forEach((listener) => listener(message.data));
}

if (typeof window !== "undefined") {
  window.addEventListener("message", (event: MessageEvent<NuiMessage>) => {
    const payload = event.data;
    if (payload && typeof payload === "object" && "action" in payload) {
      emit(payload);
    }
  });
}

/** Client -> Lua callback. Mocked locally against the authoritative reward module. */
export async function post<T>(name: string, data: Record<string, unknown> = {}): Promise<T> {
  if (isNui) {
    const res = await fetch(`https://lore-card-system/${name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    });
    return (await res.json()) as T;
  }

  await new Promise((resolve) => setTimeout(resolve, 90));

  switch (name) {
    case "openPack":
      return openPack({
        packId: String(data["packId"] ?? "origins-standard"),
        size: typeof data["size"] === "number" ? (data["size"] as number) : undefined,
      }) as T;
    case "getState":
      return { packs: getPacksAvailable(), owned: getOwnedCount() } as T;
    case "close":
      return { ok: true } as T;
    default:
      return { ok: false, error: "UNKNOWN_CALLBACK" } as T;
  }
}
