import { combineReducers, createStore, Store } from "redux";

import * as keyboard from "./keyboard";

export default function(): Store {
    const store = createStore(combineReducers({ keyboard: keyboard.reducer }));

    keyboard.initializeStore(store);

    return store;
}
