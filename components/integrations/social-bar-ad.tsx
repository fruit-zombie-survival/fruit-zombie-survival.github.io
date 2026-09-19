"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __adsterraSocialBarInitialized?: boolean;
  }
}

export function SocialBarAd({ scriptSrc }: { scriptSrc: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__adsterraSocialBarInitialized) return;
    if (document.querySelector('script[data-adsterra-social-bar="true"]')) {
      window.__adsterraSocialBarInitialized = true;
      return;
    }

    window.__adsterraSocialBarInitialized = true;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.dataset.adsterraSocialBar = "true";
    document.body.appendChild(script);
  }, [scriptSrc]);

  return null;
}
