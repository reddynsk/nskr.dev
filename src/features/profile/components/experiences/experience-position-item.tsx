import { InfinityIcon } from "lucide-react";
import React from "react";

import { getIcon } from "@/components/icons";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";

import { TECH_STACK } from "../../data/tech-stack";
import type { ExperiencePosition } from "../../types/experiences";
import { ExperienceIcon } from "./experience-position-icon";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={position.isExpanded} asChild>
      <div className="overflow-hidden rounded-lg border border-border/50 bg-muted/20 transition-colors hover:border-border">
        <CollapsibleTrigger className="block w-full text-left transition-colors select-none hover:bg-muted/50">
          <div className="flex items-center gap-4 p-4">
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
              aria-hidden
            >
              <ExperienceIcon className="size-5" icon={position.icon} />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-balance">{position.title}</h4>
            </div>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <CollapsibleChevronsIcon />
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 pb-3 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <>
                    <InfinityIcon
                      className="size-4.5 translate-y-[0.5px]"
                      aria-hidden
                    />
                    <span className="sr-only">Present</span>
                  </>
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
          <div className="space-y-4 border-t border-border/50 bg-background/50 p-4">
            {position.description && (
              <Prose>
                <ul>
                  {position.description
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((line, index) => (
                      <li key={index}>{line.trim().substring(1).trim()}</li>
                    ))}
                </ul>
              </Prose>
            )}

            {Array.isArray(position.skills) && position.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {position.skills.map((skill, index) => {
                  // Find matching tech stack item
                  const techItem = TECH_STACK.find(
                    (item) =>
                      item.title === skill ||
                      item.displayName === skill ||
                      item.key === skill.toLowerCase()
                  );
                  const iconKey = techItem?.key || skill.toLowerCase();
                  const displayName =
                    techItem?.displayName || techItem?.title || skill;
                  const icon = getIcon(iconKey);

                  return (
                    <li key={index} className="flex">
                      <Tag className="flex items-center gap-1">
                        {icon && techItem?.href ? (
                          <SimpleTooltip
                            content={`Visit ${displayName} website`}
                          >
                            <a
                              href={techItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                              {icon}
                            </a>
                          </SimpleTooltip>
                        ) : (
                          icon
                        )}
                        {displayName}
                      </Tag>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
