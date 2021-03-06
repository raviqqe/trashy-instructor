import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { IMessage } from "../domain";

const actionCreator = actionCreatorFactory("MESSAGE");

const setMessage = actionCreator<IMessage | null>("SET_MESSAGE");

function sendMessage(message: IMessage) {
  return dispatch => {
    dispatch(setMessage(message));
    setTimeout(() => dispatch(setMessage(null)));
  };
}

export const actionCreators = { sendMessage };

export type IActionCreators = typeof actionCreators;

export interface IState {
  message: IMessage | null;
}

export const initialState: IState = { message: null };

export const reducer = reducerWithInitialState(initialState).case(
  setMessage,
  (_, message) => ({ message })
);
