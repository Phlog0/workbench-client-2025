import { NODE_TYPES, NodeTypesUnion } from "@/shared/types/react-flow-node-types";
import { CellNode10Kv } from "./cell-10kv/ui/cell-node-10kv";
import { Section10KvNode } from "./section-10-kv/section-node-10kv";
import { FixatorNode10Kv } from "./fixators/fixator-node-10kv";
import { FixatorContainerNode } from "./fixators/fixator-container-node";
import { NodeTypes } from "@xyflow/react";

// export { Cell10KvNode } from './cell10kv/Cell10KvNode'
// export { Section10KvNode } from './section-10-kv/Section10KvNode'
// export { PowerTransformerNode } from './PowerTransformerNode'
// export { Cell04KvNode } from './Cell04KvNode'
// export { Section04KvNode } from './section04kv/Section04KvNode'
// export { FixatorNode10Kv } from './fixators/fixator-node-10kv'

export const nodeTypesEntities = {
  // SectionContainer10Kv: SectionContainer10Kv,
  // SectionWrapper10Kv: SectionWrapper10Kv,
  Cell10Kv: CellNode10Kv,
  Section10Kv: Section10KvNode,
  // PowerTransformerFrom35to10Kv: PowerTransformerNode,
  // Cell04Kv: Cell04KvNode,
  // Section04Kv: Section04KvNode,
  FixatorContainer: FixatorContainerNode,
  Fixator10Kv: FixatorNode10Kv,
};
