import { useBoundStore } from "@/shared/appStore";

import { DrawerUI } from "@/shared/ui";
import { Panel } from "@xyflow/react";

export function ErrorModal() {
  const nodes = useBoundStore(state => state.nodes);
  const setSelectedNodeId = useBoundStore(state => state.setSelectedNodeId);

  const errorNodes = nodes.filter(node => {
    if (node.type === "Cell10Kv") {
      if (node.data.switchDeviceHasInvalidVv) {
        return node;
      }
    }
  });

  return (
    <Panel position="bottom-center">
      <DrawerUI
        trigger="Ошибки"
        title="Ошибки"
        direction="left"
        className="w-[20%] h-screen"
        content={
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold mt-2">{`У вас ошибки в ${errorNodes.length} (нажмите, чтобы подсветить)`}</h2>

            <ul>
              {errorNodes.map((item, index) => (
                <li
                  key={`error-${item.id}`}
                  className="cursor-pointer hover:outline-2"
                  onClick={() => setSelectedNodeId([item.id])}
                >{`${index + 1}: ${item.type}. При использовании вакуумных выключателей требуется выбрать устройства защиты`}</li>
              ))}
            </ul>
          </div>
        }
      ></DrawerUI>
    </Panel>
  );
}
