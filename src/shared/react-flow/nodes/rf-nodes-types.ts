export const RF_NODE_TYPES = {
  cell10Kv: "Cell10Kv",

  section10Kv: "Section10Kv",
  fixatorContainer: "FixatorContainer",
  fixator10Kv: "Fixator10Kv",

  powerTransformer1004Kv: "PowerTransformer1004Kv",
  cell04Kv: "Cell04Kv",
  section04Kv: "Section04Kv",
  fixator04Kv: "Fixator04Kv",
  image: "Image",
} as const;

export type RfNodeType = typeof RF_NODE_TYPES;
export type RFNodeTypesValues = RfNodeType[keyof RfNodeType];
