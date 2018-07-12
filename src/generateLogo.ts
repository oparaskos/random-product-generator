import { ILogo } from "./ILogo";
import { randomElement } from "./randomElement";
const backgroundShapes = ["star", "circle", "ellipse", "square", "triangle"];
const foregroundShapes = ["star", "text", "hammer", "sportscar", "thumbsup", "fountainpen", "dancing"];
export function generateLogo(name: string, type: string): ILogo {
    return {
        background: randomElement(backgroundShapes),
        foreground: randomElement(foregroundShapes),
    };
}
