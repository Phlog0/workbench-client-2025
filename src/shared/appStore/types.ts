import {
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from '@xyflow/react';
import { AllPossibleNodes, PossibleNode, TCell10Kv, } from './react-flow-types';
import { AllNodesPropertiesTypes } from './properties-types';
export type TNodePosition = {
  x: number
  y: number
}




// export type AllNodesPropertiesTypes = Omit<TCell10Kv | TSection10Kv, "type">
export type ReactFLowNodeId = string
export type SelectedNodeId = ReactFLowNodeId

export type ProjectTheme = "light" | "dark"
export type AppState = {
  // nodes: (Node | PossibleNode)[];
  nodes: PossibleNode[];
  edges: Edge[];
  selectedNodeIds: SelectedNodeId[];
  projectTheme: ProjectTheme
  changeProjectTheme: (newTheme: ProjectTheme) => void

};


export type AppReactFlowBasicActions = {
  onNodesChange: OnNodesChange<PossibleNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (payload: PossibleNode[] | ((nodes: PossibleNode[]) => PossibleNode[])) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (nodeIds: SelectedNodeId[]) => void;
  addNode: (node: PossibleNode) => void
  removeNode: (nodeIds: ReactFLowNodeId[]) => void
}

export type AppPropertiesAction = {
  changeSelectPropery: <K extends keyof AllNodesPropertiesTypes>({ nodeId, prop, value }: {
    nodeId: SelectedNodeId,
    prop: K,
    value: AllNodesPropertiesTypes[K]
  }) => void

  //todo Как работать с глубоковложенными объектами да так, чтобы всё можно было автоматизировать
  changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: string, keyTwo: string | null, value: any }) => void
  selectReadyMadeSolution: ({ nodeId, keyOne, value }: { nodeId: string, keyOne: string, value: any }) => void
  // changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: NestedPropsTCell10KvKeys, keyTwo: NestedPropsTCell10Kv, value: string | number | boolean }) => void
  setMultipleProps: ({ nodeId, options }:
    { nodeId: string, options: Partial<TCell10Kv> }) => void


  increaseSectionWidth: ({ sectionId, fixatorContainerId }: { sectionId: ReactFLowNodeId, fixatorContainerId: ReactFLowNodeId }) => void
  decreaseSectionWidth: ({ sectionId, fixatorContainerId, lastFixatorId }: { sectionId: ReactFLowNodeId, fixatorContainerId: ReactFLowNodeId, lastFixatorId: ReactFLowNodeId }) => void
}


// Дан код
// export type TypeA = {
//   a: string
// }
// export type TypeB = {
//   age: number
// }


// export type TypeC = TypeA | TypeB

// Представь, что я передаю одно из свойств типа TypeC в redux, чтобы изменить это свойство.Как мне типизировать такой reducer ?

// const c: AllNodesPropertiesTypes = {
//   opn: {

//   }
// }


// Есть такой объект

// const a = {
//   adress: {
//     home: 1
//     ...
//   }
//   ...
// }

// я хочу написать reducer чтобы изменить a[prop1][prop2] = 3;

// Как мне это типизировать ?