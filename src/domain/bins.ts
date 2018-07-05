export enum BinId {
    Garbage = 1,
    Compost,
    Recycle,
}

interface IBin {
    color: string;
}

export const bins = {
    [BinId.Garbage]: { color: "black" },
    [BinId.Compost]: { color: "green" },
    [BinId.Recycle]: { color: "blue" },
};
