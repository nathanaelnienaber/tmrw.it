export type AnalyticsEventPayload = Record<string, unknown> | undefined;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

const isDev = process.env.NODE_ENV !== "production";

export function trackEvent(name: string, props?: AnalyticsEventPayload) {
  if (typeof window === "undefined") return;

  if (isDev) {
    console.info(`[analytics] ${name}`, props ?? {});
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, props ? { props } : undefined);
  }
}

export function pingUptime(event: string) {
  if (typeof window === "undefined") return;

  const endpoint = process.env.NEXT_PUBLIC_UPTIME_HEARTBEAT;
  if (!endpoint) return;

  try {
    const payload = JSON.stringify({ event, timestamp: new Date().toISOString() });
    const blob = new Blob([payload], { type: "application/json" });
    navigator.sendBeacon(endpoint, blob);
  } catch (error) {
    if (isDev) {
      console.warn("Uptime beacon failed", error);
    }
  }
}
