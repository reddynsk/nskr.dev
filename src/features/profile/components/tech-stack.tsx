import Link from "next/link";
import React from "react";
import { FaTerminal } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";

export function TechStack() {
  // Split into 2 rows
  const half = Math.ceil(TECH_STACK.length / 2);
  const firstRow = TECH_STACK.slice(0, half);
  const secondRow = TECH_STACK.slice(half);

  const renderTechItem = (tech: (typeof TECH_STACK)[number]) => {
    const icon = getIcon(tech.key, 24);
    const displayName = tech.displayName || tech.title;

    return (
      <li key={tech.key} className="flex">
        <SimpleTooltip content={displayName}>
          <a
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={displayName}
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl bg-card border border-border/50 shadow-sm transition-all hover:scale-105 hover:border-primary/50 hover:shadow-md",
              "dark:bg-zinc-900/50 dark:backdrop-blur-sm"
            )}
          >
            <div className={cn("transition-colors", !icon && "text-muted-foreground")}>
              {icon || <FaTerminal className="h-8 w-8" />}
            </div>
            <span className="sr-only">{displayName}</span>
          </a>
        </SimpleTooltip>
      </li>
    );
  };

  return (
    <section id="stack" className="relative flex flex-col gap-8 py-8">
      <div className="relative flex flex-col gap-4 overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <Marquee className="[--duration:60s] [--gap:1rem]" pauseOnHover repeat={4}>
          <ul className="flex gap-4 select-none py-2">
            {firstRow.map(renderTechItem)}
          </ul>
        </Marquee>

        <Marquee className="[--duration:60s] [--gap:1rem]" reverse pauseOnHover repeat={4}>
          <ul className="flex gap-4 select-none py-2">
            {secondRow.map(renderTechItem)}
          </ul>
        </Marquee>
      </div>

      <div className="flex justify-center">
        <Button asChild variant="outline" className="group rounded-full px-6">
          <Link href="/tech-stack">
            Checkout all
            <LuArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
