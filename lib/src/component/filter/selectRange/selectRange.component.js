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
var common_1 = require("@angular/common");
var Rx_1 = require("rxjs/Rx");
var SelectRangeComponent = (function () {
    function SelectRangeComponent() {
        this.filterChange = new core_1.EventEmitter(false);
        this.counterChange = new core_1.EventEmitter(false);
        this._count = {};
    }
    SelectRangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.field.map.forEach(function (option) {
            _this._count[option] = new Rx_1.BehaviorSubject(0);
        });
        return null;
    };
    SelectRangeComponent.prototype.update = function (key, ev) {
        var sel = ev.target, op = sel.options[sel.selectedIndex];
        this.props[key][this.field.name] = (op.value === "") ? null : op.value;
        this.filterChange.emit(this.field);
    };
    SelectRangeComponent.prototype.setCount = function () {
        var _this = this;
        var fCouterSet = false;
        if (this._history.get() !== this.field) {
            var _loop_1 = function(key) {
                if (this_1.props[key][this_1.field.name] === null) {
                    this_1.field.map.forEach(function (option) { return _this._count[option].next(_this.countRecord.play(_this.field.name, key, option)); });
                    fCouterSet = true;
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = ['top', 'bottom']; _i < _a.length; _i++) {
                var key = _a[_i];
                _loop_1(key);
            }
            if (!fCouterSet) {
                var reCount = { countRecord: new decorator_ord_1.CountRecord(), props: _.cloneDeep(this.props) };
                reCount.props.eq[this.field.name] = null;
                this.counterChange.emit(reCount);
                this.field.map.forEach(function (option) { return _this._count[option].next(_this.countRecord.play(_this.field.name, 'eq', option)); });
            }
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectRangeComponent.prototype, "filterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SelectRangeComponent.prototype, "counterChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.Field)
    ], SelectRangeComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectRangeComponent.prototype, "props", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', decorator_ord_1.CountRecord)
    ], SelectRangeComponent.prototype, "countRecord", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof history_1.History !== 'undefined' && history_1.History) === 'function' && _a) || Object)
    ], SelectRangeComponent.prototype, "_history", void 0);
    SelectRangeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'field-range-select',
            templateUrl: 'selectRange.component.html',
            pipes: [common_1.AsyncPipe],
            styleUrls: ['selectRange.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SelectRangeComponent);
    return SelectRangeComponent;
    var _a;
}());
exports.SelectRangeComponent = SelectRangeComponent;
//# sourceMappingURL=selectRange.component.js.map