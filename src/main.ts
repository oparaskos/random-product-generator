import { readFile, writeJson } from "fs-extra";
import { generateBackground } from "./generateBackground";
import { generatePallette } from "./generatePallette";
import { generateProduct } from "./generateProduct";

export function generateRandomArt() {
    const pallette = generatePallette();
    return {
        background: generateBackground(),
        pallette,
        product: generateProduct(),
    };
}

const model = generateRandomArt();
writeJson("model.json", model)
    .then(() => {
        return readFile("model.json")
            .then((content) => {
                // tslint:disable:no-console
                console.info("" + content);
            });
    });
