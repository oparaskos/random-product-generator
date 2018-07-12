import { IBackgroundModel } from "./IBackgroundModel";
import { randomBackgroundType } from "./randomBackgroundType";
import { randomGradient } from "./randomGradient";
import { randomShape } from "./randomShape";

export function generateBackground(): IBackgroundModel {
    return {
        gradient: randomGradient(),
        shape: randomShape(),
        type: randomBackgroundType(),
    };
}
