import { Section10KvNode } from "./section/Section10KvNode";
import { Fixator10KvNode } from "./fixators/Fixator10KvNode";
import { FixatorContainerNode } from "./fixators/FixatorContainerNode";
import { NodeTypes } from "@xyflow/react";
import { RF_NODE_TYPES } from "@/shared/react-flow/nodes";
import { Cell10KvNode } from "./cell-10kv/ui/cell-10kv-node";
import { PowerTransformer1004KvNode } from "./power-transformer-10-04kv/PowerTransformer1004KvNode";
import { Cell04KvNode } from "./cell-04kv";
import { Section04KvNode } from "./section/Section04KvNode";
import { Fixator04KvNode } from "./fixators/Fixator04KvNode";
import { WireEdge } from "./WireEdge";
import { ImageNode } from "./ImageNode";

export const nodeTypesEntities = {
  [RF_NODE_TYPES.cell10Kv]: Cell10KvNode,
  [RF_NODE_TYPES.section10Kv]: Section10KvNode,
  [RF_NODE_TYPES.fixatorContainer]: FixatorContainerNode,
  [RF_NODE_TYPES.fixator10Kv]: Fixator10KvNode,
  [RF_NODE_TYPES.powerTransformer1004Kv]: PowerTransformer1004KvNode,
  [RF_NODE_TYPES.cell04Kv]: Cell04KvNode,
  [RF_NODE_TYPES.section04Kv]: Section04KvNode,
  [RF_NODE_TYPES.fixator04Kv]: Fixator04KvNode,
  [RF_NODE_TYPES.image]: ImageNode,
  //! satisfies убрать. Он пока нужен чтобы увидеть ошибку.
} satisfies NodeTypes;

export const rfEdgeTypes = {
  Wire: WireEdge,
} as const;

export { ConnectionLine } from "./ConnectionLine";
