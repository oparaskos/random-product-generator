import { IHSV } from "./IHSV";
export function randomColour(): IHSV {
    const h = Math.random() * 360;
    const s = Math.random() * 100;
    const v = Math.random() * 100;
    return { h, s, v };
}
