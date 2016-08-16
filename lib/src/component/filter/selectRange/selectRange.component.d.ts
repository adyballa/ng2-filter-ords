import { EventEmitter, OnInit } from '@angular/core';
import { Field, IField } from "decorator-ord";
import { IReCount, FilterProperties, ICounterField } from "../filter.component";
export declare class SelectRangeComponent implements ICounterField, OnInit {
    filterChange: EventEmitter<IField>;
    counterChange: EventEmitter<IReCount>;
    field: Field;
    props: FilterProperties;
    private countRecord;
    private _history;
    private _count;
    ngOnInit(): any;
    update(key: 'top' | 'bottom', ev: Event): void;
    setCount(): void;
}
