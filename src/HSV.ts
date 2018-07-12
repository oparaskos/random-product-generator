export class HSV {

    constructor(
        public h: number,
        public s: number,
        public v: number) { }

    public valueOf(): string {
        return `hsl(${this.h}, ${this.s}%, ${this.v}%)`;
    }

    public hueShift(amount: number): HSV {
        const h = (this.h + amount) % 360;
        return new HSV(h, this.s, this.v);
    }
}
