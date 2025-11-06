import { Button } from "@/shared/ui";
import { Download } from "lucide-react";
import { ProjectId } from "@/shared/api/types";
import { useCallback } from "react";
import { RFInstance } from "@/shared/react-flow/types";

export function ExportJsonProjectButton({
  projectId,
  rfInstance,
}: {
  projectId?: ProjectId;
  rfInstance: RFInstance | null;
}) {
  const onSave = useCallback(
    (projectId: ProjectId | string = "Проект", rfInstance: RFInstance | null) => {
      console.log(rfInstance);

      if (!rfInstance) {
        console.error("ReactFlow instance is not initialized");
        return;
      }
      if (rfInstance) {
        const flow = JSON.stringify(rfInstance.toObject());
        const blob = new Blob([flow], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${projectId}.json`;
        link.click();
        URL.revokeObjectURL(url); // Очистка
      }
    },
    [],
  );
  return (
    <Button onClick={() => onSave(projectId, rfInstance)}>
      Скачать проект <Download />
    </Button>
  );
}
