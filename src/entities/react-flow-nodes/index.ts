import { nodeTypes } from '@/shared/appStore/react-flow-types'
import { Cell04KvNode } from './Cell04KvNode'
import { Cell10KvNode } from './cell10kv/Cell10KvNode'
import { PowerTransformerNode } from './PowerTransformerNode'
import { Section04KvNode } from './section04kv/Section04KvNode'
import { Section10KvNode } from './section10kv/Section10KvNode'
import { ReactElement, ReactNode, useMemo } from 'react'
import { FixatorNode10Kv } from './fixators/fixator-node-10kv'
import { FixatorContainerNode } from './fixators/fixator-container-node'

export { Cell10KvNode } from './cell10kv/Cell10KvNode'
export { Section10KvNode } from './section10kv/Section10KvNode'
export { PowerTransformerNode } from './PowerTransformerNode'
export { Cell04KvNode } from './Cell04KvNode'
export { Section04KvNode } from './section04kv/Section04KvNode'
export { FixatorNode10Kv } from './fixators/fixator-node-10kv'

type NodeTypeEntities = Record<keyof typeof nodeTypes, ({ data: { id } }: Props) => JSX.Element>
// ? откуда Props?
export const nodeTypesEntities: NodeTypeEntities = {
    Cell10Kv: Cell10KvNode,
    Section10Kv: Section10KvNode,
    PowerTransformerFrom35to10Kv: PowerTransformerNode,
    Cell04Kv: Cell04KvNode,
    Section04Kv: Section04KvNode,
    FixatorContainer: FixatorContainerNode,
    Fixator10Kv: FixatorNode10Kv,
}