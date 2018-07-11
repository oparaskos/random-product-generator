import { flavours } from "./flavours";
import { productTypes } from "./productTypes";
import { randomElement } from "./randomElement";
export function generateProductType() {
    return randomElement([
        () => randomElement(productTypes),
        () => `${randomElement(flavours)} flavoured ${randomElement(productTypes)}`,
        () => `${randomElement(flavours)} ${randomElement(productTypes)}`,
        () => `${randomElement(flavours)} brew`,
    ])();
}
