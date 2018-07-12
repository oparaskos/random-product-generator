import { IShapeRenderer } from "./IShapeRenderer";

export class StarRenderer implements IShapeRenderer {
    constructor(private numPoints: number, private minScale: number, private maxScale: number) {
        this.numPoints = Math.round(numPoints);
        if (this.numPoints < 3) {
            throw new Error("Stars need at least 3 points");
        }
    }
    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        const degreesBetweenPoints = (Math.PI * 2) / this.numPoints;
        for (let x = 0; x < this.numPoints; ++x) {
            ctx.rotate(degreesBetweenPoints / 2);
            ctx.lineTo(0, this.minScale);
            ctx.rotate(degreesBetweenPoints / 2);
            ctx.lineTo(0, this.maxScale);
        }
        ctx.fill();
    }
}
