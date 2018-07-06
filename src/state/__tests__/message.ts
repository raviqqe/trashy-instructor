import createStore from "..";
import { BinId, RubbishId } from "../../domain";
import { actionCreators, initialState, IState } from "../message";

function getState(store): IState {
  return store.getState().message;
}

test("Send a message", async () => {
  const store = createStore();
  expect(getState(store)).toEqual(initialState);

  const message = { binId: BinId.Garbage, rubbishId: RubbishId.Apple };

  store.dispatch(actionCreators.sendMessage(message) as any);
  expect(getState(store)).toEqual({ message });
});
