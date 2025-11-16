import React from "react";
import { FaTerminal } from "react-icons/fa";

import { getIcon } from "@/components/icons";
import { Marquee } from "@/components/ui/marquee";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  const midpoint = Math.ceil(TECH_STACK.length / 2);
  const firstRow = TECH_STACK.slice(0, midpoint);
  const secondRow = TECH_STACK.slice(midpoint);

  const renderTechItem = (tech: (typeof TECH_STACK)[number]) => {
    const icon = getIcon(tech.key, 32);
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
              "flex h-8 w-8 items-center justify-center transition-colors",
              icon
                ? "text-foreground hover:text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {icon || <FaTerminal className="h-8 w-8" />}
            <span className="sr-only">{displayName}</span>
          </a>
        </SimpleTooltip>
      </li>
    );
  };

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="flex flex-col gap-4">
          <Marquee className="[--duration:50s]" pauseOnHover>
            <ul className="flex gap-4 select-none">
              {firstRow.map(renderTechItem)}
            </ul>
          </Marquee>

          <Marquee className="[--duration:50s]" reverse pauseOnHover>
            <ul className="flex gap-4 select-none">
              {secondRow.map(renderTechItem)}
            </ul>
          </Marquee>
        </div>
      </PanelContent>
    </Panel>
  );
}
