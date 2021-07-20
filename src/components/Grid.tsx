import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import useMouseTrap from "react-hook-mousetrap";

import { createGrid, fillBlock, REDUCER, selectBlock } from "@/store";
import { GridContainer, GridRow } from "@/components/styled";
import Block from "./Block";
import { BLOCK_COORDS, INDEX, NUMBERS, GRID } from "@/types";

interface State {
  selectedBlock?: BLOCK_COORDS;
  workingGrid?: GRID;
  selectedValue?: number;
}

const Grid: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const state = useSelector<REDUCER, State>(state => state);
  const selectedValue =
    state?.workingGrid && state.selectedBlock
      ? state.workingGrid[state.selectedBlock[0]][state.selectedBlock[1]]
      : 0;

  const create = React.useCallback(() => dispatch(createGrid()), [dispatch]);

  const fill = React.useCallback(
    (n: NUMBERS) => {
      if (selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock as BLOCK_COORDS));
      }
    },
    [dispatch, state?.selectedBlock, selectedValue],
  );

  React.useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ]),
      );
    }
  }
  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ]),
      );
    }
  }
  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ]),
      );
    }
  }
  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ]),
      );
    }
  }

  useMouseTrap("down", moveDown);
  useMouseTrap("left", moveLeft);
  useMouseTrap("right", moveRight);
  useMouseTrap("up", moveUp);

  useMouseTrap("1", () => fill(1));
  useMouseTrap("2", () => fill(2));
  useMouseTrap("3", () => fill(3));
  useMouseTrap("4", () => fill(4));
  useMouseTrap("5", () => fill(5));
  useMouseTrap("6", () => fill(6));
  useMouseTrap("7", () => fill(7));
  useMouseTrap("8", () => fill(8));
  useMouseTrap("9", () => fill(9));

  return (
    <GridContainer data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <GridRow data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map(
                (_, columnIndex) =>
                  state && (
                    <Block
                      colIndex={columnIndex as INDEX}
                      rowIndex={rowIndex as INDEX}
                    />
                  ),
              ),
            )}
          </GridRow>
        )),
      )}
    </GridContainer>
  );
};

export default Grid;
