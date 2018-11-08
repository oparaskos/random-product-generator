import { ISvgSnippet } from "../api/ISvgSnippet";
import { IProductBrandingModel } from "../api/IProductBrandingModel";
import { HandlebarsRenderer } from "./HandlebarsRenderer";
import { BackgroundRenderer } from "./BackgroundRenderer";
import { PackagingRenderer } from "./PackagingRenderer";
import { mergeSnippets } from "./util/mergeSnippets";
export class DefaultProductRenderer extends HandlebarsRenderer {
    constructor() {
        super("default");
    }

    public async render(model: IProductBrandingModel): Promise<ISvgSnippet> {
        const snippets = mergeSnippets(await Promise.all([
            new BackgroundRenderer().render(model),
            new PackagingRenderer().render(model),
        ]));
        return super.render({...model, ...snippets});
    }
}
