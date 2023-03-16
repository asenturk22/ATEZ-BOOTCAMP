//Factorial 

const calculateFactorial = (number) => {
    let result = 1;

    if (number > 0 && typeof number === 'number' && typeof number != "Infinity") {
        for (let i = 0; i <= number; i++) {
            result = result + i;
        }    

        return result;
    } else if (number < 0) {
        return "pozitif deger giriniz. "
    }    
    else {
        console.log('Lutfen numerik bir deger veriniz');        
    }
}

console.log(calculateFactorial(5))


const calculateArguments = (...args) =>  {
    const numberArray = args.filter(x => typeof x === "number");
    return numberArray.reduce((acc, val) => acc + val); 
}

console.log(calculateArguments(1,2,3,5))

/***************************/
/*spread operatörü */
const calculateSum = (x, y, z) => {
    return x + y + z;
}

const numberArray = [2, 3, 4];
console.log(calculateSum(...numberArray));

const carObject = {
    id : 1,
    model : "Seat",
    color : "gray"
}

const newModelSpec = {
    age : 35,
    wheelCount : 4,
    maxSpeed: 200, 
};

//arObject.specs = newModelSpec;
//bu kullanım yerine

const newCar = {...carObject, ...newModelSpec};
console.log("Car", newCar);

const newNumberArray = [...numberArray, 10,9,5];
console.log(newNumberArray);


//Object destructing

const [x, y, ...rest] = numberArray;
console.log('X : ', x);
console.log('Y : ', x);
console.log('NUmberArray : ', rest);

const {model, maxSpeed, ...restCar} = newCar;

console.log('model : ',model);
console.log('MaxSpeed : ', maxSpeed);
console.log('Car Rest Model : ', restCar);


/* Optinal Change */
const modelSpec = {
    age : 35,
    wheelCount : 4,
    maxSpeed: 200,
    //SpeedInterval 
};

console.log('Model', modelSpec?.SpeedInterval?.forEach(x => {
    console.log(x)
}));

/*Optinal Change (?) ile modelSpec nesnesi varsa devam et eğer modelSpec var
objesi var ve SpeedInterval degiskeni varsa onunu üzerinde forEach işlemini 
yap yoksa yapma */



/* Ternary Operator */
//if - else
if (carObject.color === "red") 
    console.log("Car is red");
else 
    console.log("Car is not red");

//Ternary
console.log("Car", (carObject.color === 'red') ? "is red" : "is not red");
console.log("Null", modelSpec.speedInterval || "0");


/***************************************/

//Class 
class Ders {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
    }

    getClassNameWithTeacher() {
        if (this.name && this.teacher) 
            return `${this.name} dersin ogretmeni : ${this.teacher}`;
        else 
            return "Ogretmen ve isim tanimi yok.";
    }

    //getters
    getName() {
        return this.name;
    }

    //setters
    setName(newValue) {
        if (newValue) {
            this.name = newValue;
        }
    }
}

const mathLesson = new Ders("Matematik", "Umut");
console.log(mathLesson.getClassNameWithTeacher());


//Inheritance  (Kalıtım)

class Animal{
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} speaks`;
    }
}


class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        return this.name + "bark";
    }
}


class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}


const goldenRetriewer = new Dog('Eddie');
console.log('Dog object', goldenRetriewer.speak());
console.log('Dog object', goldenRetriewer.bark());




































