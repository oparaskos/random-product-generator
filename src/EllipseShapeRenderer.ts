import { IShapeRenderer } from "./IShapeRenderer";

export class EllipseShapeRenderer implements IShapeRenderer {
    constructor(private maj: number, private min: number, private scale: number) {
    }
    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(0, 0, this.maj * this.scale, 0, 360);
        ctx.fill();
    }
}
