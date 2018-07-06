import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";

import * as bins from "./bins";
import * as keyboard from "./keyboard";

export default function(): Store {
    const store = createStore(combineReducers({
        bins: bins.reducer,
        keyboard: keyboard.reducer,
    }), applyMiddleware(thunk));

    keyboard.initializeStore(store);

    return store;
}
