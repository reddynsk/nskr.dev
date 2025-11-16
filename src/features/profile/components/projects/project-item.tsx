import { InfinityIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import React from "react";

import { getIcon, Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import { TECH_STACK } from "../../data/tech-stack";
import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div
        className={`overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg ${className}`}
      >
        <div className="flex items-center">
          {project.logo ? (
            <div className="flex shrink-0 items-center justify-center p-4">
              <Image
                src={project.logo}
                alt={project.title}
                width={40}
                height={40}
                quality={100}
                className="size-10 select-none"
                unoptimized
                aria-hidden="true"
              />
            </div>
          ) : (
            <div
              className="flex shrink-0 items-center justify-center p-4"
              aria-hidden="true"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icons.project className="size-6" />
              </div>
            </div>
          )}

          <div className="flex-1 border-l border-border">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left transition-colors select-none hover:bg-muted/50">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Period</dt>
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

              <SimpleTooltip content="Open Project Link">
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              </SimpleTooltip>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-border bg-muted/30">
            <div className="space-y-4 p-6 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <Prose>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Markdown>{project.description}</Markdown>
                  </Suspense>
                </Prose>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => {
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
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
