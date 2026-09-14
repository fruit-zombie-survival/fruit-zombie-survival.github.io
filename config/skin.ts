import { siteConfig } from "./site";
import type { ThemeSkin } from "./types";

export function siteSkin(): ThemeSkin {
  return siteConfig.theme.skin === "wiki" ? "wiki" : "portal";
}
