import { randomElement } from "./randomElement";
const backgroundShapes = ["star", "circle", "oval", "square", "target", "triangle", "none"];
const foregroundShapes = ["star", "text", "hammer", "sportscar", "thumbsup", "fountainpen", "dancing"];
export function generateLogo(name: string, type: string) {
    return {
        background: randomElement(backgroundShapes),
        foreground: randomElement(foregroundShapes),
    };
}
