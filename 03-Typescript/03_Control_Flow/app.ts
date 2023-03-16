// IF - ELSE
let x : number = 15;
let y : number = 25;

if (x > y) {
    console.log("x y den büyüktür.");
} else {
    console.log("x y den küçük veya eşit.");
}

//ternary operatör kullanımı
(x > y) ? console.log("x y den büyüktür.") : console.log("x y den küçük veya eşit.");


//SWITCH - CASE
let day : number = 5;
switch(day) {
    case 0: console.log("pazar"); break;
    case 1: console.log("pazartesi"); break;
    case 2: console.log("salı"); break;
    case 3: console.log("çarşamba"); break;
    case 4: console.log("perşembe"); break;
    case 5: console.log("cuma"); break;
    case 6: console.log("cumartesi"); break;
    default : console.log("Böyle bir gün yok"); break;
    
}


//For Loop
for (let i = 0; i < 3; i++) {
    console.log("i degerim", i);
}


//for - of  : dizi içindeki değeri verir. 
let arr = [1,2,3,4];
for (let item of arr) {
    console.log(item);
}

let str = "Abdullah Şentürk";
for (let item of str) {
    console.log(item);
}

//for - in  : dizi içindeki indekx değerini verir. 
for (let item in arr) {
    console.log(item);
}


//while - loop
let counter = 0;

while (counter < 8) {
    counter++;
    if (counter == 4) continue;
    if (counter == 6) break;
    console.log("Counter : ", counter);
}


//Do - while loop
do {
    counter++;
    console.log("Counter : ", counter);
} while (counter < 8) 

