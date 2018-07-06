import { ComponentClass } from "react";
import styled from "styled-components";

import { BinId } from "./bins";

export enum RubbishId {
  Apple = 1,
  Paper,
  Pencil
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
    color: "gray",
    image: styled(require("react-icons/lib/io/ios-paper"))`
      color: lightyellow;
    `,
    key: "S",
    name: "Paper"
  },
  [RubbishId.Pencil]: {
    binId: BinId.Garbage,
    color: "olivedrab",
    image: styled(require("react-icons/lib/fa/pencil"))`
      color: olivedrab;
    `,
    key: "D",
    name: "Pencil"
  }
};
