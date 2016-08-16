import { OnInit, OnDestroy } from '@angular/core';
import { ListModelService } from './listModel.service';
import { IOrd, IOrdConfig } from "decorator-ord";
import { Car } from "../class/car";
import { ActivatedRoute } from "@angular/router";
export declare class CarsComponent implements OnInit, OnDestroy {
    private listService;
    private route;
    private _result;
    private _config;
    private _subscribe;
    private _limit;
    private _filterComponent;
    constructor(listService: ListModelService, route: ActivatedRoute);
    ngOnInit(): any;
    ngOnDestroy(): any;
    fieldChange(): void;
    calculate(): void;
    config: IOrdConfig;
    result: Car[];
    less: IOrd[];
}
