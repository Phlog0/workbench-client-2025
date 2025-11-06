export const WIDTH_PX = 1920;
export const HEIGHT_PX = 1920;
export const DIAGONAL = 15.6;
const PPI = Math.sqrt(Math.pow(WIDTH_PX, 2) + Math.pow(HEIGHT_PX, 2)) / DIAGONAL;
// * 1 дюйм = 25.4 мм

export const mmToPx = (mm: number) => {
  if (typeof mm !== "number") throw new Error("аргумент должен быть числом");
  return (mm / 25.4) * PPI;
};

export const A2_WIDTH_MM = 841;
export const A2_HEIGHT_MM = 594;
