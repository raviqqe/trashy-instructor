import { Store } from "redux";

import { rubbish, RubbishId } from "../domain";
import { actionCreators } from "./rubbish";

const setAndResetCurrentKey = (key: string): any => dispatch => {
  for (const id in rubbish) {
    if (key === rubbish[id].key) {
      dispatch(actionCreators.throwRubbish(Number(id)));
      break;
    }
  }

  if (key === "Z") {
    dispatch(actionCreators.throwRubbish(RubbishId.Apple));
    setTimeout(
      () => dispatch(actionCreators.throwRubbish(RubbishId.Paper)),
      1000
    );
  }
};

export function initializeStore(store: Store): void {
  document.addEventListener("keydown", ({ keyCode }) => {
    store.dispatch(setAndResetCurrentKey(String.fromCharCode(keyCode)));
  });
}
