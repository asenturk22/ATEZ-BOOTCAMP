// IF - ELSE
var x = 15;
var y = 25;
if (x > y) {
    console.log("x y den büyüktür.");
}
else {
    console.log("x y den küçük veya eşit.");
}
//ternary operatör kullanımı
(x > y) ? console.log("x y den büyüktür.") : console.log("x y den küçük veya eşit.");
//SWITCH - CASE
var day = 5;
switch (day) {
    case 0:
        console.log("pazar");
        break;
    case 1:
        console.log("pazartesi");
        break;
    case 2:
        console.log("salı");
        break;
    case 3:
        console.log("çarşamba");
        break;
    case 4:
        console.log("perşembe");
        break;
    case 5:
        console.log("cuma");
        break;
    case 6:
        console.log("cumartesi");
        break;
    default:
        console.log("Böyle bir gün yok");
        break;
}
//For Loop
for (var i = 0; i < 3; i++) {
    console.log("i degerim", i);
}
//for - of  : dizi içindeki değeri verir. 
var arr = [1, 2, 3, 4];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
var str = "Abdullah Şentürk";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
//for - in  : dizi içindeki indekx değerini verir. 
for (var item in arr) {
    console.log(item);
}
//while - loop
var counter = 0;
while (counter < 8) {
    counter++;
    if (counter == 4)
        continue;
    if (counter == 6)
        break;
    console.log("Counter : ", counter);
}
//Do - while loop
do {
    counter++;
    console.log("Counter : ", counter);
} while (counter < 8);
