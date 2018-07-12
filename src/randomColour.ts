import { HSV } from "./HSV";
export function randomColour(): HSV {
    const h = Math.random() * 360;
    const s = Math.random() * 100;
    const v = Math.random() * 100;
    return new HSV(h, s, v);
}
