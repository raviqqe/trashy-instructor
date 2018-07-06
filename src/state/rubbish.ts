import { mapValues } from "lodash";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { rubbish, RubbishId } from "../domain";
import * as message from "./message";

const actionCreator = actionCreatorFactory("RUBBISH");

const setThrown = actionCreator<{ id: RubbishId, thrown: boolean }>("THROW_RUBBISH");

const throwRubbish = (id: RubbishId) => (dispatch) => {
    dispatch(message.actionCreators.sendMessage({ binId: rubbish[id].binId, rubbishId: id }));
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
