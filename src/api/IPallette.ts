import { HSV } from "./HSV";
import { randomElement } from "../util/randomElement";

export interface IPallette {
    colours: HSV[];
    complementary: HSV;
    type: string;
}

// tslint:disable-next-line:no-namespace
export namespace IPallette {
    export function random(): IPallette {
        const baseColour = HSV.random();
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
}
