// src/features/auth/api/useSignUp.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { ProjectInfoTextData, ProjectId, ProjectInfo, BadAuthResponse } from "@/shared/api/types";
import { $api } from "@/shared/api/services";

export const useUpdateProject = (projectId: ProjectId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (projectMetaData: ProjectInfoTextData) =>
      $api.projects.updateProject(projectId, projectMetaData),
    onSuccess: (data, variables) => {
      try {
        queryClient.setQueryData([CACHE_KEYS.PROJECTS], (prev: ProjectInfo[]) =>
          prev.map((item) => {
            if (item.id === projectId) {
              return { ...item, ...variables };
            } else {
              return item;
            }
          }),
        );
        toast.success("Данные обновлены", {
          closeButton: true,
        });
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error: AxiosError<BadAuthResponse>) => {
      console.log(error);
      toast.error(error.response?.data.message.toString(), {
        closeButton: true,
      });
    },
  });
};
