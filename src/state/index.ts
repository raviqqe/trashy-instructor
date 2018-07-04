import { combineReducers, createStore, Store } from "redux";

import * as bins from "./bins";
import * as keyboard from "./keyboard";

export default function(): Store {
    const store = createStore(combineReducers({
        bins: bins.reducer,
        keyboard: keyboard.reducer,
    }));

    keyboard.initializeStore(store);

    return store;
}
