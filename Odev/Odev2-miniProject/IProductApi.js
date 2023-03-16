"use strict";
exports.__esModule = true;
var dummy_1 = require("./dummy_db/dummy");
var ProductApi = /** @class */ (function () {
    function ProductApi() {
        this.dataSource = dummy_1.dummyData;
        this.product = [];
    }
    ProductApi.prototype.findAll = function () {
        var _this = this;
        this.product = [];
        this.dataSource.forEach(function (item) {
            var p = {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                rating: item.rating,
                thumbnail: item.thumbnail
            };
            _this.product.push(p);
        });
        return this.product;
    };
    ProductApi.prototype.findByCategory = function (category) {
        var productU = [];
        var p;
        for (var _i = 0, _a = this.dataSource; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category === category) {
                p = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    thumbnail: item.thumbnail,
                    color: item.color,
                    celluar: item.celluar,
                    wifi: item.wifi
                };
                productU.push(p);
            }
            else if (item.category === category) {
                p = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    thumbnail: item.thumbnail,
                    smartTv: item.smartTv,
                    stock: item.stock
                };
                productU.push(p);
            }
            else if (item.category === category) {
                p = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    thumbnail: item.thumbnail,
                    discountPercentage: item.discountPercentage,
                    screenDimentions: item.screenDimentions
                };
                productU.push(p);
            }
            else if (item.category === category) {
                p = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    thumbnail: item.thumbnail,
                    color: item.color
                };
                productU.push(p);
            }
        }
        return productU;
    };
    ProductApi.prototype.findByText = function (input) {
        var text;
        return this.dataSource.filter(function (item) {
            item.description.toLowerCase().search(input.toLowerCase());
        });
    };
    return ProductApi;
}());
var product = new ProductApi();
//console.log(product.findAll());
console.log("*************    TABLET   *****************");
console.log(product.findByCategory("tablet"));
console.log("*************    LAPTOP   *****************");
console.log(product.findByCategory("laptop"));
console.log("*************  TELEVISION *****************");
console.log(product.findByCategory("television"));
console.log("************* SMARTPHONES *****************");
console.log(product.findByCategory("smartphones"));
console.log("************* TEXT/SEARCH *****************");
console.log(product.findByText("Samsung"));
