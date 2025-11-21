import { CreateEntitiesArguments } from "./types";
import { v4 as uuidv4 } from "uuid";
import {
  INITIAL_POWER_TRANSFORMER_METRICS,
  TPowerTransformer3510Kv,
} from "@/shared/react-flow/nodes/power-transformer-35-10kv";
export const createPowerTransformer3510kv = ({
  event,
  screenToFlowPosition,
}: CreateEntitiesArguments): TPowerTransformer3510Kv => {
  const position = screenToFlowPosition({
    x: event.clientX - INITIAL_POWER_TRANSFORMER_METRICS.width / 8,
    y: event.clientY - INITIAL_POWER_TRANSFORMER_METRICS.height / 8,
  });
  const newCellId: TPowerTransformer3510Kv["id"] = `pt-3510-${uuidv4()}`;
  return {
    id: newCellId,
    data: {},
    position: position,
    draggable: true,
    type: "PowerTransformer3510Kv",
  };
};
