import { CACHE_KEYS } from "@/shared/api";
import { $api } from "@/shared/api/services";
import { ProjectId, SuccessGetProjectScheme } from "@/shared/api/types";
import { BadAuthResponse } from "@/shared/api/types/auth-response";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
export function useGetProjectScheme(projectId: ProjectId) {
  return useQuery<SuccessGetProjectScheme, AxiosError<BadAuthResponse>>({
    queryKey: [CACHE_KEYS.PROJECTS.get, projectId],

    queryFn: () => $api.projects.getProjectScheme(projectId),

    enabled: !!projectId,
  });
}
