"use strict";
var listModel_service_1 = require("../cars/listModel.service");
var testing_1 = require('@angular/core/testing');
var filter_component_1 = require('./filter.component');
testing_1.describe('Component: Filter', function () {
    testing_1.it('should create an instance', function () {
        var component = new filter_component_1.FilterComponent(new listModel_service_1.ListModelService);
        testing_1.expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=filter.component.spec.js.map