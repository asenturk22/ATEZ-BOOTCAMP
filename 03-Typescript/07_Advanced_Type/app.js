var employee = {
    id: 50,
    name: 'Abdullah Şentürk',
    email: 'asenturk22@yandex.com',
    phone: '555-555-5555'
};
console.log(employee);
var customer = {
    name: 'Abdullah Şentürk',
    email: 'asenturk22@yandex.com',
    phone: '555-555-5555',
    credit: 5000
};
console.log(customer);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(b);
    throw new Error("Lütfen dogru deger girdiginizden emin olunuz. ");
}
console.log(add(5, 6));
console.log(add("Abdullah ", "Şentürk"));
console.log(add(5, "a"));
var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.isCreaditAllowed = function () {
        //..
        return true;
    };
    return Customer2;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        //...
        return true;
    };
    return Supplier;
}());
;
function signContract(partner) {
    // let message : string;
    if (partner instanceof Customer2) {
        return partner.isCreaditAllowed() ? 'sign a new contract with the customer' : 'Credit issue';
    }
    if (partner instanceof Supplier) {
        return partner.isInShortList() ? 'sign a new contract with the supplier' : 'Nead to evaluate further';
    }
}
