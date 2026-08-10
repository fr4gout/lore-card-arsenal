import { useCallback, useRef, useState } from "react";
import { post } from "@/lib/nui/transport";

/** Send a callback to the Lua client, guarding against replayed requests. */
export function useNuiCallback<TResponse, TPayload extends Record<string, unknown> = Record<string, unknown>>(
  name: string,
) {
  const [pending, setPending] = useState(false);
  const inFlight = useRef(false);

  const call = useCallback(
    async (payload?: TPayload): Promise<TResponse | null> => {
      if (inFlight.current) return null;
      inFlight.current = true;
      setPending(true);
      try {
        return await post<TResponse>(name, payload ?? {});
      } finally {
        inFlight.current = false;
        setPending(false);
      }
    },
    [name],
  );

  return { call, pending };
}
