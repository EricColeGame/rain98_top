export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  demoUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Rain98 Wiki",
  shortName: "Rain98",
  logoText: "R",
  tagline: "Story Guide, Characters, Choices & Endings",
  description: "Explore Rain98, a lo-fi psychological suspense and romance adventure set in rainy Tokyo in 1998. Discover story guides, characters, choices, endings, and demo details.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rain98.top",
  supportEmail: "support@rain98.top",
  gameUrl: "https://store.steampowered.com/app/3498720/Rain98/",
  demoUrl: "https://store.steampowered.com/app/3738760/Rain98_Demo/",
  heroVideoId: "c_rIfilxu74", // Rain98 - Demo Release Trailer (official C#4R4CT3R channel)
  social: {
    discord: "https://discord.com/invite/zUXgkYhn2n",
    youtube: "https://www.youtube.com/@csharp4r4ct3r",
    twitter: "https://x.com/csharp4r4ct3r",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
