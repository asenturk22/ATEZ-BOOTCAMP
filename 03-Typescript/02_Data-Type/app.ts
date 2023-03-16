/* Type Language - Tİpi belli olan bir yapıdır.  */

//number 
let age :   number = 40;
let first:  number = 123;       //number type   -   decimal
let second: number = 0x32CF;    //number type   -   hexadecimal
let third:  number = 0o777;     //number type   -   octal
let fourth: number = 0b1111;    //number type   -   binary    

//string
let firstName : string = "Abdullah";
let lastName  : string = "Senturk";

//boolean
let isUpdated : boolean = true;


//any - tipi belirsiz hertürden veri alabilir  anlamındadır. 
function display(id : any,  name:string ) {
    console.log("id = " + id + ", Name = " + name);
}
 

//pre ES6
let employee1: string = firstName + " " + lastName;
//post ES6   ` işaretini  ALTGR + ;   İLE ÇIKAR
let employee2: string = `${firstName} ${lastName}`;


//ARRAY DATA TYPE
let firstNames: string[] = ['Abdullah', 'Ferhat', 'Kubra'];
let lastNames: Array<string> = ['Senturk', 'Senturk', 'Orak'];
let arr = [1,3, 'Abdullah', 'Senturk', true];


//Multi Type - Birden fazla tür olan arraylar
let values : (string | number)[] = ['Bursa', 1, 5, 'İstanbul' ];


//TUPLE - 1. değer numjber 2. deger string sırası ömelidir.
let instructor : [number, string] = [1, "Abdullah"];

//TUPPLE ARRAY syntax
let employee3 : [number, string][] = [[1, 'Abdullah'], [2, 'Kubra']];

//OBJECT DATA-TYPE
type Person = {
    firstName : string,
    lastName: string,
    jobTitle: string, 
    Age: number 
};

let employee4 : Person;

employee4 = {
    firstName: "Abdullah", 
    lastName: "Şentürk",
    jobTitle: "Software instructor",
    Age: 40
};

console.log(employee4.Age);

let person : {
    firstName : string,
    lastName: string,
    jobTitle: string, 
    Age: number 
};

person = {
    firstName: "Abdullah", 
    lastName: "Şentürk",
    jobTitle: "Software instructor",
    Age: 40
};

console.log(person.Age);


//ENUM - DATA-TYPE
/*
    Defaış değeri 0 dan başlar ancak baslangıc degerine 
    1 atamasını yaparsak artık 1 den itibaren sıralı bir şekilde artar. 
    string değer de verilebilir artık enumın string değerini alır. 
*/
enum Media {
    NewsPaper1,
    NewsLater,
    Magazin,
    Book
};

// aşağıdaki ifadede ise enum değerini basar yani Newlater
console.log(Media[2]);


enum Months  {
    January,
    Ferbruary,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    November, 
    December
};


//UNION DATA TYPE
//birden fazla farklı tipi tutabilecek data tiplerine union data type denir
let id : string | number = "123";
console.log(id);


//ANY DATA TYPE
//Pek önerilmez.  Tipini belirtmeyen kullanımlarda olabilir.

let someThing : any = "Hello";
someThing = 45;
someThing = true;

let arr2 : any[] = ["Abdullah", "Bootcamp", true];
console.log(arr);

//void type
//fonksiyonda, fonksiyonda değer döndürmüyorsa kullanılır. 
function sayHello() : void {
    console.log("Hello Typescript");
}

sayHello();


//TYPE Inference : herhangi bir değişkenin tipinin belirtilmediği halde
// o değişkenin tipinin ilk verilen değer ile tutulması anlamındadır. 
let counter = 0;
console.log(typeof counter);

//TYPE ASSERTION
let code : any = 123;
let empCode = <number>code;


interface Employe{
    name:string,
    age: number
}

let employe = <Employe> {};
console.log(typeof (employe));
employe.name = "Abdullah";
console.log(employe.name);


//never  : Geriye hiçbir değer dönmezse kullanılır. null dahil.
function throwError(errorMsg : string) : never {
    throw new Error(errorMsg);
}

throwError("Hata : 404");



