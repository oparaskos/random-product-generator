import { ISvgSnippet } from "../api/ISvgSnippet";
import { IProductBrandingModel } from "../api/IProductBrandingModel";
import { HandlebarsRenderer } from "./HandlebarsRenderer";

export class HandlebarsDefsRenderer extends HandlebarsRenderer {
    constructor(templateName: string) {
        super(templateName);
    }

    public async render(model: IProductBrandingModel): Promise<ISvgSnippet> {
        const defsBody = (await super.render(model)).body;
        if (defsBody) {
            return {
                defs: [defsBody],
            };
        }
        return {};
    }
}
