import { TCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";
import { CreateEntitiesArguments } from "./types";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/react-flow/nodes/cell-10kv/measures";
import { v4 as uuidv4 } from "uuid";
import { TCell04Kv } from "@/shared/react-flow/nodes/cell-04kv/types";
import { ElectricityVoltage } from "@/shared/react-flow/nodes";
import { INITIAL_CELL_04KV_METRICS } from "@/shared/react-flow/nodes/cell-04kv/measures";

export const createCell = ({
  event,
  screenToFlowPosition,
  cellVoltage,
}: CreateEntitiesArguments & { cellVoltage: ElectricityVoltage }): TCell10Kv | TCell04Kv => {
  const metrics = cellVoltage === "10" ? INITIAL_CELL_10KV_METRICS : INITIAL_CELL_04KV_METRICS;
  const position = screenToFlowPosition({
    x: event.clientX - metrics.width / 8,
    y: event.clientY - metrics.height / 8,
  });
  const newCellId: TCell10Kv["id"] = `cell-${cellVoltage}-kv-${uuidv4()}`;
  return {
    id: newCellId,
    data: {},
    position: position,
    // projectId: projectId,
    draggable: true,
    type: `Cell${cellVoltage}Kv`,
  };
};
