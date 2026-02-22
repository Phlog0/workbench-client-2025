import { TCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import { CreateEntitiesArguments } from "./types";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-10kv/measures";
import { v4 as uuidv4 } from "uuid";
import { TCell04Kv } from "@/shared/react-flow/nodes/cells/cell-04kv/types";

import { INITIAL_CELL_04KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-04kv/measures";
import { INITIAL_CELL_35KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-35kv/measures";
import { ElectricityVoltage } from "@/shared/react-flow/nodes/shared/type-of-voltage";
import { TCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

const cellSizes = {
  "04": INITIAL_CELL_04KV_METRICS,
  "10": INITIAL_CELL_10KV_METRICS,
  "35": INITIAL_CELL_35KV_METRICS,
} as const;

export const createCell = ({
  event,
  screenToFlowPosition,
  cellVoltage,
}: CreateEntitiesArguments & { cellVoltage: Exclude<ElectricityVoltage, "06"> }):
  | TCell10Kv
  | TCell04Kv
  | TCell35Kv => {
  const metrics = cellSizes[cellVoltage];
  const position = screenToFlowPosition({
    x: event.clientX - metrics.width / 8,
    y: event.clientY - metrics.height / 8,
  });
  const newCellId: TCell10Kv["id"] | TCell04Kv["id"] | TCell35Kv["id"] =
    `cell-${cellVoltage}-kv-${uuidv4()}`;
  if (cellVoltage === "10") {
    return {
      id: newCellId,
      data: { typeOfVoltage: "10 кВ" },
      position: position,
      draggable: true,
      type: `Cell${cellVoltage}Kv`,
    };
  } else if (cellVoltage === "04") {
    return {
      id: newCellId,
      data: {},
      position: position,
      draggable: true,
      type: `Cell${cellVoltage}Kv`,
    };
  } else if (cellVoltage === "35") {
    return {
      id: newCellId,
      data: {},
      position: position,
      draggable: true,
      type: `Cell${cellVoltage}Kv`,
    };
  }
  throw new Error("Unsupported cell voltage: ", cellVoltage);
};
