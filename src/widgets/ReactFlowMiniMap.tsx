import { MiniMap } from "@xyflow/react";

export function ReactFlowMiniMap() {
  return <MiniMap nodeColor={nodeColor} nodeComponent={Cell10KvMiniMap} />;
}

function Cell10KvMiniMap(props) {
  console.log({ props });
  return <circle cx={props.x} cy={props.y} r="50" />;
}
function nodeColor(node) {
  switch (node.type) {
    case "input":
      return "#6ede87";
    case "output":
      return "#6865A5";
    default:
      return "#ff0072";
  }
}
