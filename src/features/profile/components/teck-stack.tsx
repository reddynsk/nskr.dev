import React from "react";
import { FaTerminal } from "react-icons/fa";

import { getIcon } from "@/components/icons";
import { Marquee } from "@/components/ui/marquee";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  // Split into 3 rows for better distribution
  const third = Math.ceil(TECH_STACK.length / 3);
  const firstRow = TECH_STACK.slice(0, third);
  const secondRow = TECH_STACK.slice(third, third * 2);
  const thirdRow = TECH_STACK.slice(third * 2);

  const renderTechItem = (tech: (typeof TECH_STACK)[number]) => {
    const icon = getIcon(tech.key, 24); // Smaller icons: 24px instead of 32px
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
              "flex h-6 w-6 items-center justify-center transition-colors",
              icon
                ? "text-foreground hover:text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {icon || <FaTerminal className="h-6 w-6" />}
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
          "bg-gradient-to-b from-muted/30 via-muted/10 to-transparent",
          "overflow-hidden"
        )}
      >
        <div className="flex flex-col gap-3">
          <Marquee className="[--duration:40s]" pauseOnHover>
            <ul className="flex gap-3 select-none">
              {firstRow.map(renderTechItem)}
            </ul>
          </Marquee>

          <Marquee className="[--duration:40s]" reverse pauseOnHover>
            <ul className="flex gap-3 select-none">
              {secondRow.map(renderTechItem)}
            </ul>
          </Marquee>

          <Marquee className="[--duration:40s]" pauseOnHover>
            <ul className="flex gap-3 select-none">
              {thirdRow.map(renderTechItem)}
            </ul>
          </Marquee>
        </div>
      </PanelContent>
    </Panel>
  );
}
