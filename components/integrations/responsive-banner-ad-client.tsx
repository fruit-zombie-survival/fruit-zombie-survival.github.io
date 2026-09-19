"use client";

import { useEffect, useRef, useState } from "react";
import type { AdsterraBannerUnit } from "@/config/types";
import { AdLabel } from "./ad-label";

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

const DESKTOP_MIN_WIDTH = 768;

export function ResponsiveBannerAdClient({
  desktopBanner,
  mobileBanner,
}: {
  desktopBanner: AdsterraBannerUnit;
  mobileBanner: AdsterraBannerUnit;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || isDesktop === null) return;

    const unit = isDesktop ? desktopBanner : mobileBanner;
    host.replaceChildren();

    window.atOptions = {
      key: unit.key,
      format: "iframe",
      height: unit.height,
      width: unit.width,
      params: {},
    };

    const script = document.createElement("script");
    script.src = unit.scriptSrc;
    script.async = true;
    script.dataset.adsterraBanner = unit.key;
    host.appendChild(script);

    return () => {
      host.replaceChildren();
      if (window.atOptions?.key === unit.key) {
        delete window.atOptions;
      }
    };
  }, [desktopBanner, isDesktop, mobileBanner]);

  const reservedHeight = isDesktop === false ? mobileBanner.height : desktopBanner.height;

  return (
    <aside className="ad-slot ad-slot-banner" aria-label="Advertisement">
      <AdLabel />
      <div
        className="ad-slot-frame ad-slot-banner-frame"
        style={{ minHeight: reservedHeight }}
      >
        <div ref={hostRef} className="ad-slot-script-host" />
      </div>
    </aside>
  );
}
