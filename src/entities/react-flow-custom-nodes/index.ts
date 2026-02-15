import { Section10KvNode } from "./sections/section-10kv/Section10KvNode";
import { Fixator10KvNode } from "./fixators/fixator-10kv/Fixator10KvNode";
import { FixatorContainerNode } from "./fixator-container";
import { NodeTypes } from "@xyflow/react";
import { RF_NODE_TYPES } from "@/shared/react-flow/nodes/shared";
import { Cell10KvNode } from "./cells/cell-10kv";
import { PowerTransformer1004KvNode } from "./power-transformer-10-04kv/PowerTransformer1004KvNode";
import { Cell04KvNode } from "./cells/cell-04kv";
import { Section04KvNode } from "./sections/section-04kv/Section04KvNode";
import { Fixator04KvNode } from "./fixators/fixator-04kv/Fixator04KvNode";
import { WireEdge } from "./wire-edge/WireEdge";
import { ImageNode } from "./image-node/ImageNode";
import { Cell35KvNode } from "./cells/cell-35kv";
import { Section35KvNode } from "./sections/section-35kv";
import { Fixator35KvNode } from "./fixators/fixator-35kv";
import { PowerTransformer3510KvNode } from "./power-transformer-35-10kv";
import { EditableWireEdge } from "./wire-edge/EditableWireEdge";

export const nodeTypesEntities: NodeTypes = {
  [RF_NODE_TYPES.cell10Kv]: Cell10KvNode,
  [RF_NODE_TYPES.section10Kv]: Section10KvNode,
  [RF_NODE_TYPES.fixatorContainer]: FixatorContainerNode,
  [RF_NODE_TYPES.fixator10Kv]: Fixator10KvNode,
  [RF_NODE_TYPES.powerTransformer1004Kv]: PowerTransformer1004KvNode,
  [RF_NODE_TYPES.powerTransformer3510Kv]: PowerTransformer3510KvNode,
  [RF_NODE_TYPES.cell04Kv]: Cell04KvNode,
  [RF_NODE_TYPES.section04Kv]: Section04KvNode,
  [RF_NODE_TYPES.fixator04Kv]: Fixator04KvNode,
  [RF_NODE_TYPES.cell35Kv]: Cell35KvNode,
  [RF_NODE_TYPES.section35Kv]: Section35KvNode,
  [RF_NODE_TYPES.fixator35Kv]: Fixator35KvNode,
  [RF_NODE_TYPES.image]: ImageNode,
  //! satisfies убрать. Он пока нужен чтобы увидеть ошибку.
};

export const rfEdgeTypes = {
  Wire: WireEdge,
} as const;
