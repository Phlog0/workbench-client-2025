import { Point } from "./types";

export function createOrthogonalEdgePath(points: Point[]) {
  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    // Определяем направление движения
    const prev = points[i - 1];
    const curr = points[i];

    if (prev.x === curr.x) {
      // Вертикальное движение
      path += ` V ${curr.y}`;
    } else if (prev.y === curr.y) {
      // Горизонтальное движение
      path += ` H ${curr.x}`;
    } else {
      // Если не ортогонально, создаем два сегмента
      path += ` V ${curr.y} H ${curr.x}`;
    }
  }

  return path;
}
