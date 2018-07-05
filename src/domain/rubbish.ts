import { BinId } from "./bins";

export enum RubbishId {
    Apple = 1,
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
};
