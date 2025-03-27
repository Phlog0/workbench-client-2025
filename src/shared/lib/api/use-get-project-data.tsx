import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./api-instacne";

const dataKey = ["dataKey"] as unknown[];
export function useGetProjectData({ q = "" }: { q?: string }) {
  return useQuery({
    queryKey: dataKey.concat([{ q }]),
    queryFn: () => fetchData(q),
  });
}
