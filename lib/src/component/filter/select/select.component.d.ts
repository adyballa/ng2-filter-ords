import { EventEmitter } from '@angular/core';
import { EqField, IField } from "decorator-ord";
import { FilterProperties } from "../filter.component";
export declare class SelectComponent {
    filterChange: EventEmitter<IField>;
    field: EqField;
    props: FilterProperties;
    options: Array<string>;
    update(ev: Event): void;
}
