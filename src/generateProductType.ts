import { flavours } from "./flavours";
import { productTypes } from "./productTypes";
import { randomElement } from "./randomElement";
const prefixes = ["Canned", "Condensed", "Liquid", "Unflavoured", "Clotted", "Cottage"];
export function generateProductType() {
    return randomElement([
        () => randomElement(productTypes),
        () => `${randomElement(flavours)} flavoured ${randomElement(productTypes)}`,
        () => `${randomElement(flavours)} ${randomElement(productTypes)}`,
        () => `${randomElement(flavours)} brew`,
        () => `${randomElement(prefixes)} ${randomElement(productTypes)}`,
    ])();
}
