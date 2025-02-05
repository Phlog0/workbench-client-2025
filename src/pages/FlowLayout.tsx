import { ReactFlowProvider, useReactFlow } from "@xyflow/react";
import { Flow } from "./Flow";

import { SiderbarItems } from "@/widgets/siderbar-items/SiderbarItems";
import { SiderbarProperties } from "@/widgets/sidebars-properties/SiderbarProperties";
import { DnDProvider } from "@/app/DnDContext/DnDContext";

export const FlowLayout = () => {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <div className="project-grid">
          <header className="project-header outline-dashed">ШАПКА</header>
          <aside className="project-items outline-dashed">
            <SiderbarItems />
          </aside>
          <main className="project-flow">
            <Flow />
          </main>
          <aside className="project-properties outline-dashed">
            <SiderbarProperties />
          </aside>
        </div>
      </DnDProvider>
    </ReactFlowProvider>
  );
};
