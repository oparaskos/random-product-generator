import { whiteCards } from "./cards-against-humanity";
import { randomElement } from "./randomElement";

export const footnoteCharacters = ["*", "†", "‡", "¹", "²"];

export function generateFootnote(slogan: string, name: string, type: string, companyName: string): string | null {
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
