import { readFile, writeFile, writeJson } from "fs-extra";
import { DefaultProductRenderer } from "./DefaultProductRenderer";
import { generateBackground } from "./generateBackground";
import { generatePallette } from "./generatePallette";
import { generateProduct } from "./generateProduct";
import { IProductBrandingModel } from "./IProductBrandingModel";

export function generateRandomArt(): IProductBrandingModel {
    const pallette = generatePallette();
    return {
        background: generateBackground(),
        pallette,
        product: generateProduct(),
    };
}

function render(model: IProductBrandingModel): Promise<HTMLCanvasElement> {
    const canvas: HTMLCanvasElement = new (require("canvas"))(1920, 1080);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Unable to get canvas context");
    }
    return new DefaultProductRenderer().render(model, ctx)
        .then(() => canvas);
}

function main() {
    const model = generateRandomArt();
    writeJson("model.json", model)
        .then(() => {
            return render(model)
            .then((canvas: HTMLCanvasElement) => {
                const url = canvas.toDataURL();
                return writeFile("output.html", `<html><body><img src="${url}" /></body></html>`);
                });
        });
}

main();
