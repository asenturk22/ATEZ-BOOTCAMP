/*
Typescript javascript süper setidir.  Bütün javascript' i kapsayan
ve yeni özellikler üzerine getiren bir
*/
//string - number - boolean
//javascript type 
var stringVal = "Some String Value";
var numberValue = 123123;
var boolValue = true;
/*Javascript dilindeki değişken tanımlama şekli Typescript dilinde
aşağıdaki hale gelir.  Değişkenlerimizin türü belli olur. */
//typescript type
var stringVal2 = "Some String Value";
var numberValue2 = 123;
var boolValue2 = true;
//array type
var userNumberInput = [];
var userStringInput = [];
userNumberInput = [2, 3];
userStringInput = ['some stirng', 'another string'];
//any type
/* any her türden değişken alabilecek bir değişken tanımlarız.
number, string, boolean, array, object türden herşey alabilir.
*/
var someUnknownValue;
someUnknownValue = 4;
console.log(someUnknownValue);
someUnknownValue = "string deger";
console.log(someUnknownValue);
someUnknownValue = userNumberInput;
console.log(someUnknownValue);
/*
function userLogin(email:string, password:string) {
    return email + password;
}

userLogin('asenturk22@yandex.com', 'asdfas123');
*/
/*
    typescript'i sisteme global olarak yüklemek için
    sudo npm i -g typescript   komutunu çalıştırıyoruz ve kuruyoruz.

    typescript' i kurduktan sonra.  .tc  uzantılı dosyayı çalışmatırmak için
    tsc 02_atez_typescirpt.tc  yazıp çalıştırıyourz ve .js dosyası üretir.
    bu .js dosyasını da  nodejs içinde çalıştırabiliriz.
*/
//Union Type example
var userLogin2 = function (email, password) {
    return typeof password === "string" ? email + password.toUpperCase() : email + password;
};
userLogin2('asenturk22@yandex.com', 1234);
userLogin2('asenturk22@yandex.com', "asfasdf12121");
console.log(userLogin2);
//Objects
var Animal = {
    name: "Java",
    type: "Persian",
    age: 3
};
var CreateCatUser = function (cat) {
    return "Our cats name is ".concat(cat.name, " and she is ").concat(cat.type, " also she is ").concat(cat.age, " years old.");
};
console.log(CreateCatUser(Animal));
