import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";

import * as bins from "./bins";
import * as environment from "./environment";
import * as keyboard from "./keyboard";

export default function(): Store {
    const store = createStore(combineReducers({
        bins: bins.reducer,
        environment: environment.reducer,
        keyboard: keyboard.reducer,
    }), applyMiddleware(thunk));

    environment.initializeStore(store);
    keyboard.initializeStore(store);

    return store;
}
