import { ISvgSnippet } from "../api/ISvgSnippet";
import { IProductBrandingModel } from "../api/IProductBrandingModel";
import { HandlebarsRenderer } from "./HandlebarsRenderer";

export interface ISideDefinitions {
    top: ISvgSnippet;
    bottom: ISvgSnippet;
    left: ISvgSnippet;
    right: ISvgSnippet;
    front: ISvgSnippet;
    back: ISvgSnippet;
}

export class BoxNetRenderer extends HandlebarsRenderer {
    constructor(
        private width: number,
        private height: number,
        private depth: number,
        private sides: ISideDefinitions) {
        super("base/box-net");
    }

    public async render(model: IProductBrandingModel): Promise<ISvgSnippet> {
        return await super.render({
            ...model,
            depth: this.depth,
            depthWidth: this.depth + this.width,
            height: this.height,
            sides: this.sides,
            width: this.width,
        });
    }
}
