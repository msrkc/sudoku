import { GRID } from "@/types";
import { getRandomIndex, copyGrid, global, solveGrid } from "@/utils";

export function removeNumbers(grid: GRID, attempt = 5): GRID {
  while (attempt > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;
    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempt--;
    }
  }
  return grid;
}
