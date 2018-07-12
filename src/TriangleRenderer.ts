import { IShapeRenderer } from "./IShapeRenderer";

export class TriangleRenderer implements IShapeRenderer {
    constructor(private scale: number) {
    }
    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        const degreesBetweenPoints = (Math.PI * 2) / 3;
        for (let x = 0; x < 3; ++x) {
            ctx.rotate(degreesBetweenPoints);
            ctx.lineTo(0, this.scale);
        }
        ctx.fill();
    }
}
