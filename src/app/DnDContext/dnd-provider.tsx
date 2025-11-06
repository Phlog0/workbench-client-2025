//! ЛОМАЕТСЯ FSD. ИСПРАВИТЬ

import { RFNodeTypesValues } from "@/shared/react-flow/nodes/shared";
import React, { useState, ReactNode } from "react";
import { DnDContext } from "./dnd-context";

interface DnDProviderProps {
  children: ReactNode;
}

export const DnDProvider: React.FC<DnDProviderProps> = ({ children }) => {
  const [type, setType] = useState<RFNodeTypesValues | null>(null);

  return <DnDContext.Provider value={{ type, setType }}>{children}</DnDContext.Provider>;
};

export default DnDContext;
