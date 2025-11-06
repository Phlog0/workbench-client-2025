import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "./Flow";

import { ProjectHeaderTools, SidebarFigures, SiderbarProperties } from "@/widgets/";
import { DnDProvider } from "@/app/DnDContext";

import { getThemeSelector } from "@/shared/appStore/slices/selectors";
import { cn } from "@/shared/lib";
import { useBoundStore } from "@/shared/appStore";

export const FlowLayout = () => {
  const projectTheme = useBoundStore(getThemeSelector);
  return (
    <div className={cn(projectTheme)}>
      <ReactFlowProvider>
        <div className="project-grid dark:text-white">
          <ProjectHeaderTools />
          <DnDProvider>
            <SidebarFigures className="px-2" />

            <Flow />
          </DnDProvider>
          <SiderbarProperties className="px-2" />
        </div>
      </ReactFlowProvider>
    </div>
  );
};
