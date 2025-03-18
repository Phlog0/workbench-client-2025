import {
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from '@xyflow/react';
import { AllPossibleNodes, PossibleNode, } from './react-flow-types';
import { AllNodesPropertiesTypes, NestedPropsTCell10KvKeys } from './properties-types';
export type TNodePosition = {
  x: number
  y: number
}




// export type AllNodesPropertiesTypes = Omit<TCell10Kv | TSection10Kv, "type">
export type SelectedNodeId = string

export type AppState = {
  // nodes: (Node | PossibleNode)[];
  nodes: AllPossibleNodes;
  edges: Edge[];
  selectedNodeId: SelectedNodeId;
  projectTheme: "light" | "dark"
  onNodesChange: OnNodesChange<PossibleNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AllPossibleNodes) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (nodeId: SelectedNodeId) => void;
  addNode: (node: PossibleNode) => void
  // hiNode: (selectedNodeId: string | null) => void

  // qu:keyof AllNodesPropertiesTypes
  changeSelectPropery: <K extends keyof AllNodesPropertiesTypes>({ nodeId, prop, value }: {
    nodeId: SelectedNodeId,
    prop: K,
    value: AllNodesPropertiesTypes[K]
  }) => void


  //todo Как работать с глубоковложенными объектами да так, чтобы всё можно было автоматизировать
  changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: string, keyTwo: string, value: any }) => void
  // changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: NestedPropsTCell10KvKeys, keyTwo: NestedPropsTCell10Kv, value: string | number | boolean }) => void

  changeProjectTheme: (newTheme: "light" | "dark") => void
};



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