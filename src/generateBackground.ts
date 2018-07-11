import { randomBackgroundType } from "./randomBackgroundType";
import { randomGradient } from "./randomGradient";
import { randomShape } from "./randomShape";
export function generateBackground() {
    return {
        gradient: randomGradient(),
        shape: randomShape(),
        type: randomBackgroundType(),
    };
}
