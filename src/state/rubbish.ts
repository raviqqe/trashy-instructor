import { mapValues } from "lodash";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { rubbish, RubbishId } from "../domain";

const actionCreator = actionCreatorFactory("RUBBISH");

const setThrown = actionCreator<{ id: RubbishId, thrown: boolean }>("THROW_RUBBISH");

const throwRubbish = (id: RubbishId) => (dispatch) => {
    dispatch(setThrown({ id, thrown: true }));
    dispatch(setThrown({ id, thrown: false }));
};

export const actionCreators = { throwRubbish };

export type IActionCreators = typeof actionCreators;

export interface IState {
    [id: number]: { thrown: boolean };
}

export const initialState: IState = mapValues(rubbish, () => ({ thrown: false }));

export const reducer = reducerWithInitialState(initialState)
    .case(setThrown, (state, { id, thrown }) => ({ ...state, [id]: { thrown } }));
