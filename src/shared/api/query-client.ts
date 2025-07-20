import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export const CACHE_KEYS = {
  PROJECTS: "projects",
  USER: "user",
  DICTIONARY: "dictionary",
  PROJECT_SCHEME: "projectScheme",
};
