import { Button } from "@/shared/ui";
import { Trash2 } from "lucide-react";
import { ProjectId } from "@/shared/api/types";
import { useDeleteProject } from "../api";

export function DeleteCardButton({ id }: { id: ProjectId }) {
  const deleteProjectMutation = useDeleteProject(id);
  const handleClick = () => {
    deleteProjectMutation.mutate();
  };
  return (
    <Button onClick={handleClick}>
      <Trash2 />
    </Button>
  );
}
