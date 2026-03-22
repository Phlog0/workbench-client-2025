// src/features/auth/api/useSignUp.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import {
  ProjectId,
  ProjectInfo,
  BadAuthResponse,
  ProjectUpdateInfoTextData,
} from "@/shared/api/types";
import { $api } from "@/shared/api/services";

export const useUpdateProjectInfo = (projectId: ProjectId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CACHE_KEYS.PROJECTS.updateProject],
    mutationFn: async (projectMetaData: ProjectUpdateInfoTextData) =>
      $api.projects.updateProject(projectId, projectMetaData),
    onSuccess: (_, variables) => {
      queryClient.setQueryData([CACHE_KEYS.PROJECTS.get], (prev: ProjectInfo[]) =>
        prev.map(item => {
          if (item.id === projectId) {
            return { ...item, ...variables };
          } else {
            return item;
          }
        })
      );
      toast.success("Данные обновлены", {
        closeButton: true,
      });
    },
    onError: (error: AxiosError<BadAuthResponse>) => {
      toast.error(`${error.status}: ${error.response?.data.message.toString()}`, {
        closeButton: true,
      });
    },
  });
};
