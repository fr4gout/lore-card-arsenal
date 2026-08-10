import { useEffect, useRef } from "react";
import { subscribe } from "@/lib/nui/transport";
import type { NuiEventName } from "@/types/lore";

/** Receive a message pushed from the Lua client (SendNUIMessage). */
export function useNuiEvent<T>(action: NuiEventName, handler: (data: T) => void): void {
  const saved = useRef(handler);
  saved.current = handler;

  useEffect(() => subscribe(action, (data) => saved.current(data as T)), [action]);
}
