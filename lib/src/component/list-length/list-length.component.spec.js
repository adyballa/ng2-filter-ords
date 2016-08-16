"use strict";
var testing_1 = require('@angular/core/testing');
var list_length_component_1 = require('./list-length.component');
var router_1 = require("@angular/router");
var testing_2 = require('@angular/compiler/testing');
var MockRouter = (function () {
    function MockRouter() {
    }
    return MockRouter;
}());
testing_1.describe('Component: ListLength', function () {
    testing_1.beforeEachProviders(function () { return [
        { provide: router_1.Router, useClass: MockRouter }
    ]; });
    testing_1.it('should create an instance', function () {
        testing_1.inject([testing_2.TestComponentBuilder, router_1.Router], function (tcb, r) {
            tcb.createAsync(list_length_component_1.ListLengthComponent).then(function (fixture) {
                testing_1.expect(fixture.componentInstance instanceof list_length_component_1.ListLengthComponent).toBe(true, 'should create ListLengthComponent');
            });
        });
    });
});
//# sourceMappingURL=list-length.component.spec.js.map