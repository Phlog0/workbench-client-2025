import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiInstance, CACHE_KEYS } from "@/shared/api";
import { RF_NODE_TYPES } from "@/shared/react-flow/nodes";
import { RfNodeType, RFNodeTypesValues } from "@/shared/react-flow/nodes/rf-nodes-types";
type ApiError = {
  status: number;
  error: string;
  details?: string;
};
type CustomError = Error & {
  apiError: ApiError;
};
type TableHeaders = Record<string, string>;
type TableBody = Record<string, string | number>[];
type SuccessGetProjectResponse = {
  data: {
    tableHeaders: TableHeaders;
    tableBody: TableBody;
  };
};

const dataKey = [CACHE_KEYS.DICTIONARY] as unknown[];
export function useGetDictionaryData({
  query,
  dictionaryFolder,
}: {
  query?: string;
  dictionaryFolder: RFNodeTypesValues | "";
}) {
  return useQuery<SuccessGetProjectResponse["data"], CustomError>({
    queryKey: [CACHE_KEYS.DICTIONARY, query],
    queryFn: async () => {
      try {
        if (!dictionaryFolder)
          throw new Error(`Ошибка с выбором папки (04, 10...), ${dictionaryFolder}`);
        const response = await apiInstance.get<SuccessGetProjectResponse>(
          `api/${dictionaryFolder}/${query}`,
        );
        // console.log(response);
        return response.data.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.data && typeof error.response.data === "object") {
            const apiError: ApiError = error.response.data;
            const customError = new Error(apiError.error || "API Error") as CustomError;
            customError.apiError = apiError;
            throw customError;
          }
          throw new Error(error.message || "Network Error");
          // return error;
        }
        throw error;
      }
    },
  });
}
