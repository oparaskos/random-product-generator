import { whiteCards } from "./cards-against-humanity";
import { experiences } from "./experiences";
import { randomAdjective } from "./generateProductName";
import { randomElement } from "./randomElement";

const randomPunct = [
    "⸮", "¿", "‽", "?", "!", "*", "†", "‡", "¹", "²", "™", "®",
    ...new Array(10).fill(""),
];

export function generateSlogan(name: string, type: string): string {
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
