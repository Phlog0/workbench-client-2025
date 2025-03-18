import { ReactFlowProvider, useReactFlow } from "@xyflow/react";
import { Flow } from "./Flow";

import { SiderbarItems } from "@/widgets/sidebars-properties/SiderbarItems";
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
        <DnDProvider>
          <div className="project-grid dark:text-white">
            <ProjectHeader />

            <SiderbarItems className="px-2" />

            <Flow />

            <SiderbarProperties className="max-xl:hidden px-2" />
          </div>
        </DnDProvider>
      </ReactFlowProvider>
    </div>
  );
};
