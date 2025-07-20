// src/features/auth/api/useSignUp.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS, HttpErrorResponse, projectApi } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { ProjectInfoTextData, ProjectId, ProjectInfo } from "@/shared/api/types";

export const useUpdateProject = (projectId: ProjectId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (projectMetaData: ProjectInfoTextData) =>
      projectApi.updateProject(projectId, projectMetaData),
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
