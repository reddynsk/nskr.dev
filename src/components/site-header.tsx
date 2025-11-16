"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

import { DesktopNav } from "@/components/desktop-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { MAIN_NAV } from "@/config/site";
import { getAllPosts } from "@/features/blog/actions";
import type { Post } from "@/features/blog/types/post";
import { cn } from "@/lib/utils";

import { SiteHeaderMark } from "./site-header-mark";
import { SiteHeaderWrapper } from "./site-header-wrapper";
import { ToggleTheme } from "./toggle-theme";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
);

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
);

export function SiteHeader() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-shadow duration-300"
      )}
    >
      <div
        className="screen-line-before screen-line-after flex h-10 items-center justify-between gap-0 border-x border-edge px-0 after:z-1 after:transition-[background-color] sm:h-12 sm:px-1"
        data-header-container
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <BrandContextMenu>
            <Link
              href="/"
              aria-label="Home"
              className="py-2 pr-2 [&_svg]:h-6 sm:[&_svg]:h-7 md:[&_svg]:h-8"
            >
              <SiteHeaderMark />
            </Link>
          </BrandContextMenu>

          <DesktopNav items={MAIN_NAV} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <CommandMenu posts={posts} />
          <NavItemGitHub />
          <ToggleTheme />
          <MobileNav className="sm:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
