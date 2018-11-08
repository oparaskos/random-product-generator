import { ILogo } from "./ILogo";

export interface IProductInformation {
    name: string;
    slogan: string;
    type: string;
    companyName: string;
    footnote?: string | null;
}
