import { hueShift } from "./hueShift";
import { randomColour } from "./randomColour";
import { randomElement } from "./randomElement";
export function generatePallette() {
    const baseColour = randomColour();
    const palletteType = randomElement(["monochromatic", "adjacent", "triad"]);
    const colours = [baseColour];
    if (palletteType === "adjacent") {
        // Add adjacent colours
        colours.push(hueShift(baseColour, 30));
        colours.push(hueShift(baseColour, -30));
    }
    if (palletteType === "triad") {
        // Add tertiary colours
        colours.push(hueShift(baseColour, 120));
        colours.push(hueShift(baseColour, -120));
    }
    return {
        colours,
        complementary: hueShift(baseColour, 180),
        type: palletteType,
    };
}
