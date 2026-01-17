import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { ProjectInfo, ProjectInfoTextData } from "@/shared/api/types";
import { $api } from "@/shared/api/services";
import { BadAuthResponse } from "@/shared/api/types";

export const useAddProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (createProjectData: ProjectInfoTextData) =>
      $api.projects.addProject(createProjectData),
    onSuccess: (data) => {
      try {
        queryClient.setQueryData([CACHE_KEYS.PROJECTS], (prev: ProjectInfo[]) => [
          ...prev,
          data.newProject,
        ]);
        toast.success(data.message, {
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
