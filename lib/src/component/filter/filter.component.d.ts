import { EventEmitter, AfterViewChecked } from '@angular/core';
import { EqField, IField, CountRecord, BorderRecord } from "decorator-ord";
import { ListModelService } from "../cars/listModel.service";
export interface FilterProperty {
    [name: string]: (string | number | Array<string | number>);
}
export interface FilterProperties {
    top: FilterProperty;
    bottom: FilterProperty;
    eq: FilterProperty;
}
export interface IReCount {
    countRecord: CountRecord;
    props: FilterProperties;
}
export interface IReBorder {
    borderRecord: BorderRecord;
    props: FilterProperties;
}
export interface ICounterField {
    setCount(): void;
}
export interface IBorderField {
    setBorder(fInit?: boolean): void;
}
export declare type TFilterPropertyKeys = 'top' | 'bottom' | 'eq';
export declare class FilterComponent implements AfterViewChecked {
    private listService;
    filtered: EventEmitter<any>;
    props: FilterProperties;
    fields: EqField[];
    private _model;
    private _config;
    private _history;
    private _viewCheckedCounter;
    private counter;
    private border;
    constructor(listService: ListModelService);
    ngAfterViewChecked(): any;
    viewCheckedCounter: any;
    countRecord: CountRecord;
    borderRecord: BorderRecord;
    reCount(event: IReCount): void;
    reBorder(event: IReBorder): void;
    private _filter(cs, props);
    filter(field: IField): void;
    createField(field: EqField): string;
    getOptions(name: string): Array<string>;
}
