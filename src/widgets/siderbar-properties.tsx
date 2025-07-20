import { useReactFlow } from "@xyflow/react";

import { cn } from "@/shared/lib/cn";
import { PropertiesCell10Kv } from "@/features/properties-cell-10kv/ui";
import { useBoundStore } from "@/shared/appStore";

export const SiderbarProperties = ({
  className,
  headerMode = false,
}: {
  className?: string;
  headerMode?: boolean;
}) => {
  const { getNode } = useReactFlow();
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  // console.log(selectedNodeIds)
  const selectedNodeId = selectedNodeIds && selectedNodeIds[0];
  const nodeInfo = getNode(selectedNodeId);

  // const node = nodes.find((node) => node.id === selectedNodeId);

  // А зачем мне useGetCurrentNode если уже есть getNode?
  return (
    <aside
      className={cn(
        {
          "container-save-scroll overflow-auto project-properties outline-1 outline-double dark:bg-slate-800":
            headerMode === false,
          "p-6": headerMode === true,
        },
        className,
      )}
    >
      <h2>Выбранные элементы: {JSON.stringify(selectedNodeIds)}</h2>
      {/* <h2>{JSON.stringify(node)}</h2> */}
      {selectedNodeIds?.length === 1 && nodeInfo?.type === "Cell10Kv" && (
        //Нужна ещё одна абстракция над каждыми такими элементами
        <PropertiesCell10Kv selectedNodeId={selectedNodeId} />
      )}

      {/* <ModalButton /> */}
    </aside>
  );
};
