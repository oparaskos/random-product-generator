import { IShapeRenderer } from "./IShapeRenderer";

export class SquareRenderer implements IShapeRenderer {
    constructor(private scale: number) {
    }
    public render(ctx: CanvasRenderingContext2D): void {
        const angle = Math.random() * Math.PI * 2;
        ctx.rotate(angle);
        ctx.translate(-this.scale / 2, -this.scale / 2);
        ctx.fillRect(0, 0, this.scale, this.scale);
        ctx.translate(this.scale / 2, this.scale / 2);
        ctx.rotate(-angle);
    }
}
