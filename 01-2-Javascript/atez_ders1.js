//string data-type
var sth = "ATEZ BOOTCHAMP";

//number data-type
var number = 123

//boolean data-type
var isTrue = true;
//or
var isFalse = false;

//undefined data
var sthelse;
console.log(sthelse)

//NULL data
var nullData = null;

//Object data
var testobj =  {
    sth : "ATEZ BOOTCAMP",
    number : 123,
    isTrue : true,
}

console.log(testobj.sth)
console.log(testobj.number)
console.log(testobj.isTrue)


//Array Data
let testArray = [
    "ATEZ-BOOTCAMP", "123", testObj = {
        sth : "ATEZ BOOTCAMP",
        number : 123,
        isTrue : true,    
    }
]

console.log(testArray[0]);
console.log(testArray[1]);
console.log(testArray[2].isTrue);

//type of array 
console.log(typeof testArray)

//BLOCK SCOPE  -- let & const

const globalScope = "GLOBAL SCOPE VARIABLE";
function functionScope() {
    const fnScopeVariable = "FUNCTION SCOPE VARIABLE";    
}

console.log("GLOBAL ===>", globalScope);
//console.log("FUNCTION ===>", fnScopeVariable);

//fucntion scope
function functionScope2() {
    const fnScopeVariable = "FUNCTION SCOPE VARIABLE";    
    console.log("GLOBAL ===>", globalScope);
    console.log("FUNCTION2 ===>", fnScopeVariable);

    if(globalScope) {
        let ifScopeValue = "IF SCOPE VALUE";
    }    
}

functionScope2();


//return 
function returnSomething () {
    const a = 5;
    const b = 6;

    return a + b;
}

console.log(returnSomething());


//arrow function
const returnSum = (a, b) => {
    return a + b;
}

console.log(returnSum(2,5))


//recursion : üs alma fonksiynunu 
function pow(x, n) {
    if (n == 1)
        return x;

    return x * pow(x, n - 1)
}

console.log(pow(5,2))

//nested functions
function programDetayi(bootcamp, organizasyon) {
    const fullNameProgram = () => bootcamp + ' ' + organizasyon;

    console.log('basladi : ', fullNameProgram());
    console.log('bitti   : ', fullNameProgram());
}


programDetayi('NodeJS', 'ATEZ')

function sample() {
    const testArr = [
        "ATEZ BOOTCAMP",
        "SOME VALUE",
        23,
        "AAB",
    ]

    console.log('FIRST ELEMENT OF TESTARR', testArr[0])

    for(let i = 0; i < testArr.length; i++) {
        if (typeof testArr[i] === "number") {
            console.log("VALUE FROM LOOP", testArr[i])
        }
    }
}

sample()


function samplePerson() {
    //collection
    const personArray = [
        {name: "Umut", surName: "Yalcin", age: 34},
        {name: "Umut", surName: "Yalcin", age: 35},
        {name: "Umut", surName: "Yalcin", age: 36},
        {name: "Umut", surName: "Yalcin", age: 37},
        {name: "Umut", surName: "Yalcin", age: 38},
        {name: "Umut", surName: "Yalcin", age: 39},
    ]

    //for loop
    for (let i = 0; i < personArray.length; i++) {
        const person = personArray[i];
        console.log("Person", person.age);
    }

    let expectedAge = 30;

    //while loop
    while (expectedAge < 37) {
        expectedAge += 1;
        console.log("Deger arttirmak", expectedAge);
    }

    //for .. in
    for (personArrayKey in personArray) {
        console.log('Person age : ', personArray[personArrayKey].age)
    }

    //for .. of
    for (const p  of personArray) {
        console.log(p);
    }
}

samplePerson()

//forEach
const carArray = [];
const carModels = ["Porche", "Tofaş", "Ferrari", "Volvo"];
carModels.forEach((x, index)=> {
    const carObject = {
        id: index,
        model : x 
    };
    carArray.push(carObject);
});

console.log('Car Array : ', carArray);


