import { GRID, BLOCK_COORDS } from "@/types";

export interface REDUCER {
  challengeGrid?: GRID;
  solvedGrid?: GRID;
  workingGrid?: GRID;
  selectedBlock?: BLOCK_COORDS;
  selectedValue?: number;
}
