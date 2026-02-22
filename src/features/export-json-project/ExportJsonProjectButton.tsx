import { Button } from "@/shared/ui";
import { Download } from "lucide-react";
import { ProjectId } from "@/shared/api/types";
import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";

export function ExportJsonProjectButton({ projectId }: { projectId?: ProjectId }) {
  const { toObject } = useReactFlow();
  const onSave = useCallback(
    (projectId: ProjectId | string = "Проект") => {
      const flow = JSON.stringify(toObject());
      const blob = new Blob([flow], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${projectId}.json`;
      link.click();
      URL.revokeObjectURL(url); // Очистка
    },
    [toObject]
  );
  return (
    <Button onClick={() => onSave(projectId)}>
      Скачать проект <Download />
    </Button>
  );
}
