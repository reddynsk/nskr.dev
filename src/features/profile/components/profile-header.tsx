import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex flex-col border-x border-edge sm:flex-row">
      <div className="shrink-0 border-r-0 border-edge sm:border-r">
        <div className="mx-[2px] my-[3px] flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-28 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-32 md:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from India">
          {/* Flag of India */}
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Saffron stripe */}
            <rect width="30" height="6.67" fill="#FF9933" />
            {/* White stripe */}
            <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
            {/* Green stripe */}
            <rect y="13.33" width="30" height="6.67" fill="#138808" />
            {/* Ashoka Chakra (24-spoked wheel) */}
            <circle
              cx="15"
              cy="10"
              r="3"
              fill="none"
              stroke="#000080"
              strokeWidth="0.5"
            />
            <g stroke="#000080" strokeWidth="0.25">
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const x1 = 15 + 1 * Math.cos(angle);
                const y1 = 10 + 1 * Math.sin(angle);
                const x2 = 15 + 3 * Math.cos(angle);
                const y2 = 10 + 3 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </g>
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 truncate font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
