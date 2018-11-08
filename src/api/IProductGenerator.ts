import { IProductBrandingModel } from "./IProductBrandingModel";

export interface IProductGenerator {
    generate(seed: number): Promise<IProductBrandingModel>;
}
