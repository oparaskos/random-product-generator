import { ISvgSnippet } from "../api/ISvgSnippet";
import { IProductBrandingModel } from "../api/IProductBrandingModel";
import { HandlebarsDefsRenderer } from "./HandlebarsDefsRenderer";
import { randomElement } from "../util/randomElement";

const backgroundTemplates = [
    "background/honeycomb",
];

export class BackgroundRenderer extends HandlebarsDefsRenderer {
    constructor() {
        super(randomElement(backgroundTemplates));
    }

    public async render(model: IProductBrandingModel): Promise<ISvgSnippet> {
        return await super.render(model);
    }
}
