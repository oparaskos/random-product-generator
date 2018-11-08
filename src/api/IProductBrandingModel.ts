import { IPallette } from "./IPallette";
import { IProductInformation } from "./IProductInformation";

export interface IProductBrandingModel {
    pallette: IPallette;
    product: IProductInformation;
}
