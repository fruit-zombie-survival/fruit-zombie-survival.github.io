import { integrations } from "@/config/integrations";
import { SocialBarAd } from "./social-bar-ad";

export function SocialBarSlot() {
  if (integrations.ads.provider !== "adsterra") return null;
  return <SocialBarAd scriptSrc={integrations.ads.socialBar.scriptSrc} />;
}
