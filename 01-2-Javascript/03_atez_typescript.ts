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

const myCat : Cat = {
    name : 'Java',
    type : 'tekir',
    age : 4,
    dot: 'Spotted',
    sound: ()=> console.log('Moew')
}

interface Dog extends Animal {
    
}