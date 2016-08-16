import { EventEmitter } from '@angular/core';
import { Field, IField } from "decorator-ord";
export declare class DateRangeComponent {
    filterChange: EventEmitter<IField>;
    field: Field;
    props: Object;
    update(): void;
}
