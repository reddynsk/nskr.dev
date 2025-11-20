import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>

        {PROJECTS.length > 3 && (
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-md"
            >
              <span>View All Projects</span>
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </PanelContent>
    </Panel>
  );
}
