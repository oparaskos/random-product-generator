export function randomElement<T>(array: T[]): T {
    const len = array.length;
    return array[Math.floor(Math.random() * len)];
}
