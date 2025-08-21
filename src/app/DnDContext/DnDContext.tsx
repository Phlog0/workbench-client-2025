//! ЛОМАЕТСЯ FSD. ИСПРАВИТЬ

import { RFNodeTypesValues } from "@/shared/react-flow/nodes";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
type DnDContextType = [
  RFNodeTypesValues | null,
  React.Dispatch<React.SetStateAction<RFNodeTypesValues | null>>,
];

// Create the context with a default value
const DnDContext = createContext<DnDContextType | undefined>(undefined);

interface DnDProviderProps {
  children: ReactNode;
}

export const DnDProvider: React.FC<DnDProviderProps> = ({ children }) => {
  const [type, setType] = useState<RFNodeTypesValues | null>(null);

  return <DnDContext.Provider value={[type, setType]}>{children}</DnDContext.Provider>;
};

export default DnDContext;

export const useDnD = (): DnDContextType => {
  const context = useContext(DnDContext);
  if (context === undefined) {
    throw new Error("useDnD must be used within a DnDProvider");
  }
  return context;
};
