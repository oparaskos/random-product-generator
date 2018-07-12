import { IPallette } from "./IPallette";
import { randomColour } from "./randomColour";
import { randomElement } from "./randomElement";

export function generatePallette(): IPallette {
    const baseColour = randomColour();
    const palletteType = randomElement(["monochromatic", "adjacent", "triad"]);
    const colours = [baseColour];
    if (palletteType === "adjacent") {
        // Add adjacent colours
        colours.push(baseColour.hueShift(30));
        colours.push(baseColour.hueShift(-30));
    }
    if (palletteType === "triad") {
        // Add tertiary colours
        colours.push(baseColour.hueShift(120));
        colours.push(baseColour.hueShift(-120));
    }
    return {
        colours,
        complementary: baseColour.hueShift(180),
        type: palletteType,
    };
}
