import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "@/shared/api";
import { RFNodeTypesValues } from "@/shared/react-flow/nodes/shared/rf-nodes-types";
import { BadAuthResponse } from "@/shared/api/types";
import { $api, SuccessGetProjectResponse } from "@/shared/api/services";

export type TableColumnsApi = Record<string, string>;
export type TableModelApi = Record<string, string | number>;

export function useGetDictionaryData({
  query,
  dictionaryFolder,
}: {
  query?: string;
  dictionaryFolder: RFNodeTypesValues | "";
}) {
  return useQuery<SuccessGetProjectResponse["dictionaryData"], BadAuthResponse>({
    queryKey: [CACHE_KEYS.DICTIONARY, query],
    enabled: !!query && !!dictionaryFolder,
    queryFn: async () => {
      if (!dictionaryFolder || !query)
        throw new Error(
          `Ошибка с выбором типом каталога (папки (04, 10...)), #${
            dictionaryFolder ? dictionaryFolder : "ТИП"
          }`,
        );
      const data = $api.projects.getReadySolutionsList(query, dictionaryFolder);

      return data;
    },
  });
}
