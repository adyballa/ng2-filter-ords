import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { ListModelService } from "../../cars/listModel.service";
export declare class SortComponent implements OnInit, AfterViewInit {
    private listService;
    private cardinality;
    private field;
    private ordFields;
    fieldChange: EventEmitter<any>;
    private icon;
    constructor(listService: ListModelService);
    ngOnInit(): void;
    ngAfterViewInit(): any;
    sort(event: Event, fieldName: string): void;
    private getOrdField();
    setIcon(): void;
    private setDir(dir);
    changeDir(): void;
    fieldType(): string;
}
