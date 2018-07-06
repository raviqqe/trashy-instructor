import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { onWindowResize } from "../infra/media";

const setWindowResized = actionCreatorFactory("ENVIRONMENT")<boolean>(
  "SET_WINDOW_RESIZED"
);

const setAndResetWindowResized = (): any => async dispatch => {
  dispatch(setWindowResized(true));
  dispatch(setWindowResized(false));
};

export const initialState = { windowResized: false };

export type IState = typeof initialState;

export const reducer = reducerWithInitialState(initialState).case(
  setWindowResized,
  (_, windowResized) => ({ windowResized })
);

export function initializeStore(store: Store): void {
  onWindowResize(() => store.dispatch(setAndResetWindowResized()));
}
