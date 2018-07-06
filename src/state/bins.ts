import { mapValues } from "lodash";
import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { BinId, bins, IPosition } from "../domain";

const actionCreator = actionCreatorFactory("BINS");

const setPosition = actionCreator<{ id: BinId; position: IPosition }>(
  "SET_POSITION"
);
const setShaken = actionCreator<{ id: BinId; shaken: boolean }>("SET_SHAKEN");

const shakeBin = (id: BinId) => dispatch => {
  dispatch(setShaken({ id, shaken: true }));
  setTimeout(() => dispatch(setShaken({ id, shaken: false })));
};

export const actionCreators = { setPosition, shakeBin };

export type IActionCreators = typeof actionCreators;

export interface IState {
  [id: number]: {
    position: IPosition;
    shaken: boolean;
  };
}

export const initialState: IState = mapValues(bins, () => ({
  position: { x: 0, y: 0 },
  shaken: false
}));

export const reducer = reducerWithInitialState(initialState)
  .case(setPosition, (state, { id, position }) => ({
    ...state,
    [id]: { ...state[id], position }
  }))
  .case(setShaken, (state, { id, shaken }) => ({
    ...state,
    [id]: { ...state[id], shaken }
  }));
