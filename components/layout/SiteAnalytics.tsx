"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const OPT_OUT_KEY = "va-disable";

/** Drops page views from browsers that opted out, so JC's own visits don't
 * count. Visit any page with `?notrack` to opt this browser out, `?track`
 * to opt back in. The flag lives in localStorage, so it's per browser. */
function beforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has("notrack")) localStorage.setItem(OPT_OUT_KEY, "true");
    if (params.has("track")) localStorage.removeItem(OPT_OUT_KEY);
    if (localStorage.getItem(OPT_OUT_KEY)) return null;
  } catch {
    // Storage blocked (private mode, etc.): fall through and count the view.
  }
  return event;
}

export default function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />;
}
