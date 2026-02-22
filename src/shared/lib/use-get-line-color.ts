import { useMemo } from "react";
import { useBoundStore } from "../appStore";
import { blackLine, grayLine } from "../constants";

export function useGetLineColor() {
  const projectTheme = useBoundStore(state => state.projectTheme);
  return useMemo(() => {
    return projectTheme === "light" ? blackLine : grayLine;
  }, [projectTheme]);
}
