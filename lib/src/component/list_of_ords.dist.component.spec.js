"use strict";
var testing_1 = require('@angular/core/testing');
var cars_component_1 = require('./cars.component');
var router_1 = require("@angular/router");
var testing_2 = require('@angular/compiler/testing');
var MockActivatedRoute = (function () {
    function MockActivatedRoute() {
    }
    return MockActivatedRoute;
}());
testing_1.describe('Component: Cars', function () {
    testing_1.beforeEachProviders(function () { return [
        { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }
    ]; });
    testing_1.it('should create an instance', function () {
        testing_1.inject([testing_2.TestComponentBuilder, router_1.ActivatedRoute], function (tcb, ar) {
            tcb.createAsync(cars_component_1.CarsComponent).then(function (fixture) {
                testing_1.expect(fixture.componentInstance instanceof cars_component_1.CarsComponent).toBe(true, 'should create CarsComponent');
                console.log(ar);
            });
        });
    });
});
//# sourceMappingURL=list_of_ords.dist.component.spec.js.map