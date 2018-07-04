import { shallow } from "enzyme";
import * as React from "react";

import Bin from "../Bin";

test("Render", () => {
    shallow(<Bin color="red" />);
});
