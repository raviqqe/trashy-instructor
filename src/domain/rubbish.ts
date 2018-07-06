import { ComponentClass } from "react";
import styled from "styled-components";

import { BinId } from "./bins";

export enum RubbishId {
    Apple = 1,
    Paper,
}

export interface IRubbish {
    binId: BinId;
    image: ComponentClass;
    key: string;
}

export const rubbish: { [id: number]: IRubbish } = {
    [RubbishId.Apple]: {
        binId: BinId.Compost,
        image: styled(require("react-icons/lib/fa/apple"))`color: crimson;`,
        key: "A",
    },
    [RubbishId.Paper]: {
        binId: BinId.Recycle,
        image: styled(require("react-icons/lib/io/ios-paper"))`color: lightyellow`,
        key: "P",
    },
};
