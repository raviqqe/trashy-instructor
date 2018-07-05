import { shallow } from "enzyme";
import * as React from "react";

import { RubbishId } from "../../domain";
import Rubbish from "../Rubbish";

test("Render", () => {
    shallow(<Rubbish id={RubbishId.Apple} />);
});
