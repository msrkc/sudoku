import { GRID, NUMBERS } from "@/types";

interface Input {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

export function isInRow({ grid, row, value }: Input): boolean {
  return grid[row].includes(value);
}
