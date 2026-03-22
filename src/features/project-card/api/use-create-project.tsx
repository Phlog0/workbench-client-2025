import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "@/shared/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { ProjectInfo, ProjectInfoTextData } from "@/shared/api/types";
import { $api } from "@/shared/api/services";
import { BadAuthResponse } from "@/shared/api/types";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [CACHE_KEYS.PROJECTS.createProject],

    mutationFn: async (createProjectData: ProjectInfoTextData) =>
      $api.projects.createProject(createProjectData),
    onSuccess: data => {
      try {
        // queryClient.invalidateQueries({ queryKey: [CACHE_KEYS.PROJECTS.get] });
        const newProject = {
          ...data.newProject,
          position: data.newProject.position
            ? typeof data.newProject.position === "string"
              ? JSON.parse(data.newProject.position)
              : data.newProject.position
            : null,
        };
        queryClient.setQueryData([CACHE_KEYS.PROJECTS.get], (prev: ProjectInfo[]) => [
          ...prev,
          newProject,
        ]);
        toast.success("Проект успешно создан", {
          closeButton: true,
        });
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error: AxiosError<BadAuthResponse>) => {
      console.error(error);
      toast.error(error.response?.data.message.toString(), {
        closeButton: true,
      });
    },
  });
};
