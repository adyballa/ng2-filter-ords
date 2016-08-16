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
var router_1 = require("@angular/router");
var ListLengthComponent = (function () {
    function ListLengthComponent(router) {
        this.router = router;
        this.length = 3500;
    }
    ListLengthComponent.prototype.ngOnInit = function () {
    };
    ListLengthComponent.prototype.update = function () {
        console.log("length ist ", this.length);
        this.router.navigate(['/cars', { limit: this.length }]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ListLengthComponent.prototype, "length", void 0);
    ListLengthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-length',
            templateUrl: 'list-length.component.html',
            styleUrls: ['list-length.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ListLengthComponent);
    return ListLengthComponent;
}());
exports.ListLengthComponent = ListLengthComponent;
//# sourceMappingURL=list-length.component.js.map