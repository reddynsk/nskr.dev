import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://nskr.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Stack",
    href: "/#stack",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/#overview",
  },
];

export const GITHUB_USERNAME = "nskrdev";
export const SOURCE_CODE_GITHUB_REPO = "nskrdev/nskr";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/nskrdev/nskr";

export const UTM_PARAMS = {
  utm_source: "nskr.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
