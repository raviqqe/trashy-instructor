import { shallow } from "enzyme";
import * as React from "react";

import { BinId } from "../../domain";
import Bin from "../Bin";

test("Render", () => {
    shallow(<Bin id={BinId.Garbage} />);
});
