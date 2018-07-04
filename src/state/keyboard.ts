import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const actionCreator = actionCreatorFactory("KEYBOARD");

const setCurrentKey = actionCreator<string>("SET_CURRENT_KEY");

export const initialState = {
    currentKey: "",
};

export type IState = typeof initialState;

export const reducer = reducerWithInitialState(initialState)
    .case(setCurrentKey, (_, currentKey) => ({ currentKey }));

export function initializeStore(store: Store): void {
    document.addEventListener("keydown", ({ keyCode }) => {
        store.dispatch(setCurrentKey(String.fromCharCode(keyCode)));
    });
}
