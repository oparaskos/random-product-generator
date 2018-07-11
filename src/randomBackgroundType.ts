import { randomElement } from "./randomElement";
export function randomBackgroundType(): string {
    return randomElement([
        "pattern",
        "solid",
    ]);
}
