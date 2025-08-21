import { CreateEntitiesArguments } from "./types";
import { v4 as uuidv4 } from "uuid";
import {
  INITIAL_POWER_TRANSFORMER_METRICS,
  TPowerTransformer1004Kv,
} from "@/shared/react-flow/nodes/power-transformer-10-04kv";
export const createPowerTransformer1004kv = ({
  event,
  screenToFlowPosition,
}: CreateEntitiesArguments): TPowerTransformer1004Kv => {
  const position = screenToFlowPosition({
    x: event.clientX - INITIAL_POWER_TRANSFORMER_METRICS.width / 8,
    y: event.clientY - INITIAL_POWER_TRANSFORMER_METRICS.height / 8,
  });
  const newCellId: TPowerTransformer1004Kv["id"] = `pt-1004-${uuidv4()}`;
  return {
    id: newCellId,
    data: {},
    position: position,
    draggable: true,
    type: "PowerTransformer1004Kv",
  };
};
