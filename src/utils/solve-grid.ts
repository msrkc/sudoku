import {
  global,
  checkGrid,
  identifySquare,
  isInCol,
  isInRow,
  isInSquare,
} from "@/utils";

import { GRID, NUMBERS } from "@/types";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) return true;
            }
          }
      break;
    }
  }

  grid[row][col] = 0;
}
