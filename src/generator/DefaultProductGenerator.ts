import { adjectives } from "../util/adjectives";
import { randomElement } from "../util/randomElement";
import { upperFirst } from "../util/upperFirst";
import { verbs } from "../util/verbs";
import { IProductGenerator } from "../api/IProductGenerator";
import { whiteCards } from "../util/cards-against-humanity";
import { experiences } from "../util/experiences";
import { flavours } from "../util/flavours";
import { productTypes } from "../util/productTypes";
import { joinTwoWords } from "../util/joinTwoWords";
import { IProductBrandingModel } from "../api/IProductBrandingModel";
import { IPallette } from "../api/IPallette";

const companySuffixes = ["", " ltd", " Limited", " Group", " LLC", " inc", " Incorporated", " Megacorp", " Holdings"];
const footnoteCharacters = ["*", "†", "‡", "¹", "²"];
const prefixes = ["Canned", "Condensed", "Liquid", "Unflavoured", "Clotted", "Cottage"];
const randomPunct = [
    "⸮", "¿", "‽", "?", "!", "*", "†", "‡", "¹", "²", "™", "®",
    ...new Array(10).fill(""),
];
function generateCompanyName() {
    return randomElement([
        joinTwoWords(),
        upperFirst(`${randomElement(adjectives)}${randomElement(["ify", "less", "ful", ".com", " UK"])}`),
    ]) + randomElement(companySuffixes);
}

function generateFootnote(slogan: string, name: string, type: string, companyName: string): string | null {
    if (footnoteCharacters.indexOf(slogan[slogan.length - 1]) === -1) {
        return null;
    }
    const footnoteCharacter = slogan[slogan.length - 1];
    if (["™", "®"].indexOf(footnoteCharacter) !== -1) {
        return `${name} is a registered trademark of ${companyName}`;
    }
    const footnote: string = randomElement([
        mayCause(name),
        () => "The truth of this statement may be exaggerated",
        () => "Enlarged to show detail",
        () => "Naturally flavoured",
        () => "1 of your 5 a day",
        () => `According to a study of ${randomElement(whiteCards)}`,
    ])();
    return `${footnoteCharacter} ${footnote}`;
}

function mayCause(name: string): () => string {
    return () => {
        const sideEffects: string[] = [];
        const randomCount = Math.random() * 5;
        for (let i = 0; i <= randomCount; ++i) {
            sideEffects.push(randomElement(whiteCards));
        }
        const lastEffect
            = sideEffects.length > 1 ? " or " + sideEffects[sideEffects.length - 1] : "";
        return `${name} may cause ${sideEffects.slice(0, -1).join(", ")}${lastEffect}`;
    };
}

function randomVerb() {
    return upperFirst(randomElement(verbs));
}
function randomAdjective() {
    return upperFirst(randomElement(adjectives));
}
function generateProductName(type: string) {
    return randomElement([
        () => `${randomVerb()}! ${type}`,
        () => `${randomAdjective()} ${type}`,
    ])();
}

function generateSlogan(name: string, type: string): string {
    return randomElement([
        () => `${randomElement(["I love my", "Who doesn't love"])} ${name}`,
        () => `${randomElement(["Its always ", ""])}${name}, for me`,
        () => `${name}, ${randomNow()}`,
        () => `Who wants ${name}`,
        () => `Where's my ${name}`,
        () => `Give me ${name} ${randomNow()}`,
        () => `${name}, How`,
        () => `What, ${name}`,
        () => `Buy ${name}`,
        () => `Have you tried ${name}`,
        () => `${randomElement([name + randomElement([", it's", ""]) + ", ", "Nothing is "])}`
            + randomComparison(),
        () => randomComparison(),
        () => `${name}, It's like ${randomElement([...experiences, ...whiteCards])}`,
        () => `It's ${type}`,
        () => `I don't need ${type}, I need ${name}!`,
        () => `${name} is the best ${type} ever`,
        () => "So good it doesn't need a slogan",
        () => randomAdjective(),
        () => `${randomAdjective()} ${type}`,
        () => `${name} it's ${randomAdjective()}`,
        () => `${randomAdjective()}${randomElement([" and", ",", ";"])} ${generateSlogan(name, type)}`,
    ])() + randomElement(randomPunct);
}
function randomComparison() {
    return randomElement(["like ", "Better than ", "Worse than ", ""])
        + randomElement([...experiences, ...whiteCards]);
}

function randomNow() {
    return randomElement(["Now!", "NOW!", ""]);
}

function generateProductType() {
    return randomElement([
        () => randomElement(productTypes),
        () => `${randomElement(flavours)} flavoured ${randomElement(productTypes)}`,
        () => `${randomElement(flavours)} ${randomElement(productTypes)}`,
        () => `${randomElement(flavours)} brew`,
        () => `${randomElement(prefixes)} ${randomElement(productTypes)}`,
    ])();
}

export class DefaultProductGenerator implements IProductGenerator {
    public async generate(seed: number): Promise<IProductBrandingModel> {
        const companyName = generateCompanyName();
        const type = generateProductType();
        const name = generateProductName(type);
        const slogan = generateSlogan(name, type);
        const footnote = generateFootnote(slogan, name, type, companyName);

        return {
            pallette: IPallette.random(),
            product: { name, companyName, slogan, type, footnote },
        };
    }
}
