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
var history_1 = require("../../class/history");
var Rx_1 = require("rxjs/Rx");
var common_1 = require("@angular/common");
var _ = require('lodash');
var RangeComponent = (function () {
    function RangeComponent() {
        this.filterChange = new core_1.EventEmitter();
        this.borderChange = new core_1.EventEmitter(false);
        this._border = { min: new Rx_1.BehaviorSubject(0), max: new Rx_1.BehaviorSubject(1000) };
        this._value = new Rx_1.BehaviorSubject(0);
    }
    RangeComponent.prototype.update = function () {
        this.filterChange.emit(this.field);
    };
    RangeComponent.prototype.setBorder = function (fInit) {
        if (fInit === void 0) { fInit = false; }
        if (this._history.get() !== this.field) {
            if (this.props['top'][this.field.name] === null) {
                this._border.min.next(this.borderRecord.play(this.field.name, "eq", "min"));
                this._border.max.next(this.borderRecord.play(this.field.name, "eq", "max"));
                if (fInit) {
                    this._value.next(this.borderRecord.play(this.field.name, "eq", "max"));
                }
            }
            else {
                var reBorder = { borderRecord: new decorator_ord_1.BorderRecord(), props: _.cloneDeep(this.props) };
                reBorder.props['top'][this.field.name] = null;
                reBorder.props['bottom'][this.field.name] = null;
                this.borderChange.emit(reBorder);
                console.log("borderRecorder", reBorder.borderRecord);
                this._border.min.next(reBorder.borderRecord.play(this.field.name, "eq", "min"));
                this._border.max.next(reBorder.borderRecord.play(this.field.name, "eq", "max"));
                if (fInit) {
                    this._value.next(reBorder.borderRecord.play(this.field.name, "eq", "max"));
                }
            }
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RangeComponent.prototype, "filterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RangeComponent.prototype, "borderChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.Field)
    ], RangeComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RangeComponent.prototype, "props", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.BorderRecord)
    ], RangeComponent.prototype, "borderRecord", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof history_1.History !== 'undefined' && history_1.History) === 'function' && _a) || Object)
    ], RangeComponent.prototype, "_history", void 0);
    RangeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'field-range',
            templateUrl: 'range.component.html',
            styleUrls: ['range.component.css'],
            pipes: [common_1.AsyncPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], RangeComponent);
    return RangeComponent;
    var _a;
}());
exports.RangeComponent = RangeComponent;
//# sourceMappingURL=range.component.js.map