import { IRenderer } from "../api/IRenderer";
import { ISvgSnippet } from "../api/ISvgSnippet";
import { compile, registerHelper } from "handlebars";
import { readFile } from "fs-extra";

export class HandlebarsRenderer implements IRenderer {
    constructor(private templateName: string) { }
    public async render(model: any): Promise<ISvgSnippet> {
        registerHelper("sum", (...args: any[]) => {
            const ctx = args[args.length - 1];
            return args.slice(0, -1).reduce((prev, arg) => prev + parseFloat(arg), 0);
        });
        registerHelper("product", (...args: any[]) => {
            const ctx = args[args.length - 1];
            return args.slice(0, -1).reduce((prev, arg) => prev * parseFloat(arg), 0);
        });
        registerHelper("randomNumber", (...args: any[]) => {
            const ctx = args[args.length - 1];
            const params = args.slice(0, -1);
            const minAngle = params[0] || 0;
            const maxAngle = params[1] || 1;
            return Math.random() * Math.abs(minAngle - maxAngle) + minAngle;
        });
        const template = await readFile(
            __dirname + `/../template/${this.templateName}.hbs`);
        return {
            body: compile("" + template)(model),
        };
    }
}
