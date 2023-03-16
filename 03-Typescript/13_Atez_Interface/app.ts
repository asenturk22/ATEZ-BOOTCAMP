interface Animal {
    name : string; 
    type : string;
    age : number;
    eyeGolor? : string;
    wiskers? : boolean;
    sound : ()=> void;
}

interface Cat extends Animal {
    dot: string;
}

//Enum data-type
enum Months {
    January = 0,
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
}


const myCat : Cat = {
    name : 'Java',
    type : 'tekir',
    age : 4,
    dot: 'Spotted',
    sound: ()=> console.log('Moew')
}

myCat.sound();

const Java = {
    name: "Java",
    type: "Cat",
    birthMonth: Months.Ferbruary
}

console.log(Java);


/******* GENERIC */

