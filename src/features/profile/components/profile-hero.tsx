import { FileTextIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { SocialLinkItem } from "./social-links/social-link-item";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHero() {
    const TechPill = ({ name, iconKey, className }: { name: string; iconKey: string; className?: string }) => {
        const icon = getIcon(iconKey, 14);
        return (
            <span className={cn("inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-0.5 text-sm font-medium align-middle text-foreground", className)}>
                {icon}
                {name}
            </span>
        );
    };

    return (
        <section className="flex flex-col sm:flex-row gap-3 py-2">
            {/* Profile Picture & Status */}
            <div className="shrink-0">
                <div className="relative flex justify-center p-1 sm:p-2">
                    <div className="relative size-32 overflow-hidden rounded-full border-4 border-border shadow-xl sm:size-36 md:size-44">
                        <img
                            src={USER.avatar}
                            alt={USER.displayName}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-3 right-3 size-6 rounded-full border-4 border-background bg-green-500 shadow-sm sm:bottom-4 sm:right-4 sm:size-7" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center gap-3 p-1 sm:p-2">
                <div>
                    <h1 className="flex items-center text-4xl font-bold md:text-5xl">
                        {USER.displayName}
                        &nbsp;
                        <SimpleTooltip content="Verified">
                            <VerifiedIcon className="size-[0.5em] text-info select-none" />
                        </SimpleTooltip>
                    </h1>

                    <div className="mt-3">
                        <FlipSentences sentences={USER.flipSentences} />
                    </div>
                </div>

                <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    <p>
                        I build AI agentic automations for business to help reduce the everyday tedious tasks with{" "}
                        <TechPill name="n8n" iconKey="n8n" className="text-[#EA4B71] bg-[#EA4B71]/10 border-[#EA4B71]/20" />
                        ,{" "}
                        <TechPill name="LangChain" iconKey="langchain-color" className="text-foreground" />
                        {" "}and{" "}
                        <TechPill name="Python" iconKey="python" className="text-[#3776AB] bg-[#3776AB]/10 border-[#3776AB]/20" />
                        . Enthusiastic about RAG and currently learning {" "}
                        <TechPill name="PostgreSQL" iconKey="postgresql" className="text-[#336791] bg-[#336791]/10 border-[#336791]/20" />
                        .
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <a href="https://github.com/nskrdev/resumes/raw/main/NSKR_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <FileTextIcon className="mr-2 size-4" />
                            Resume / CV
                        </a>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                        <a href={`mailto:${atob(USER.email)}`}>
                            <MailIcon className="mr-2 size-4" />
                            Get in touch
                        </a>
                    </Button>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((link, index) => {
                        const IconComponent = typeof link.icon === "function" ? link.icon : null;

                        return (
                            <SimpleTooltip key={index} content={link.title}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    {IconComponent && <IconComponent className="size-4" />}
                                    <span className="sr-only">{link.title}</span>
                                </a>
                            </SimpleTooltip>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
