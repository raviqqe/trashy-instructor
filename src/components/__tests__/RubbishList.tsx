import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import createStore from "../../state";
import RubbishList from "../RubbishList";

test("Render", () => {
    shallow(<Provider store={createStore()}><RubbishList /></Provider>);
});
