import { EllipseShapeRenderer } from "./EllipseShapeRenderer";
import { IShapeRenderer } from "./IShapeRenderer";
import { Shape } from "./Shapes";
import { SquareRenderer } from "./SquareRenderer";
import { StarRenderer } from "./StarRenderer";
import { TriangleRenderer } from "./TriangleRenderer";

export const ShapeRenderer = {
    from: (shape: Shape | string): IShapeRenderer => {
        switch (shape) {
            case "ellipse":
            case "oval":
                return new EllipseShapeRenderer(Math.random(), Math.random(), Math.random() * 100 + 10);
            case "circle":
                return new EllipseShapeRenderer(1, 1, Math.random() * 100 + 10);
            case "star":
                return new StarRenderer(Math.random() * 7 + 3, Math.random() * 100, Math.random() * 100 + 10);
            case "square":
                return new SquareRenderer(Math.random() * 100 + 10);
            case "target":
            case "triangle":
            default:
                return new TriangleRenderer(Math.random() * 100);
            // throw new Error("No renderer for " + shape);
        }
    },
};
