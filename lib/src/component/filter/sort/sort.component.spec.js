"use strict";
var listModel_service_1 = require("../../cars/listModel.service");
var testing_1 = require('@angular/core/testing');
var sort_component_1 = require('./sort.component');
testing_1.describe('Component: Sort', function () {
    testing_1.it('should create an instance', function () {
        var component = new sort_component_1.SortComponent(new listModel_service_1.ListModelService);
        testing_1.expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sort.component.spec.js.map