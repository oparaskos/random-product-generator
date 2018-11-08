import { randomElement } from "./randomElement";
import { upperFirst } from "./upperFirst";
import { verbs } from "./verbs";

export function joinTwoWords() {
    let a = randomElement(verbs);
    a = a.slice(0, a.length / 2);
    let b = randomElement(verbs);
    b = b.slice(b.length / 2);
    return upperFirst(randomElement([`${a}${b}`, `${a}oo`, `${a}ala`, `${a}o${b}`, `${b}é${a}`]));
}
