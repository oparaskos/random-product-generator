import { Shape } from "./Shapes";

type IGradient = null;
export interface IBackgroundModel {
    gradient: IGradient;
    shape: string;
    type: string;
}
