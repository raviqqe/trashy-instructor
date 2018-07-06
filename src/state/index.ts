import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";

import * as bins from "./bins";
import * as environment from "./environment";
import * as keyboard from "./keyboard";
import * as rubbish from "./rubbish";

export default function(): Store {
    const store = createStore(combineReducers({
        bins: bins.reducer,
        environment: environment.reducer,
        rubbish: rubbish.reducer,
    }), applyMiddleware(thunk));

    environment.initializeStore(store);
    keyboard.initializeStore(store);

    return store;
}
