import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import createStore from "../../state";
import Message from "../Message";

test("Render", () => {
    shallow(<Provider store={createStore()}><Message /></Provider>);
});
