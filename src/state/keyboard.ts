import { Dispatch, Store } from "redux";

import { rubbish, RubbishId } from "../domain";
import { actionCreators } from "./rubbish";

function throwDifferentRubbish(
  dispatch: Dispatch<any>,
  rubbishIds: RubbishId[]
): void {
  for (const [index, id] of rubbishIds.entries()) {
    setTimeout(() => dispatch(actionCreators.throwRubbish(id)), index * 1000);
  }
}

const setAndResetCurrentKey = (key: string): any => dispatch => {
  for (const id in rubbish) {
    if (key === rubbish[id].key) {
      dispatch(actionCreators.throwRubbish(Number(id)));
      break;
    }
  }

  switch (key) {
    case "Z":
      throwDifferentRubbish(dispatch, [RubbishId.Apple, RubbishId.Paper]);
      break;
    case "X":
      throwDifferentRubbish(dispatch, [RubbishId.Paper, RubbishId.Pencil]);
      break;
  }
};

export function initializeStore(store: Store): void {
  document.addEventListener("keydown", ({ keyCode }) => {
    store.dispatch(setAndResetCurrentKey(String.fromCharCode(keyCode)));
  });
}
