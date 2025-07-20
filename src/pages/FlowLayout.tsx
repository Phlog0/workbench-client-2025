import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "./Flow";

import { SiderbarItems } from "@/widgets/siderbar-items";
import { ProjectHeaderTools, SiderbarProperties } from "@/widgets/";
import { DnDProvider } from "@/app/DnDContext/DnDContext";

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
            <SiderbarItems className="px-2" />

            <Flow />
          </DnDProvider>
          <SiderbarProperties className="px-2" />
        </div>
      </ReactFlowProvider>
    </div>
  );
};
