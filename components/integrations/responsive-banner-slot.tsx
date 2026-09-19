import { integrations } from "@/config/integrations";
import { ResponsiveBannerAdClient } from "./responsive-banner-ad-client";

export function ResponsiveBannerSlot() {
  if (integrations.ads.provider !== "adsterra") return null;

  return (
    <div className="site-container ad-slot-wrap">
      <ResponsiveBannerAdClient
        desktopBanner={integrations.ads.desktopBanner}
        mobileBanner={integrations.ads.mobileBanner}
      />
    </div>
  );
}
