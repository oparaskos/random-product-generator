import { IProductBrandingModel } from "./IProductBrandingModel";

export interface IProductRenderer {
    render(model: IProductBrandingModel, ctx: CanvasRenderingContext2D): Promise<void>;
}
