import { IHSV } from "./IHSV";
export function hueShift(colour: IHSV, amount: number): IHSV {
    return {
        ...colour,
        h: (colour.h + amount) % 360,
    };
}
