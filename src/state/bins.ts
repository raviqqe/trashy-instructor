import { mapValues } from "lodash";
import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { BinId, bins, IPosition } from "../domain";

const actionCreator = actionCreatorFactory("BINS");

const setPosition = actionCreator<{ id: BinId, position: IPosition }>("SET_POSITION");

export const actionCreators = { setPosition };

export type IActionCreators = typeof actionCreators;

export interface IState {
    [id: number]: IPosition | null;
}

export const initialState: IState = mapValues(bins, () => null);

export const reducer = reducerWithInitialState(initialState)
    .case(setPosition, (state, { id, position }) => ({ ...state, [id]: position }));
