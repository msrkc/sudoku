import * as actionTypes from "./action-types";
import { Action, AnyAction } from "redux";
import { BLOCK_COORDS, NUMBERS } from "@/types";

export const createGrid = (): Action => ({ type: actionTypes.CREATE_GRID });

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  type: actionTypes.SELECT_BLOCK,
  coords,
});

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
  type: actionTypes.FILL_BLOCK,
  coords,
  value,
});
