import { integrations } from "@/config/integrations";
import { AdLabel } from "./ad-label";
import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  if (integrations.ads.provider !== "adsterra") return null;

  return (
    <aside className="ad-slot ad-slot-native" aria-label="Sponsored">
      <AdLabel text="Sponsored" />
      <div className="ad-slot-frame ad-slot-native-frame">
        <NativeAdClient
          scriptUrl={integrations.ads.native.scriptUrl}
          containerId={integrations.ads.native.containerId}
        />
      </div>
    </aside>
  );
}
