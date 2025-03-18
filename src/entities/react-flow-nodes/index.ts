import { nodeTypes } from '@/shared/appStore/types'
import { Cell04KvNode } from './Cell04KvNode'
import { Cell10KvNode } from './Cell10KvNode'
import { PowerTransformerNode } from './PowerTransformerNode'
import { Section04KvNode } from './Section04KvNode'
import { Section10KvNode } from './Section10KvNode'
import { ReactElement, ReactNode } from 'react'

export { Cell10KvNode } from './Cell10KvNode'
export { Section10KvNode } from './Section10KvNode'
export { PowerTransformerNode } from './PowerTransformerNode'
export { Cell04KvNode } from './Cell04KvNode'
export { Section04KvNode } from './Section04KvNode'


type NodeTypeEntities = Record<keyof typeof nodeTypes, ({ data: { id } }: Props) => JSX.Element>

export const nodeTypesEntities: NodeTypeEntities = {
    Cell10Kv: Cell10KvNode,
    Section10Kv: Section10KvNode,
    PowerTransformer: PowerTransformerNode,
    Cell04Kv: Cell04KvNode,
    Section04Kv: Section04KvNode,
}