import { HSV } from "./HSV";

export interface IPallette {
    colours: HSV[];
    complementary: HSV;
    type: string;
}
