import { CACHE_KEYS, projectApi } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export function useGetProjectsList() {
  return useQuery({
    queryKey: [CACHE_KEYS.PROJECTS],
    queryFn: projectApi.getProjectsList,
  });
}
