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

// tslint:disable-next-line:no-namespace
export namespace HSV {
    export function random(): HSV {
        const h = Math.random() * 360;
        const s = Math.random() * 100;
        const v = Math.random() * 100;
        return new HSV(h, s, v);
    }
}
