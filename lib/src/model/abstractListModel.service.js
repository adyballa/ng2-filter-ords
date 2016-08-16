"use strict";
var decorator_ord_1 = require("decorator-ord");
var AbstractListModelService = (function () {
    function AbstractListModelService(item, itemAnd) {
        var _this = this;
        this.item = item;
        this.itemAnd = itemAnd;
        this._list = [];
        this.result = [];
        this._config = new decorator_ord_1.OrdConfig();
        this._countRecord = new decorator_ord_1.CountRecord();
        this._borderRecord = new decorator_ord_1.BorderRecord();
        this.result = this.list;
        this.getList().then(function (list) {
            _this._list = list.slice(0);
            _this.result = list;
        });
    }
    Object.defineProperty(AbstractListModelService.prototype, "borderRecord", {
        get: function () {
            return this._borderRecord;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractListModelService.prototype, "countRecord", {
        get: function () {
            return this._countRecord;
        },
        enumerable: true,
        configurable: true
    });
    AbstractListModelService.prototype.getModel = function () {
        return new this.item();
    };
    AbstractListModelService.prototype.getConfig = function () {
        return this._config;
    };
    Object.defineProperty(AbstractListModelService.prototype, "fields", {
        get: function () {
            return this._config.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractListModelService.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: true,
        configurable: true
    });
    AbstractListModelService.prototype.getOptions = function (name) {
        for (var _i = 0, _a = this._config.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.name === name && (decorator_ord_1.isFieldOrd(field) && field.map.length)) {
                return field.map;
            }
        }
    };
    AbstractListModelService.prototype.implParams = function (params, obj) {
        this._config.fields.forEach(function (field) {
            if (Object.keys(params).indexOf(field.name) > -1) {
                obj[field.name] = params[field.name];
            }
            else {
                obj[field.name] = null;
            }
        });
        return obj;
    };
    AbstractListModelService.prototype.createItemByParams = function (params) {
        return this.implParams(params, new this.item());
    };
    AbstractListModelService.prototype.createItemAndByParams = function (params) {
        return this.implParams(params, new this.itemAnd());
    };
    AbstractListModelService.prototype.createItem = function (props) {
        if (props === void 0) { props = {}; }
        return this.createItemByParams(props);
    };
    AbstractListModelService.prototype.createItems = function (props) {
        var _this = this;
        if (props === void 0) { props = {}; }
        var res = [];
        this.formatPropsObject(props).forEach(function (props) {
            res.push(_this.createItemByParams(props));
        });
        return res;
    };
    AbstractListModelService.prototype.createAndItem = function (props) {
        if (props === void 0) { props = {}; }
        return this.createItemAndByParams(props);
    };
    AbstractListModelService.prototype.formatPropsObject = function (props) {
        var res = [{}];
        var _loop_1 = function(field) {
            if (field.name in props) {
                if (Array.isArray(props[field.name])) {
                    for (var i = 0; i < res.length * props[field.name].length; i++) {
                        res[i] = res[i % res.length];
                        res[i][field.name] = props[field.name][i % props[field.name].length];
                    }
                }
                else {
                    res.forEach(function (resProps) {
                        resProps[field.name] = props[field.name];
                    });
                }
            }
            else {
                res.forEach(function (resProps) {
                    resProps[field.name] = null;
                });
            }
        };
        for (var _i = 0, _a = this._config.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            _loop_1(field);
        }
        return res;
    };
    AbstractListModelService.prototype.setList = function (limit) {
        var _this = this;
        return this.getList(limit).then(function (list) {
            _this._list = list.slice(0);
            _this.result = list;
        });
    };
    return AbstractListModelService;
}());
exports.AbstractListModelService = AbstractListModelService;
//# sourceMappingURL=abstractListModel.service.js.map