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
var _ = require('lodash');
var Rx_1 = require("rxjs/Rx");
var common_1 = require("@angular/common");
var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.filterChange = new core_1.EventEmitter(true);
        this.counterChange = new core_1.EventEmitter(false);
        this._count = {};
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._getProp().length) {
            this.inputs.forEach(function (el) {
                _this._getProp().forEach(function (val) {
                    var input = el.nativeElement;
                    input.checked = (val === input.value);
                });
            });
        }
        else {
            this.props.eq[this.field.name] = null;
        }
        this.options.forEach(function (option) { _this._count[option] = new Rx_1.BehaviorSubject(0); });
        return null;
    };
    CheckboxComponent.prototype.setCount = function () {
        var _this = this;
        if (this._history.get() !== this.field) {
            this.options.forEach(function (option) {
                if (_this.props.eq[_this.field.name] === null) {
                    _this._count[option].next(_this.countRecord.play(_this.field.name, "eq", option));
                }
                else {
                    var reCount = { countRecord: new decorator_ord_1.CountRecord(), props: _.cloneDeep(_this.props) };
                    reCount.props.eq[_this.field.name] = null;
                    _this.counterChange.emit(reCount);
                    _this._count[option].next(reCount.countRecord.play(_this.field.name, "eq", option));
                }
            });
        }
    };
    CheckboxComponent.prototype._getProp = function () {
        if (!(this.field.name in this.props.eq)) {
            this.props.eq[this.field.name] = [];
        }
        return (Array.isArray(this.props.eq[this.field.name])) ? this.props.eq[this.field.name] : [];
    };
    CheckboxComponent.prototype.update = function (ev) {
        var input = ev.target;
        if (input.checked) {
            if (this.props.eq[this.field.name] === null || this.inputs.length === this.props.eq[this.field.name].length) {
                this.props.eq[this.field.name] = [input.value];
            }
            else {
                this._getProp().push(input.value);
            }
        }
        else {
            this.props.eq[this.field.name] = this._getProp().filter(function (val) { return (val !== input.value); });
        }
        if (!this._getProp().length || this.inputs.length === this.props.eq[this.field.name].length) {
            this.props.eq[this.field.name] = null;
        }
        this.filterChange.emit(this.field);
    };
    __decorate([
        core_1.ViewChildren("inps"), 
        __metadata('design:type', core_1.QueryList)
    ], CheckboxComponent.prototype, "inputs", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CheckboxComponent.prototype, "filterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CheckboxComponent.prototype, "counterChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.EqField)
    ], CheckboxComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "props", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CheckboxComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.CountRecord)
    ], CheckboxComponent.prototype, "countRecord", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof history_1.History !== 'undefined' && history_1.History) === 'function' && _a) || Object)
    ], CheckboxComponent.prototype, "_history", void 0);
    CheckboxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'field-checkbox',
            templateUrl: 'checkbox.component.html',
            styleUrls: ['checkbox.component.css'],
            pipes: [common_1.AsyncPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckboxComponent);
    return CheckboxComponent;
    var _a;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=checkbox.component.js.map