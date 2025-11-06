export function generateOrthogonalEdgePath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  padding: number = 0,
  Hoffset: number = 0,
) {
  // Calculate horizontal and vertical distances
  const dx = endX - startX;
  const dy = endY - startY;
  let path = `M ${startX} ${startY}` + " ";
  path += `V ${startY + dy / 2 - Hoffset}` + " ";
  path += `H ${dx - padding}` + " ";
  path += `V ${endY}`;
  return path;
}
