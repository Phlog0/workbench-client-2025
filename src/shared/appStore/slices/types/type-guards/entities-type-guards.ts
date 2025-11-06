import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { TCell04Kv } from "@/shared/react-flow/nodes/cells/cell-04kv/types";
import { TCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import { TPowerTransformer1004Kv } from "@/shared/react-flow/nodes/power-transformer-10-04kv";
import { TSection04Kv } from "@/shared/react-flow/nodes/sections/section-04kv/types";
import { TSection10Kv } from "@/shared/react-flow/nodes/sections/section-10kv/types";

export function isTCell10Kv(node: PossibleNode): node is TCell10Kv {
  return node.type === "Cell10Kv";
}
export function isTCell04Kv(node: PossibleNode): node is TCell04Kv {
  return node.type === "Cell04Kv";
}
export function isTSection04Kv(node: PossibleNode): node is TSection04Kv {
  return node.type === "Section04Kv";
}
export function isTSection10Kv(node: PossibleNode): node is TSection10Kv {
  return node.type === "Section10Kv";
}
export function isTPowerTransformer1004Kv(node: PossibleNode): node is TPowerTransformer1004Kv {
  return node.type === "PowerTransformer1004Kv";
}
