import { Store } from "redux";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const setCurrentKey = actionCreatorFactory("KEYBOARD")<string>("SET_CURRENT_KEY");

const setAndResetCurrentKey = (key: string): any => async (dispatch) => {
    dispatch(setCurrentKey(key));
    dispatch(setCurrentKey(null));
};

export interface IState {
    currentKey: string | null;
}

export const initialState: IState = { currentKey: null };

export const reducer = reducerWithInitialState(initialState)
    .case(setCurrentKey, (_, currentKey) => ({ currentKey }));

export function initializeStore(store: Store): void {
    document.addEventListener("keydown", ({ keyCode }) => {
        store.dispatch(setAndResetCurrentKey(String.fromCharCode(keyCode)));
    });
}
