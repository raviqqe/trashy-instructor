import { IMovement, IPosition } from "../domain";

export function elementToPosition(element: HTMLElement): IPosition {
    const { bottom, left, right, top } = element.getBoundingClientRect();

    return { x: (left + right) / 2, y: (bottom + top) / 2 };
}

export function positionsToMovement(start: IPosition, end: IPosition): IMovement {
    return { x: end.x - start.x, y: end.y - start.y };
}
