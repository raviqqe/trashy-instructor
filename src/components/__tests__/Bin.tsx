import { mount, shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import { BinId } from "../../domain";
import createStore from "../../state";
import Bin from "../Bin";

test("Render", () => {
  shallow(
    <Provider store={createStore()}>
      <Bin id={BinId.Garbage} />
    </Provider>
  );
});

test("Render", () => {
  const id = BinId.Garbage;
  const store = createStore();

  expect(store.getState().bins[id]).toEqual({
    position: { x: 0, y: 0 },
    shaken: false
  });

  mount(
    <Provider store={store}>
      <Bin id={id} />
    </Provider>
  );

  expect(store.getState().bins[id]).toBeInstanceOf(Object);
});
