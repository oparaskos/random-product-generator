import { IProductBrandingModel } from "./IProductBrandingModel";
import { ISvgSnippet } from "./ISvgSnippet";

export interface IRenderer {
    render(model: any): Promise<ISvgSnippet>;
}
