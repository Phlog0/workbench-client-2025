
import { cn } from "@/shared/lib/cn";
import { PropertiesCell10Kv } from "@/features/properties-cell-10kv/ui";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { PropertiesCell04Kv } from "@/features/properties-cell-04kv";
import { PropertiesSection10Kv } from "@/features/properties-section-10kv";

export const SiderbarProperties = ({
  className,
  headerMode = false,
}: {
  className?: string;
  headerMode?: boolean;
}) => {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  // console.log(selectedNodeIds)
  const selectedNodeId = selectedNodeIds && selectedNodeIds[0];
  const currentNode = useGetCurrentNode(selectedNodeId);

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
      {selectedNodeIds?.length === 1 && currentNode?.type === "Cell10Kv" && (
        //Нужна ещё одна абстракция над каждыми такими элементами
        <PropertiesCell10Kv />
      )}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Cell04Kv" && (
        //Нужна ещё одна абстракция над каждыми такими элементами
        <PropertiesCell04Kv />
      )}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Section10Kv" && (
        //Нужна ещё одна абстракция над каждыми такими элементами
        <PropertiesSection10Kv />
      )}

      {/* <ModalButton /> */}
    </aside>
  );
};
