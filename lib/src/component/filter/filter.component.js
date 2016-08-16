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
var listModel_service_1 = require("../cars/listModel.service");
var range_component_1 = require("./range/range.component");
var selectRange_component_1 = require("./selectRange/selectRange.component");
var select_component_1 = require("./select/select.component");
var checkbox_component_1 = require("./checkbox/checkbox.component");
var date_range_component_1 = require("./date-range/date-range.component");
var date_component_1 = require("./date/date.component");
var ordlocation_component_1 = require("./ordlocation/ordlocation.component");
var text_component_1 = require("./text/text.component");
var history_1 = require("../class/history");
var FilterComponent = (function () {
    function FilterComponent(listService) {
        this.listService = listService;
        this.filtered = new core_1.EventEmitter(false);
        this.props = { top: {}, bottom: {}, eq: {} };
        this._viewCheckedCounter = 0;
        this.fields = this.listService.fields;
        this._model = this.listService.getModel();
        this._config = this.listService.getConfig().clone();
        this._history = new history_1.History(2);
    }
    FilterComponent.prototype.ngAfterViewChecked = function () {
        if (this._viewCheckedCounter === 1) {
            this.counter.forEach(function (filter) { return filter.setCount(); });
            this.border.forEach(function (filter) { return filter.setBorder(true); });
        }
        this._viewCheckedCounter++;
    };
    Object.defineProperty(FilterComponent.prototype, "viewCheckedCounter", {
        set: function (counter) {
            this._viewCheckedCounter = counter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "countRecord", {
        get: function () {
            return this.listService.countRecord;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "borderRecord", {
        get: function () {
            return this.listService.borderRecord;
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.reCount = function (event) {
        event.countRecord.recordOrdConfig(this._filter(this.listService.list, event.props), this._config);
    };
    FilterComponent.prototype.reBorder = function (event) {
        console.log("reBorder", event);
        event.borderRecord.recordOrdConfig(this._filter(this.listService.list, event.props), this._config);
    };
    FilterComponent.prototype._filter = function (cs, props) {
        var top = this.listService.createAndItem(props.top), bottom = this.listService.createAndItem(props.bottom), eqs = this.listService.createItems(props.eq);
        console.log("props ist ", props);
        if (Object.keys(props.eq).length > 0) {
            cs = decorator_ord_1.EqOr.fuzzyEq(cs, eqs, this._config);
        }
        if (Object.keys(props.top).length > 0 || Object.keys(props.bottom).length > 0) {
            cs = decorator_ord_1.Ord.inRange(cs, top, bottom, this._config);
        }
        return cs;
    };
    FilterComponent.prototype.filter = function (field) {
        this._history.unshift(field);
        this.listService.result = this._filter(this.listService.list, this.props);
        this.filtered.emit({});
        this.counter.forEach(function (filter) { return filter.setCount(); });
        this.border.forEach(function (filter) { return filter.setBorder(); });
    };
    FilterComponent.prototype.createField = function (field) {
        if (decorator_ord_1.isFieldOrd(field) && field.map.length > 0) {
            return "select";
        }
        if (this._model[field.name] === null) {
            return "null";
        }
        if (this._model[field.name] instanceof Date) {
            return (decorator_ord_1.isFieldOrd(field)) ? "date-range" : "date";
        }
        if (typeof this._model[field.name] === "object") {
            var m = /function (.*)\(.*/g.exec(this._model[field.name].constructor);
            if (m.length === 2) {
                return m[1].toLowerCase();
            }
        }
        else {
            switch (typeof this._model[field.name]) {
                case "string":
                    return (this.getOptions(field.name)) ? "string-options" : "string";
                case "number":
                    return "number";
            }
        }
    };
    FilterComponent.prototype.getOptions = function (name) {
        return this.listService.getOptions(name);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FilterComponent.prototype, "filtered", void 0);
    __decorate([
        core_1.ViewChildren('counter'), 
        __metadata('design:type', core_1.QueryList)
    ], FilterComponent.prototype, "counter", void 0);
    __decorate([
        core_1.ViewChildren('border'), 
        __metadata('design:type', core_1.QueryList)
    ], FilterComponent.prototype, "border", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-filter',
            templateUrl: 'filter.component.html',
            styleUrls: ['filter.component.css'],
            directives: [range_component_1.RangeComponent, selectRange_component_1.SelectRangeComponent, select_component_1.SelectComponent, checkbox_component_1.CheckboxComponent,
                date_range_component_1.DateRangeComponent, date_component_1.DateComponent, ordlocation_component_1.OrdlocationComponent, text_component_1.TextComponent]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof listModel_service_1.ListModelService !== 'undefined' && listModel_service_1.ListModelService) === 'function' && _a) || Object])
    ], FilterComponent);
    return FilterComponent;
    var _a;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map