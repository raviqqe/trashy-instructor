export enum BinId {
  Garbage = 1,
  Compost,
  Recycle
}

interface IBin {
  color: string;
  name: string;
}

export const bins: { [id: number]: IBin } = {
  [BinId.Garbage]: { color: "darkslategray", name: "Garbage Bin" },
  [BinId.Compost]: { color: "darkgreen", name: "Compost Bin" },
  [BinId.Recycle]: { color: "darkblue", name: "Recycle Bin" }
};
