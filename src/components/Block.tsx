import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REDUCER, selectBlock } from "@/store";
import { INDEX, N } from "@/types";

import { BlockContainer } from "@/components/styled";
import { AnyAction, Dispatch } from "redux";

interface Props {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface State {
  value: N;
  isActive: boolean;
  isPuzzle: boolean;
}

const Block: React.FC<Props> = ({ colIndex, rowIndex }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const state = useSelector<REDUCER, State>(
    ({ workingGrid, selectedBlock, challengeGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isPuzzle:
        workingGrid && challengeGrid && challengeGrid[rowIndex][colIndex] !== 0
          ? true
          : false,
    }),
  );

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]));
  }

  return (
    <BlockContainer
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? "" : state.value}
    </BlockContainer>
  );
};

export default Block;
