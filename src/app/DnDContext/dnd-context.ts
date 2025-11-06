import { RFNodeTypesValues } from "@/shared/react-flow/nodes/shared";
import { createContext } from "react";

// Define the type for the context value
export interface DnDContextInterface {
  type: RFNodeTypesValues | null;
  setType: React.Dispatch<React.SetStateAction<RFNodeTypesValues | null>>;
}

// Create the context with a default value
// export const DnDContext = createContext(undefined);
export const DnDContext = createContext<DnDContextInterface | undefined>(undefined);
