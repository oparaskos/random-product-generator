import { generateCompanyName } from "./generateCompanyName";
import { generateFootnote } from "./generateFootnote";
import { generateLogo } from "./generateLogo";
import { generateProductName } from "./generateProductName";
import { generateProductType } from "./generateProductType";
import { generateSlogan } from "./generateSlogan";

export function generateProduct() {
    const type = generateProductType();
    const name = generateProductName(type);
    const slogan = generateSlogan(name, type);
    const companyName = generateCompanyName();
    return {
        companyName,
        footnote: generateFootnote(slogan, name, type, companyName),
        logo: generateLogo(name, type),
        name,
        slogan,
        type,
    };
}
