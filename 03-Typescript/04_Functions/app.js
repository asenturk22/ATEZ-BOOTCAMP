//Functions  return : number
function add(a, b) {
    return a + b;
}
var toplam = add(10, 20);
console.log("a + b = ", toplam);
//Functions  return : void
function display() {
    console.log("Abdullah Şentürk");
}
display();
//Functions  return : string
function displayEmployee(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
console.log(displayEmployee("Abdullah", "Şentürk"));
//Function parameter optional 
function calculate(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
console.log(calculate(5, 4));
console.log(calculate(5, 4, 5));
//Arrow FUnction
var cal = function (a, b) {
    return a * b;
};
//let cal = (a:number, b:number) : number => a * b;
console.log("çarpim : ", cal(5, 25));
function topla(a, b) {
    return a + b;
}
console.log(topla(1, 5));
console.log(topla("A", 5));
console.log(topla(1, "B"));
console.log(topla("A", "Ş"));
//rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("Sayilarin toplami : ", sum());
console.log("Sayilarin toplami : ", sum(10));
console.log("Sayilarin toplami : ", sum(10, 20));
console.log("Sayilarin toplami : ", sum(10, 20, 30));
console.log("Sayilarin toplami : ", sum(10, 20, 30, 40));
