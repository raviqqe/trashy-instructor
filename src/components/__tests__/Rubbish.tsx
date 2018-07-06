import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";

import { RubbishId } from "../../domain";
import createStore from "../../state";
import Rubbish from "../Rubbish";

test("Render", () => {
    shallow(<Provider store={createStore()}><Rubbish id={RubbishId.Apple} /></Provider>);
});
