import useStore from "shared/appStore/store";
import { useReactFlow } from "@xyflow/react";

import { useGetCurrentNode } from "@/shared/lib/model/use-get-current-node";
import { PropertiesCell10Kv } from "@/features";
import { cn } from "@/shared/lib/react-std";

export const SiderbarProperties = ({
  className,
  headerMode = false,
}: {
  className?: string;
  headerMode?: boolean;
}) => {
  const { getNode } = useReactFlow();
  const { selectedNodeIds, changeSelectPropery, nodes } = useStore();
  // console.log(selectedNodeIds)
  const selectedNodeId = selectedNodeIds[0];
  const nodeInfo = getNode(selectedNodeId as string);

  // const node = nodes.find((node) => node.id === selectedNodeId);

  // А зачем мне useGetCurrentNode если уже есть getNode?
  const { node } = useGetCurrentNode(selectedNodeId);
  return (
    <aside
      className={cn(
        {
          "container-save-scroll overflow-auto project-properties outline-1 outline-double dark:bg-slate-800":
            headerMode === false,
          "p-6": headerMode === true,
        },
        className
      )}
    >
      <h2>Выбранные элементы: {JSON.stringify(selectedNodeIds)}</h2>
      {/* <h2>{JSON.stringify(node)}</h2> */}
      {selectedNodeIds.length === 1 && node?.type === "Cell10Kv" && (
        //Нужна ещё одна абстракция над каждыми такими элементами
        <>
          <PropertiesCell10Kv selectedNodeId={selectedNodeId} />
        </>
      )}

      {/* <ModalButton /> */}
    </aside>
  );
};
