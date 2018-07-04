import createStore from "..";
import { BinId } from "../../domain";
import { actionCreators, initialState, IState, reducer } from "../bins";

function getState(store): IState {
    return store.getState().bins;
}

test("Set a bin position", async () => {
    const store = createStore();
    expect(getState(store)).toEqual(initialState);

    store.dispatch(actionCreators.setPosition({ id: BinId.Garbage, position: { x: 20, y: 49 } }));
    expect(getState(store)).toEqual({ ...initialState, [BinId.Garbage]: { x: 20, y: 49 } });
});
