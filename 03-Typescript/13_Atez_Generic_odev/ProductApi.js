"use strict";
exports.__esModule = true;
exports.ProductApi = void 0;
var DataSource_1 = require("./DataSource");
var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    ProductApi.prototype.findByCategory = function (category) {
        for (var _i = 0, dummyData_1 = DataSource_1.dummyData; _i < dummyData_1.length; _i++) {
            var item = dummyData_1[_i];
            if (category === item.category) {
                console.log(item.category);
            }
        }
        return [];
    };
    return ProductApi;
}());
exports.ProductApi = ProductApi;
