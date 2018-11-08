import { ISvgSnippet } from "../api/ISvgSnippet";
import { IProductBrandingModel } from "../api/IProductBrandingModel";
import { IRenderer } from "../api/IRenderer";
import { randomElement } from "../util/randomElement";
import { BoxNetRenderer } from "./BoxNetRenderer";
import { HandlebarsRenderer } from "./HandlebarsRenderer";

const packagingTemplates = [
    "packaging/cereal",
];

export class PackagingRenderer implements IRenderer {
    private packagingStyle: string;

    constructor() {
        this.packagingStyle = randomElement(packagingTemplates);
    }

    public async render(model: IProductBrandingModel): Promise<ISvgSnippet> {
        const sides = await Promise.all(
            ["top", "bottom", "left", "right", "front", "back"]
                .map((side) => this.renderSide(side, model)));
        return new BoxNetRenderer(8, 12, 2, {
            top: sides[0],
            bottom: sides[1],
            left: sides[2],
            right: sides[3],
            front: sides[4],
            back: sides[5],
        }).render(model);
    }

    private async renderSide(side: string, model: IProductBrandingModel): Promise<ISvgSnippet> {
        return new HandlebarsRenderer(`${this.packagingStyle}/${side}`).render(model);
    }
}
