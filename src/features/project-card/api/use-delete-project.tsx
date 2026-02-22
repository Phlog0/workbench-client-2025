import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { BadAuthResponse, ProjectId, ProjectInfo } from "@/shared/api/types";
import { $api } from "@/shared/api/services";

export const useDeleteProject = (projectId: ProjectId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [CACHE_KEYS.PROJECTS.deleteProject],
    mutationFn: () => $api.projects.deleteProject(projectId),

    onSuccess: data => {
      try {
        queryClient.setQueryData([CACHE_KEYS.PROJECTS.get], (prev: ProjectInfo[]) =>
          prev.filter(project => project.id !== projectId)
        );
        toast.success(data.message, {
          closeButton: true,
        });
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error: AxiosError<BadAuthResponse>) => {
      toast.error(error.response?.data.message.toString(), {
        closeButton: true,
      });
    },
  });
};
