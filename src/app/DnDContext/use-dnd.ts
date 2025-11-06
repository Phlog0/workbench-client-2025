import { useContext } from "react";
import { DnDContext, DnDContextInterface } from "./dnd-context";

export const useDnD = (): DnDContextInterface => {
  const context = useContext(DnDContext);
  if (context === undefined) {
    throw new Error("useDnD must be used within a DnDProvider");
  }
  return context;
};
