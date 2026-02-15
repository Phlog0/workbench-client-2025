import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "./Flow";

import { SidebarFigures, SiderbarProperties } from "@/widgets/";
import { DnDProvider } from "@/app/DnDContext";
import { ProjectHeaderTools } from "@/widgets/project-header-tools";
import { useEffect, useState } from "react";

export type ExternalReactFlowDimensions = {
  width: number;
  height: number;
};
export type SetExternalReactFlowDimensions = (values: ExternalReactFlowDimensions) => void;
const FlowLayout = () => {
  useEffect(() => {
    // document.body.style.zoom = 0.8;
    const handleZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", handleZoom, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleZoom);
    };
  }, []);

  // const externalReactFlowRef = useRef<HTMLDivElement | null>(null);

  const [externalReactFlowDimensions, setExternalReactFlowDimensions] =
    useState<ExternalReactFlowDimensions>({
      width: 0,
      height: 0,
    });

  return (
    <div className="overflow-hidden">
      <ReactFlowProvider>
        <div className="project-grid theme-bg-auto theme-text-auto theme-bg theme-text relative">
          <ProjectHeaderTools
            className=" border-b-2 theme-border"
            externalReactFlowDimensions={externalReactFlowDimensions}
          />
          <DnDProvider>
            <SidebarFigures className="theme-bg theme-text overflow-x-auto border-r-2 theme-border block max-lg:hidden" />

            <Flow
              externalReactFlowDimensions={externalReactFlowDimensions}
              setExternalReactFlowDimensions={setExternalReactFlowDimensions}
            />
          </DnDProvider>
          <SiderbarProperties className="theme-bg theme-text border-l-2 theme-border block max-lg:hidden" />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowLayout;
