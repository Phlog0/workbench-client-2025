import { ReactFlowNode } from "../../../shared/react-flow-node";
import { ReactFlowNodeId } from "../../../shared/react-flow-node-ids";
import { RfNodeType } from "../../../shared/rf-nodes-types";
import { TCell35KvData } from "./cell-35-kv-data";

export type TCell35Kv = ReactFlowNode<TCell35KvData, RfNodeType["cell35Kv"]> & {
  id: ReactFlowNodeId;
  parentId?: ReactFlowNodeId;
};

// export type PrimitiveKeysTCell10KvData = PrimitiveKeys<TCell10KvData>;
// export type NotPrimitiveKeysTCell10Kv = NonPrimitiveKeys<TCell10KvData>;
//!TCell10KvData ВОТ ЭТОТ ТИП НУЖЕН
// const cell: TCell10Kv = { data: {}, id: "asdasd", position: { x: 0, y: 0 }, d: 1 };
