import { IBackgroundModel } from "./IBackgroundModel";
import { IPallette } from "./IPallette";
import { IProductInformation } from "./IProductInformation";

export interface IProductBrandingModel {
    background: IBackgroundModel;
    pallette: IPallette;
    product: IProductInformation;
}
