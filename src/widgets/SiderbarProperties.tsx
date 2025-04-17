import useStore from "shared/appStore/store";
import { useReactFlow } from "@xyflow/react";

import { useGetCurrentNode } from "@/shared/components/model/use-get-current-node";
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
  const { selectedNodeId, changeSelectPropery, nodes } = useStore();
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
          "p-6":
            headerMode === true,
        },
        className
      )}
    >
      <h2>{JSON.stringify(selectedNodeId)}</h2>
      {/* <h2>{JSON.stringify(node)}</h2> */}
      {selectedNodeId && node?.type === "Cell10Kv" && (
        //Нужна ещё одна абстракция над каждыми такими элементами
        <>
          <PropertiesCell10Kv selectedNodeId={selectedNodeId} />
        </>
      )}

      {/* <ModalButton /> */}
    </aside>
  );
};
