import createStore from "..";
import { BinId } from "../../domain";
import { actionCreators, initialState, IState, reducer } from "../bins";

function getState(store): IState {
    return store.getState().bins;
}

test("Set a bin position", async () => {
    const store = createStore();
    expect(getState(store)).toEqual(initialState);

    const position = { x: 20, y: 49 };

    store.dispatch(actionCreators.setPosition({ id: BinId.Garbage, position }));
    expect(getState(store)).toEqual({ ...initialState, [BinId.Garbage]: { position, shaken: false } });
});
