import { AnyAction } from "redux";
import { REDUCER } from "./interfaces";
import * as actionTypes from "./action-types";
import { copyGrid, createGrid, removeNumbers, compareArrays } from "@/utils";
import { GRID } from "@/types";

const initialState: REDUCER = {};

function reducer(state = initialState, action: AnyAction): any {
  switch (action.type) {
    case actionTypes.CREATE_GRID:
      const solvedGrid = createGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    case actionTypes.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };
    case actionTypes.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert("Incorrect Option!");
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert("Completed!");
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }

    default:
      state;
  }
}

export default reducer;
