import Image from "next/image";
import React from "react";

import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg">
      <div className="flex items-center gap-4 border-b border-border bg-muted/30 p-6">
        <div className="flex size-12 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={48}
              height={48}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-3 rounded-full bg-muted-foreground" />
          )}
        </div>

        <h3 className="text-xl leading-tight font-semibold">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative ml-auto flex items-center justify-center">
            <span className="absolute inline-flex size-4 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-3 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="space-y-6 p-6">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
