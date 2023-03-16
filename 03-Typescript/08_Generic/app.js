//Generic 
//Generic yapısı her türlü veriyi alabilecek yapı haline getirmek demektir. 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//parameters and return value = number
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 2, 3, 5, 6, 8];
console.log(getRandomNumber(numbers));
//parameters and return value = string
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var names = ["Abdullah", "Ferhat", "Sinan", "Seçkin"];
console.log(getRandomString(names));
//parameters and return value = any
function getRandomElementAny(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElementAny(numbers));
console.log(getRandomElementAny(names));
//parameters and return value = GENERIC TYPE
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
//Türünü kendisi algılar.
console.log(getRandomElement(numbers));
console.log(getRandomElement(names));
/****** GENERIC CONSTRAINS *********************/
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var person = merge({ name: 'Abdullah' }, { age: 40 });
console.log(person);
var month = {
    key: 1,
    value: "January"
};
console.log(month);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
        console.log(this.items);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 5; i++) {
    list.add(i);
}
console.log("stack array");
/************* GENERIC CLASS */
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.length = function () {
        return this.elements.length;
    };
    Stack.prototype.display = function () {
        if (this.elements.length === 0) {
            console.log("This stack is empty");
            return;
        }
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error("This stack is overflow!");
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error("This stack is empty");
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) * low);
}
//5 adet number türünden dizi tanımlanıyor. 
var numbers2 = new Stack(5);
console.log(numbers2);
console.log(numbers2.length());
while (!numbers2.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack"));
    numbers2.push(n);
}
numbers2.display();
while (!numbers2.isEmpty()) {
    var n = numbers2.pop();
    console.log("Pop ".concat(n, " into the stack"));
    numbers2.display();
}
