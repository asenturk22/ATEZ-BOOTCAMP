//Generic 
//Generic yapısı her türlü veriyi alabilecek yapı haline getirmek demektir. 

//parameters and return value = number
function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 2, 3, 5, 6, 8];
console.log(getRandomNumber(numbers));


//parameters and return value = string
function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let names = ["Abdullah", "Ferhat", "Sinan", "Seçkin"];
console.log(getRandomString(names));


//parameters and return value = any
function getRandomElementAny(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomElementAny(numbers));
console.log(getRandomElementAny(names));

//parameters and return value = GENERIC TYPE
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

//Türünü kendisi algılar.
console.log(getRandomElement(numbers));
console.log(getRandomElement(names));

/****** GENERIC CONSTRAINS *********************/
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

let person = merge (
    { name: 'Abdullah' },
    { age: 40 }
)

console.log(person);

/****** GENERIC interface *********************/
interface Months<U, V> {
    key: U,
    value: V 
}

let month: Months<number, string> =  {
    key: 1,
    value : "January"
} 

console.log(month);


/**** exampl- 2 */
interface Collection<T> {
    add(o: T):void;
    remove(o: T): void;
}

class List<T> implements Collection<T> {
    private items: T[] = [];
    add(o: T) : void {
        this.items.push(o);
        console.log(this.items)
    }

    remove(o: T) : void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}


let list = new List<number>();

for (let i = 0; i < 5; i++) {
    list.add(i);
}

console.log("stack array")

/************* GENERIC CLASS */
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {

    }

    length() : number {
        return this.elements.length;
    }

    display() : void {
        if (this.elements.length === 0) {
            console.log("This stack is empty");
            return;
        }
        for (let item of this.elements) {
            console.log(item);
        }
    }

    isEmpty() : boolean {
        return this.elements.length === 0;
    }

    isFull() : boolean {
        return this.elements.length === this.size;
    }

    push(element: T) : void {
        if (this.elements.length === this.size) {
            throw new Error("This stack is overflow!");
        }
        this.elements.push(element);
    }

    pop() : any {
        if (this.elements.length === 0) {
            throw new Error("This stack is empty");
        }

        return this.elements.pop();
    }
}


function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) * low);
}

//5 adet number türünden dizi tanımlanıyor. 
let numbers2 = new Stack<number>(5);
console.log(numbers2);
console.log(numbers2.length());

while (!numbers2.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack`);
    numbers2.push(n);
}

numbers2.display();

while (!numbers2.isEmpty()) {
    let n = numbers2.pop();
    console.log(`Pop ${n} into the stack`);
    numbers2.display();
}















