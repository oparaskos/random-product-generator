import { adjectives } from "./adjectives";
import { randomElement } from "./randomElement";
import { upperFirst } from "./upperFirst";
import { verbs } from "./verbs";

export function randomVerb() {
    return upperFirst(randomElement(verbs));
}
export function randomAdjective() {
    return upperFirst(randomElement(adjectives));
}
export function generateProductName(type: string) {
    return randomElement([
        () => `${randomVerb()}! ${type}`,
        () => `${randomAdjective()} ${type}`,
    ])();
}
