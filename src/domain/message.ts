import { BinId } from "./bins";
import { RubbishId } from "./rubbish";

export interface IMessage {
  binId: BinId;
  rubbishId: RubbishId;
}
