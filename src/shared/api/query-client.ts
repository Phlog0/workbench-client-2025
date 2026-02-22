import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});
const getKey = (
  prop: string,
  key: "GET" | "POST" | "UPDATE" | "DELETE",
  type: "MUTATION" | "QUERY"
) => `${prop}__${key}__${type}`;
export const CACHE_KEYS = {
  PROJECTS: {
    get: getKey("PROJECTS", "GET", "QUERY"),
    createProject: getKey("PROJECTS", "POST", "MUTATION"),
    updateProject: getKey("PROJECTS", "UPDATE", "MUTATION"),
    deleteProject: getKey("PROJECTS", "DELETE", "MUTATION"),
  },
  USER: "user",
  DICTIONARY: "dictionary",
  PROJECT_SCHEME: "projectScheme",
};
