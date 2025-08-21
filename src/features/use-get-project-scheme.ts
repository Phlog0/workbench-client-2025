// ! TANSTACK-QUERY. НАДО ПОДУМАТЬ НАД КЭШЭМ
import { CACHE_KEYS, projectApi } from "@/shared/api";
import { ProjectId } from "@/shared/api/types";
import { useBoundStore } from "@/shared/appStore";
import { useQuery } from "@tanstack/react-query";
import { useReactFlow } from "@xyflow/react";
export function useGetProjectScheme(projectId?: ProjectId | string) {
  const setAfterFetch = useBoundStore((state) => state.setAfterFetch);

  const { setViewport } = useReactFlow();
  // console.log(CACHE_KEYS.PROJECT_SCHEME, projectId);
  return useQuery({
    queryKey: [CACHE_KEYS.PROJECT_SCHEME, `${projectId}`],
    queryFn: async () => {
      if (!projectId) {
        setAfterFetch([], [], { x: 0, y: 0, zoom: 0.5 });

        setViewport({ x: 0, y: 0, zoom: 0.5 });
        return null;
      }
      const response = await projectApi.getProjectSheme(projectId);
      if (response.projectScheme === null) {
        setAfterFetch([], [], { x: 0, y: 0, zoom: 0.5 });

        setViewport({ x: 0, y: 0, zoom: 0.5 });
        return null;
      }
      setAfterFetch(
        response.projectScheme.nodes,
        response.projectScheme.edges,
        response.projectScheme.viewport,
      );
      setViewport(response.projectScheme.viewport);

      return response.projectScheme;
    },
    enabled: !!projectId,
  });
}
