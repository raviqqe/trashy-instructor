import { Store } from "redux";

import { rubbish } from "../domain";
import { actionCreators } from "./rubbish";

const setAndResetCurrentKey = (key: string): any => (dispatch) => {
    for (const id in rubbish) {
        if (rubbish[id].key === key) {
            dispatch(actionCreators.throwRubbish(Number(id)));
            break;
        }
    }
};

export function initializeStore(store: Store): void {
    document.addEventListener("keydown", ({ keyCode }) => {
        store.dispatch(setAndResetCurrentKey(String.fromCharCode(keyCode)));
    });
}
