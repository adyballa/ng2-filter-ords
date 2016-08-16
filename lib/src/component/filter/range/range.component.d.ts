import { EventEmitter } from '@angular/core';
import { Field, IField } from "decorator-ord";
import { IBorderField, IReBorder, FilterProperties } from "../filter.component";
export declare class RangeComponent implements IBorderField {
    filterChange: EventEmitter<IField>;
    borderChange: EventEmitter<IReBorder>;
    field: Field;
    props: FilterProperties;
    private borderRecord;
    private _history;
    private _border;
    private _value;
    update(): void;
    setBorder(fInit?: boolean): void;
}
