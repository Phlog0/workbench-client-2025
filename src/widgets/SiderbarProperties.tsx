import { cn } from "@/shared/lib/cn";
import { PropertiesCell10Kv } from "@/features/(properties)/properties-cell-10kv";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { PropertiesCell04Kv } from "@/features/(properties)/properties-cell-04kv";
import { PropertiesSection10Kv } from "@/features/(properties)/properties-section-10kv";
import { PropertiesPt1004Kv } from "@/features/(properties)/properties-pt-1004kv";
import { PropertiesCell35Kv } from "@/features/(properties)/properties-cell-35kv";
import { PropertiesSection04Kv } from "@/features/(properties)/properties-section-04kv";
import { PropertiesSection35Kv } from "@/features/(properties)/properties-section-35kv";

export const SiderbarProperties = ({ className }: { className?: string }) => {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  // console.log(selectedNodeIds)
  const selectedNodeId = selectedNodeIds && selectedNodeIds[0];
  const currentNode = useGetCurrentNode(selectedNodeId);

  return (
    <aside
      className={cn(
        "container-save-scroll overflow-auto project-properties outline-1 outline-double  dark:bg-slate-800",

        className,
      )}
    >
      <h2>Выбранные элементы: {JSON.stringify(selectedNodeIds)}</h2>

      {selectedNodeIds?.length === 1 && currentNode?.type === "Cell10Kv" && <PropertiesCell10Kv />}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Cell04Kv" && <PropertiesCell04Kv />}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Section10Kv" && (
        <PropertiesSection10Kv />
      )}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Section04Kv" && (
        <PropertiesSection04Kv />
      )}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Section35Kv" && (
        <PropertiesSection35Kv />
      )}
      {selectedNodeIds?.length === 1 && currentNode?.type === "PowerTransformer1004Kv" && (
        <PropertiesPt1004Kv />
      )}
      {selectedNodeIds?.length === 1 && currentNode?.type === "Cell35Kv" && <PropertiesCell35Kv />}

      {/* <ModalButton /> */}
    </aside>
  );
};
