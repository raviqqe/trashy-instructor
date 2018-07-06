import { ComponentClass } from "react";
import styled from "styled-components";

import { BinId } from "./bins";

export enum RubbishId {
  Apple = 1,
  Paper
}

export interface IRubbish {
  binId: BinId;
  color: string;
  image: ComponentClass;
  key: string;
  name: string;
}

export const rubbish: { [id: number]: IRubbish } = {
  [RubbishId.Apple]: {
    binId: BinId.Compost,
    color: "crimson",
    image: styled(require("react-icons/lib/fa/apple"))`
      color: crimson;
    `,
    key: "A",
    name: "Apple"
  },
  [RubbishId.Paper]: {
    binId: BinId.Recycle,
    color: "lightyellow",
    image: styled(require("react-icons/lib/io/ios-paper"))`
      color: lightyellow;
    `,
    key: "S",
    name: "Paper"
  }
};
