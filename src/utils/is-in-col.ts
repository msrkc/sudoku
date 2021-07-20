import { GRID, NUMBERS } from "@/types";

interface Input {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

export function isInCol({ grid, col, value }: Input): boolean {
  for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true;
  return false;
}
