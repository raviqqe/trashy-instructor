import { shallow } from "enzyme";
import * as React from "react";

import Garbage from "../Garbage";

test("Render", () => {
    shallow(<Garbage />);
});