//map fonksiyonu
const carModelss = carModels.map((value, index)=> {
    return {
        id: index,
        model : value
    };
});

console.log('CarModels', carModelss);


//filter
const hasInSaleCars = [
    {id: 0, model: 'Porsche', inSale: true},
    {id: 1, model: 'Toyota', inSale: false},
    {id: 2, model: 'Ferrari', inSale: false},
    {id: 3, model: 'Volvo', inSale: true},
]

const inSaleCars = hasInSaleCars.filter( x => x.inSale);
console.log('InSaleCars', inSaleCars);

//find
const findCars = hasInSaleCars.find(x => x.inSale);
console.log('FoundCars', findCars);



//########## ARRAYS ###############
//Dizilerin sonuna eleman eklemek
//-> push()

testArray.push('NodeJS');
console.log(testArray);

//Dizilerin başına eleman eklemek
//->unshift()

testArray.unshift('NodeJS');
console.log(testArray);

//Dizilerden eleman eklemek - silmek
//->splice
testArray.splice(0, 0, "Javascript");
console.log(testArray);

//eleman silmek için
testArray.splice(0, 1);
console.log(testArray);


//Diziden eleman silmek 
//-> pop()
testArray.pop();
console.log(testArray);

//->shift()
testArray.shift();
console.log(testArray);

//Dizide eleman güncellemek
testArray[1] = 1234
console.log(testArray);

//Dizide eleman aramak
console.log(testArray.includes(1234))

//Yeni dizi oluşturmak 
//slice()
let newArray = testArray.slice(0,2);
console.log(newArray);

//join()
const newStrArray = newArray.join();
console.log(newStrArray);

let arrayNumber1 = [1,2,3,4,5,6];
let arrayNumber2 = [7,8,9,10,11,12];
console.log(arrayNumber1)
console.log(arrayNumber2)
console.log()

//concat
let numbers = arrayNumber1.concat(arrayNumber2);
console.log(numbers);

//forEach()
arrayNumber1.forEach(function(arrayNumber1){
    console.log(arrayNumber1 * 5);
})

//map()
let array5Numbers = arrayNumber1.map(function(number) {
    return number * 5;
})

console.log(array5Numbers);

//some()
console.log(arrayNumber1.some(function(number) {
    return number > 5
}))

//every()
console.log(arrayNumber1.every(function(number) {
    return number < 5
}))

console.log(arrayNumber1.every(function(number) {
    return number > 7
}))

//filter()
let filterArrayNumber = arrayNumber1.concat(arrayNumber2).filter(function(sayi){
    return sayi > 4 && sayi < 10;
}) 

console.log(filterArrayNumber);

//find()
let findNumber = arrayNumber1.find(function(number) {
    return number === 5;
})

console.log(findNumber);

findNumber = arrayNumber1.find(function(number) {
    return number === 9;
})

console.log(findNumber);

//sort()
arrayNumber1[1] = 6;
arrayNumber1[5] = 2;
console.log(arrayNumber1);
console.log(arrayNumber1.sort());

//reduce()
function indirgeyici(akumulator, sayi) {
    return akumulator + sayi;
}

console.log(arrayNumber2.reduce(indirgeyici, 0));

/*
##########################################
*/
const number1 = 5;
const number2 = 10;

const addNumber = (a, b) => {
    return a + b;
}

console.log(number - number2);
console.log(number / number2);
console.log('Tricky : ', (number / number2) + number2);
console.log(number1/0); //sonsuz

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) 
        console.log(i);
}



const x = true;
const y = null;
const z = {
    name : "Umut",
    surName : "Yalcin",
    age : 34
};

if (x) {
    console.log('X deger buraya girdi', x);
}

if (y) {
    console.log('X deger buraya girdi', y);
}

if (z) {
    console.log('z deger buraya girdi', z)
}

let exptectedNumber = 0;

if (expectedNumber > 0 && expectedNumber < 9) {
    exptectedNumber += 1;
    console.log('Expected', expectedNumber)
} else {
    console.log('Ben 10 sayisina ulastim', expectedNumber)
}




