//! ЛОМАЕТСЯ FSD. ИСПРАВИТЬ

import { NodeTypesUnion } from "@/shared/appStore/react-flow-types";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
type DnDContextType = [
  NodeTypesUnion | null,
  React.Dispatch<React.SetStateAction<NodeTypesUnion | null>>
];

// Create the context with a default value
const DnDContext = createContext<DnDContextType | undefined>(undefined);

interface DnDProviderProps {
  children: ReactNode;
}

export const DnDProvider: React.FC<DnDProviderProps> = ({ children }) => {
  const [type, setType] = useState<NodeTypesUnion | null>(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

export const useDnD = (): DnDContextType => {
  const context = useContext(DnDContext);
  if (context === undefined) {
    throw new Error("useDnD must be used within a DnDProvider");
  }
  return context;
};
