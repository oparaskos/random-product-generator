import { HSV } from "./HSV";
import { IProductBrandingModel } from "./IProductBrandingModel";
import { IProductRenderer } from "./IProductRenderer";
import { randomElement } from "./randomElement";
import { ShapeRenderer } from "./ShapeRenderer";
import { fonts } from "./test_fontlist";

const LOGO_POSITION = { x: 200, y: 300 };
const MAX_TEXT_WIDTH = 200;

export function randomFont() {
    return { size: Math.random() * MAX_TEXT_WIDTH / 10 + 10, font: randomElement(fonts) };
}

export class DefaultProductRenderer implements IProductRenderer {
    public render(model: IProductBrandingModel, ctx: CanvasRenderingContext2D): Promise<void> {
        if (!ctx) {
            throw new Error("Unable to get canvas context");
        }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.renderBackground(model, ctx);
        ctx.translate(LOGO_POSITION.x, LOGO_POSITION.y);
        this.renderLogo(model, ctx);
        return Promise.resolve();
    }

    public renderBackground(model: IProductBrandingModel, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, 400, 600);
    }

    public renderLogo(model: IProductBrandingModel, ctx: CanvasRenderingContext2D) {
        // Background
        ctx.fillStyle = model.pallette.complementary.valueOf();
        ShapeRenderer.from(model.product.logo.background).render(ctx);
        // Foreground
        ctx.fillStyle = model.pallette.colours[0].valueOf();
        ShapeRenderer.from(model.product.logo.foreground).render(ctx);
        // Product Name
        ctx.fillStyle = (model.pallette.colours[1] || new HSV(0, 0, 0)).valueOf();
        const font = randomFont();
        ctx.font = font.size + "px " + font.font;
        ctx.textAlign = "center";
        const w = ctx.measureText(model.product.name).width;
        if (w > MAX_TEXT_WIDTH) {
            ctx.font = (font.size / w) * MAX_TEXT_WIDTH + "px " + font.font;
        }
        ctx.strokeText(model.product.name, 10, 10);
        ctx.fillText(model.product.name, 10, 10);
    }
}
