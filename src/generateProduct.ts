import { generateLogo } from "./generateLogo";

import { generateProductType } from "./generateProductType";

import { generateSlogan } from "./generateSlogan";

import { generateProductName } from "./generateProductName";

export function generateProduct() {
    const type = generateProductType();
    const name = generateProductName(type);
    return {
        logo: generateLogo(name, type),
        name,
        slogan: generateSlogan(name, type),
        type,
    };
}
