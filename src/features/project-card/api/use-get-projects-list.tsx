import { CACHE_KEYS } from "@/shared/api";
import { $api } from "@/shared/api/services";
import { useQuery } from "@tanstack/react-query";

export function useGetProjectsList() {
  return useQuery({
    queryKey: [CACHE_KEYS.PROJECTS.get],
    queryFn: $api.projects.getAllProjects,
  });
}
