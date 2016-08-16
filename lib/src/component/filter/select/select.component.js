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
var SelectComponent = (function () {
    function SelectComponent() {
        this.filterChange = new core_1.EventEmitter();
    }
    SelectComponent.prototype.update = function (ev) {
        var sel = ev.target, op = sel.options[sel.selectedIndex];
        this.props['eq'][this.field.name] = (op.value === "") ? null : op.value;
        this.filterChange.emit(this.field);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectComponent.prototype, "filterChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.EqField)
    ], SelectComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "props", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SelectComponent.prototype, "options", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'field-select',
            templateUrl: 'select.component.html',
            styleUrls: ['select.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map