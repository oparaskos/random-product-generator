import { adjectives } from "./adjectives";
import { randomElement } from "./randomElement";
import { verbs } from "./verbs";
export function upperFirst(input: string): string {
    return input[0].toUpperCase() + input.slice(1);
}
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
