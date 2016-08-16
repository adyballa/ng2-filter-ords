import { EventEmitter, QueryList, ElementRef, OnInit } from '@angular/core';
import { EqField, IField } from "decorator-ord";
import { FilterProperties, IReCount, ICounterField } from "../filter.component";
export declare class CheckboxComponent implements OnInit, ICounterField {
    inputs: QueryList<ElementRef>;
    filterChange: EventEmitter<IField>;
    counterChange: EventEmitter<IReCount>;
    field: EqField;
    props: FilterProperties;
    options: Array<string>;
    private countRecord;
    private _history;
    private _count;
    ngOnInit(): any;
    setCount(): void;
    private _getProp();
    update(ev: Event): void;
}
