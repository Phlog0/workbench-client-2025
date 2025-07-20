import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS, HttpErrorResponse, projectApi } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { ProjectId, ProjectInfo } from "@/shared/api/types";

export const useDeleteProject = (projectId: ProjectId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => projectApi.deleteProject(projectId),

    onSuccess: (data) => {
      try {
        queryClient.setQueryData([CACHE_KEYS.PROJECTS], (prev: ProjectInfo[]) =>
          prev.filter((project) => project.id !== projectId),
        );
        toast.success(data.message, {
          closeButton: true,
        });
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error: AxiosError<HttpErrorResponse>) => {
      console.log(error);
      toast.error(error.response?.data.message.toString(), {
        closeButton: true,
      });
    },
  });
};
