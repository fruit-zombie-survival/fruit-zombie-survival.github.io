import type {
  AdsterraBannerUnit,
  AdsterraNativeUnit,
  AdsterraSocialBarUnit,
  IntegrationConfig,
} from "./types";
import generatedIntegrationsRaw from "../content/generated/integrations.json";

type GeneratedAds = {
  provider?: string;
  desktopBanner?: AdsterraBannerUnit;
  mobileBanner?: AdsterraBannerUnit;
  native?: AdsterraNativeUnit;
  socialBar?: AdsterraSocialBarUnit;
};

type GeneratedIntegrations = {
  gaMeasurementId?: string | null;
  googleSiteVerification?: string | null;
  bingSiteVerification?: string | null;
  ads?: GeneratedAds | null;
};

const generatedIntegrations = generatedIntegrationsRaw as GeneratedIntegrations;

const gaFromEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
const gaFromGenerated = typeof generatedIntegrations.gaMeasurementId === "string"
  ? generatedIntegrations.gaMeasurementId.trim()
  : "";
const gaMeasurementId = gaFromEnv || gaFromGenerated || "";

const googleFromEnv = process.env.GOOGLE_SITE_VERIFICATION?.trim() || "";
const googleFromGenerated = typeof generatedIntegrations.googleSiteVerification === "string"
  ? generatedIntegrations.googleSiteVerification.trim()
  : "";
const googleVerification = googleFromEnv || googleFromGenerated || null;

const bingFromEnv = process.env.BING_SITE_VERIFICATION?.trim() || "";
const bingFromGenerated = typeof generatedIntegrations.bingSiteVerification === "string"
  ? generatedIntegrations.bingSiteVerification.trim()
  : "";
const bingVerification = bingFromEnv || bingFromGenerated || null;

function isBannerUnit(value: unknown): value is AdsterraBannerUnit {
  if (!value || typeof value !== "object") return false;
  const unit = value as AdsterraBannerUnit;
  return Boolean(
    typeof unit.key === "string" &&
      unit.key.trim() &&
      typeof unit.scriptSrc === "string" &&
      unit.scriptSrc.startsWith("https://") &&
      typeof unit.width === "number" &&
      typeof unit.height === "number",
  );
}

function normalizeNativeContainerId(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("container-") ? trimmed : `container-${trimmed}`;
}

function isNativeUnit(value: unknown): value is AdsterraNativeUnit {
  if (!value || typeof value !== "object") return false;
  const unit = value as AdsterraNativeUnit;
  return Boolean(
    typeof unit.scriptUrl === "string" &&
      unit.scriptUrl.startsWith("https://") &&
      typeof unit.containerId === "string" &&
      normalizeNativeContainerId(unit.containerId),
  );
}

function isSocialBarUnit(value: unknown): value is AdsterraSocialBarUnit {
  if (!value || typeof value !== "object") return false;
  const unit = value as AdsterraSocialBarUnit;
  return Boolean(typeof unit.scriptSrc === "string" && unit.scriptSrc.startsWith("https://"));
}

function resolveAds(): IntegrationConfig["ads"] {
  const generated = generatedIntegrations.ads;
  if (
    generated?.provider === "adsterra" &&
    isBannerUnit(generated.desktopBanner) &&
    isBannerUnit(generated.mobileBanner) &&
    isNativeUnit(generated.native) &&
    isSocialBarUnit(generated.socialBar)
  ) {
    return {
      provider: "adsterra",
      desktopBanner: generated.desktopBanner,
      mobileBanner: generated.mobileBanner,
      native: {
        scriptUrl: generated.native.scriptUrl,
        containerId: normalizeNativeContainerId(generated.native.containerId),
      },
      socialBar: generated.socialBar,
    };
  }
  return { provider: "none" };
}

export const integrations: IntegrationConfig = {
  analytics: /^G-[A-Z0-9]+$/i.test(gaMeasurementId)
    ? { provider: "google-analytics", measurementId: gaMeasurementId.toUpperCase() }
    : { provider: "none" },
  ads: resolveAds(),
  verification: {
    google: googleVerification,
    bing: bingVerification,
  },
};
