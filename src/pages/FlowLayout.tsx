import { ReactFlowProvider, useReactFlow } from "@xyflow/react";
import { Flow } from "./Flow";

import { SiderbarItems } from "@/widgets/SiderbarItems";
import { ProjectHeader, SiderbarProperties } from "@/widgets/";
import { DnDProvider } from "@/app/DnDContext/DnDContext";
import useStore from "@/shared/appStore/store";
import { getThemeSelector } from "@/shared/appStore/my-selectors";
import { cn } from "@/shared/lib/react-std";

export const FlowLayout = () => {
  const projectTheme = useStore(getThemeSelector);
  return (
    <div className={cn(projectTheme)}>
      <ReactFlowProvider>
        <div className="project-grid dark:text-white">
          <ProjectHeader />
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
