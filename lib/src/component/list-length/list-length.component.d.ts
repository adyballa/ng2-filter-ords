import { OnInit } from '@angular/core';
import { Router } from "@angular/router";
export declare class ListLengthComponent implements OnInit {
    private router;
    private length;
    constructor(router: Router);
    ngOnInit(): void;
    update(): void;
}
