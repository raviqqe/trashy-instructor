export enum BinId {
    Garbage = 1,
    Compost,
    Recycle,
}

interface IBin {
    color: string;
}

export const bins: { [id: number]: IBin } = {
    [BinId.Garbage]: { color: "darkslategray" },
    [BinId.Compost]: { color: "darkgreen" },
    [BinId.Recycle]: { color: "darkblue" },
};
