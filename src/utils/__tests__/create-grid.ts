import { createGrid } from "@/utils";

describe("createGrid", () => {
  it("9x9 grid value range 1 to 9", () => {
    const grid = createGrid();

    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
  });
});
