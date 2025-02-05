import { Cell04KvNode } from './Cell04KvNode'
import { Cell10KvNode } from './Cell10KvNode'
import { PowerTransformerNode } from './PowerTransformerNode'
import { Section04KvNode } from './Section04KvNode'
import { Section10KvNode } from './Section10KvNode'

export { Cell10KvNode } from './Cell10KvNode'
export { Section10KvNode } from './Section10KvNode'
export { PowerTransformerNode } from './PowerTransformerNode'
export { Cell04KvNode } from './Cell04KvNode'
export { Section04KvNode } from './Section04KvNode'


export const nodeTypesEntities = {
    Cell10Kv: Cell10KvNode,
    Section10Kv: Section10KvNode,
    PowerTransformer: PowerTransformerNode,
    Cell04Kv: Cell04KvNode,
    Section04Kv: Section04KvNode,
}