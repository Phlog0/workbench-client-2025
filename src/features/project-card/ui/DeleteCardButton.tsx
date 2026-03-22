import { Button } from "@/shared/ui";
import { Trash2 } from "lucide-react";
import { ProjectId } from "@/shared/api/types";
import { useDeleteProject } from "../api";
import { socket } from "@/shared/lib";
import { SOCKET_EVENTS } from "@/shared/constants";

export function DeleteCardButton({ id }: { id: ProjectId }) {
  const deleteProjectMutation = useDeleteProject(id);

  const handleClick = () => {
    deleteProjectMutation.mutate();
    socket.emit(SOCKET_EVENTS.C_S_ROOM_IS_DELETED, id);
  };
  return (
    <Button onClick={handleClick}>
      <Trash2 />
    </Button>
  );
}
