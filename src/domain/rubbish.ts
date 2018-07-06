import { BinId } from "./bins";

export enum RubbishId {
    Apple = 1,
    Paper,
}

export interface IRubbish {
    binId: BinId;
    image: () => JSX.Element;
    key: string;
}

export const rubbish: { [id: number]: IRubbish } = {
    [RubbishId.Apple]: {
        binId: BinId.Compost,
        image: require("react-icons/lib/fa/apple"),
        key: "A",
    },
    [RubbishId.Paper]: {
        binId: BinId.Recycle,
        image: require("react-icons/lib/io/ios-paper"),
        key: "P",
    },
};
