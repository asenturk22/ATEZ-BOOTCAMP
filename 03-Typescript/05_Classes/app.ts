class Person {
    private id:number;
    private firstName:string;
    private lastName:string;

    //Constructor
    constructor(id:number, firstName:string, lastName:string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //methot
    getFullName() {
        return `${this.firstName} ${this.lastName}`; 
    }
};

let person = new Person(1, "Abdullah", "Şentürk");
console.log(person);
console.log(person.getFullName());


//class Access Modifiers (public - private - protected)
//public  : class içinden ve dşından erişilebiilr
//private : class içinden erişilebilir ancak dışından erişilemez. 
//protected : 
    //class içinden erişilebilir
    //extends edilen sınıflardan erişilebilir, 
    //sınıf dışından erişilemez. 

//Readonly - sadece oku anlamındadır. içerisindeki değeri değiştiremeyiz. 

//Inheritance

class Employee extends Person {
    constructor(id:number, firstName:string, lastName:string) {
        super(id, firstName, lastName);
    }
}


let employee = new Employee(2, "Ahmet", "Şentürk");
console.log(employee);
console.log(employee.getFullName());

//static keyword' ü 

class Circle {
    static pi : number = 3.14;
    pi = 4;

    static hesapla(yaricap:number) {
        return this.pi * yaricap * yaricap;
    }

    constructor() {
        Circle.pi++;
    }
}

console.log("PI : ", Circle.pi);
console.log(Circle.hesapla(5));

let obje1 = new Circle();
let obje2 = new Circle(); 
let obje3 = new Circle(); 

console.log(obje1.pi); 
console.log(Circle.pi); 


//Abstract Class

abstract class Department {
    constructor(public name : string) {}

    printName(): void {
        console.log("Department name : " + this.name);
    }

    abstract printMeeting() : void;
    abstract generateDepartment(): void ;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting() : void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateDepartment(): void {
        console.log("Generating accounting reports...");
    }

}


//let department = new AccountingDepartment();
let department : Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateDepartment();