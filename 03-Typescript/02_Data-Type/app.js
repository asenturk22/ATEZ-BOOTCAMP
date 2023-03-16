/* Type Language - Tİpi belli olan bir yapıdır.  */
//number 
var age = 40;
var first = 123; //number type   -   decimal
var second = 0x32CF; //number type   -   hexadecimal
var third = 511; //number type   -   octal
var fourth = 15; //number type   -   binary    
//string
var firstName = "Abdullah";
var lastName = "Senturk";
//boolean
var isUpdated = true;
//any - tipi belirsiz hertürden veri alabilir  anlamındadır. 
function display(id, name) {
    console.log("id = " + id + ", Name = " + name);
}
//pre ES6
var employee1 = firstName + " " + lastName;
//post ES6   ` işaretini  ALTGR + ;   İLE ÇIKAR
var employee2 = "".concat(firstName, " ").concat(lastName);
//ARRAY DATA TYPE
var firstNames = ['Abdullah', 'Ferhat', 'Kubra'];
var lastNames = ['Senturk', 'Senturk', 'Orak'];
var arr = [1, 3, 'Abdullah', 'Senturk', true];
//Multi Type - Birden fazla tür olan arraylar
var values = ['Bursa', 1, 5, 'İstanbul'];
//TUPLE - 1. değer numjber 2. deger string sırası ömelidir.
var instructor = [1, "Abdullah"];
//TUPPLE ARRAY syntax
var employee3 = [[1, 'Abdullah'], [2, 'Kubra']];
var employee4;
employee4 = {
    firstName: "Abdullah",
    lastName: "Şentürk",
    jobTitle: "Software instructor",
    Age: 40
};
console.log(employee4.Age);
var person;
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
var Media;
(function (Media) {
    Media[Media["NewsPaper1"] = 0] = "NewsPaper1";
    Media[Media["NewsLater"] = 1] = "NewsLater";
    Media[Media["Magazin"] = 2] = "Magazin";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
;
// aşağıdaki ifadede ise enum değerini basar yani Newlater
console.log(Media[2]);
//UNION DATA TYPE
//birden fazla farklı tipi tutabilecek data tiplerine union data type denir
var id = "123";
console.log(id);
//ANY DATA TYPE
//Pek önerilmez.  Tipini belirtmeyen kullanımlarda olabilir.
var someThing = "Hello";
someThing = 45;
someThing = true;
var arr2 = ["Abdullah", "Bootcamp", true];
console.log(arr);
//void type
//fonksiyonda, fonksiyonda değer döndürmüyorsa kullanılır. 
function sayHello() {
    console.log("Hello Typescript");
}
sayHello();
//TYPE Inference : herhangi bir değişkenin tipinin belirtilmediği halde
// o değişkenin tipinin ilk verilen değer ile tutulması anlamındadır. 
var counter = 0;
console.log(typeof counter);
//TYPE ASSERTION
var code = 123;
var empCode = code;
var employe = {};
console.log(typeof (employe));
employe.name = "Abdullah";
console.log(employe.name);
//never  : Geriye hiçbir değer dönmezse kullanılır. null dahil.
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("Hata : 404");
