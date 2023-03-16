/*
Typescript javascript süper setidir.  Bütün javascript' i kapsayan
ve yeni özellikler üzerine getiren bir 
*/

//string - number - boolean

//javascript type 
const stringVal = "Some String Value";
const numberValue = 123123;
const boolValue = true;

/*Javascript dilindeki değişken tanımlama şekli Typescript dilinde
aşağıdaki hale gelir.  Değişkenlerimizin türü belli olur. */

//typescript type
const stringVal2 : string = "Some String Value";
const numberValue2 : number = 123;
const boolValue2 : boolean = true;

//array type
let userNumberInput : number[] = [];
let userStringInput : string[] = [];

userNumberInput = [2,3];
userStringInput = ['some stirng', 'another string'];

//any type
/* any her türden değişken alabilecek bir değişken tanımlarız.  
number, string, boolean, array, object türden herşey alabilir. 
*/
let someUnknownValue: any; 

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
const userLogin2 = (email : string, password : string | number):string => {
    return typeof password === "string" ? email + password.toUpperCase() : email + password; 
}

userLogin2('asenturk22@yandex.com', 1234);
userLogin2('asenturk22@yandex.com', "asfasdf12121");

console.log(userLogin2);

//Objects

interface Animal {
    name : string; 
    type : string;
    age : number;
    eyeGolor? : string;
    wiskers? : boolean;
}

const Java : Animal = {
    name : "Java",
    type : "Persian",
    age : 3,
}

const CreateCatUser = (cat : {name:string, type: string, age:number}):string => {
    return `Our cats name is ${cat.name} and she is ${cat.type} also she is ${cat.age} years old.`;
}

console.log(CreateCatUser(Java));

//Next week topics
//-------------------------------------------------------------
// tslint - noExplicitAny - DO NOT USE any  IN ANY CASE
// Generics & any
// Enums
// Deep dive functions
// Deep dive inheritance and extends keyword
// Classes
// Architecure filing  (models, enums, classes)
// Hot reload and watching
// Commands
//-------------------------------------------------------------






















