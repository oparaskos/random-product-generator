import { randomAdjective } from "./generateProductName";
import { randomElement } from "./randomElement";
export function generateSlogan(name: string, type: string): string {
    return randomElement([
        () => `I love my ${name}`,
        () => `${name}, for me`,
        () => `${name}, Now!`,
        () => `Who wants ${name}`,
        () => `Where's my ${name}`,
        () => `${name}, How`,
        () => `What, ${name}`,
        () => `Buy ${name}`,
        () => `Have you tried ${name}`,
        () => `${name} is the best ${type} ever`,
        () => "So good it doesn't need a slogan",
        () => randomAdjective(),
        () => `${randomAdjective()} and ${generateSlogan(name, type)}`,
    ])() + randomElement(["?", "!", "*", ""]);
}
