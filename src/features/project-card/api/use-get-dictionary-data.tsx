import { useQuery } from "@tanstack/react-query";
import { apiInstance, CACHE_KEYS } from "@/shared/api";

type TableHeaders = Record<string, string>;
type TableBody = Record<string, string | number>[];
type SuccessGetProjectResponse = {
  data: {
    tableHeaders: TableHeaders;
    tableBody: TableBody;
  };
};
const dataKey = [CACHE_KEYS.DICTIONARY] as unknown[];
export function useGetDictionaryData({ query }: { query?: string }) {
  return useQuery({
    queryKey: [CACHE_KEYS.DICTIONARY, query],
    queryFn: async () => {
      const response = await apiInstance.get<SuccessGetProjectResponse>(`api/cell-10kv/${query}`);
      return response.data.data;
    },
  });
}
