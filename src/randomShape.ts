import { randomElement } from "./randomElement";
export function randomShape(): string {
    return randomElement([
        "star",
        "square",
        "diamond",
        "kite",
        "ellipse",
    ]);
}
