// ! TANSTACK-QUERY. НАДО ПОДУМАТЬ НАД КЭШЭМ
import { CACHE_KEYS } from "@/shared/api";
import { $api } from "@/shared/api/services";
import { ProjectId, SuccessGetProjectScheme } from "@/shared/api/types";
import { BadAuthResponse } from "@/shared/api/types/auth-response";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
export function useGetProjectScheme(projectId?: ProjectId) {
  return useQuery<SuccessGetProjectScheme, AxiosError<BadAuthResponse>>({
    queryKey: [CACHE_KEYS.PROJECT_SCHEME, `${projectId}`],

    queryFn: () => $api.projects.getProjectScheme(projectId as ProjectId),

    enabled: !!projectId,
  });
}
