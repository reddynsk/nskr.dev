import { RiGithubLine, RiLinkedinBoxLine, RiMailLine, RiTwitterXLine, RiWhatsappLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: RiLinkedinBoxLine,
    title: "LinkedIn",
    description: "nskrdev",
    href: "https://www.linkedin.com/in/nskrdev",
  },
  {
    icon: RiGithubLine,
    title: "GitHub",
    description: "nskrdev",
    href: "https://github.com/nskrdev",
  },
  {
    icon: RiTwitterXLine,
    title: "X (Formerly Twitter)",
    description: "@nskrdev",
    href: "https://x.com/nskrdev",
  },
  {
    icon: SiLeetcode,
    title: "LeetCode",
    description: "nskrdev",
    href: "https://leetcode.com/u/nskrdev/",
  },
  {
    icon: RiWhatsappLine,
    title: "WhatsApp",
    description: "+91 9573784888",
    href: "https://wa.me/919573784888",
  },
  {
    icon: RiMailLine,
    title: "Email",
    description: "red@nskr.dev",
    href: "mailto:red@nskr.dev",
  },
];
