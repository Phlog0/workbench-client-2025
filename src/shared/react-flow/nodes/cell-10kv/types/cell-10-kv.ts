import { NonPrimitiveKeys, PrimitiveKeys } from "../../primitive-keys";
import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";
import { RfNodeType } from "../../rf-nodes-types";
import { TCell10KvData } from "./cell-10-kv-data";

export type TCell10Kv = ReactFlowNode<TCell10KvData, RfNodeType["cell10Kv"]> & {
  id: ReactFlowNodeId;
  parentId?: ReactFlowNodeId;
};

export type PrimitiveKeysTCell10KvData = PrimitiveKeys<TCell10KvData>;
export type NotPrimitiveKeysTCell10Kv = NonPrimitiveKeys<TCell10KvData>;
//!TCell10KvData ВОТ ЭТОТ ТИП НУЖЕН
// const cell: TCell10Kv = { data: {}, id: "asdasd", position: { x: 0, y: 0 }, d: 1 };
