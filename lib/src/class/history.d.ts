export declare class History<Item> {
    private _length;
    private _items;
    constructor(_length?: number);
    unshift(item: Item): Item;
    get(i?: number): Item;
}
