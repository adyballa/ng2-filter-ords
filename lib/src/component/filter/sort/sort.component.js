"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var decorator_ord_1 = require("decorator-ord");
var listModel_service_1 = require("../../cars/listModel.service");
var SortComponent = (function () {
    function SortComponent(listService) {
        this.listService = listService;
        this.fieldChange = new core_1.EventEmitter(true);
    }
    SortComponent.prototype.ngOnInit = function () {
    };
    SortComponent.prototype.ngAfterViewInit = function () {
        if (this.cardinality === 0) {
            this.fieldChange.emit(null);
        }
        this.setIcon();
    };
    SortComponent.prototype.sort = function (event, fieldName) {
        decorator_ord_1.OrdConfig.setOrdinalityOfField(fieldName, this.ordFields);
        this.fieldChange.emit(null);
    };
    SortComponent.prototype.getOrdField = function () {
        return (decorator_ord_1.isFieldOrd(this.field)) ? this.field : null;
    };
    SortComponent.prototype.setIcon = function () {
        var f = this.getOrdField();
        if (this.icon && f) {
            this.icon.nativeElement.classList.remove("glyphicon-chevron-" + ((f.dir === "ASC") ? "up" : "down"));
            this.icon.nativeElement.classList.add("glyphicon-chevron-" + ((f.dir === "ASC") ? "down" : "up"));
        }
    };
    SortComponent.prototype.setDir = function (dir) {
        var f = this.getOrdField();
        if (f) {
            f.dir = ((dir === "SWAP") ? ((f.dir === "ASC") ? "DESC" : "ASC") : dir);
            this.setIcon();
            this.fieldChange.emit(null);
        }
    };
    SortComponent.prototype.changeDir = function () {
        this.setDir("SWAP");
    };
    SortComponent.prototype.fieldType = function () {
        var _this = this;
        return (this.ordFields.find(function (ordField) { return ordField.name == _this.field.name; }) === undefined) ? "eq" : "ord";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SortComponent.prototype, "cardinality", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.EqField)
    ], SortComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SortComponent.prototype, "ordFields", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SortComponent.prototype, "fieldChange", void 0);
    __decorate([
        core_1.ViewChild('icon'), 
        __metadata('design:type', core_1.ElementRef)
    ], SortComponent.prototype, "icon", void 0);
    SortComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'field-sort',
            templateUrl: 'sort.component.html',
            styleUrls: ['sort.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof listModel_service_1.ListModelService !== 'undefined' && listModel_service_1.ListModelService) === 'function' && _a) || Object])
    ], SortComponent);
    return SortComponent;
    var _a;
}());
exports.SortComponent = SortComponent;
//# sourceMappingURL=sort.component.js.map