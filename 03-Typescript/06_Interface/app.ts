//Interface

interface Person {
    //readonly firstName : string,
    firstName : string,
    lastName : string,
    middleName?: string
};

function getFullName(person : Person) {
    if (person.middleName)
        return `${person.firstName} ${person.middleName} ${person.lastName}`;

    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName : 'Abdullah',
    middleName : "Hay",
    lastName : 'Şentürk'
}

console.log(getFullName(person));


//Interface Optional Parameters Readonly Function Type
interface StringFormat {
    (str: string, isUpper:boolean):string
}

let format:StringFormat;

format = function (str: string, isUpper:boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

console.log(format("abdullah senturk", true));


//Interface Extend ve Bir class'a implement etme
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empNumber : number;
}

interface IWorker extends IPerson {
    empDepartment: string;
}

let employee : IEmployee =  {
    empNumber: 1,
    name: 'Abdullah',
    gender: 'Male'
};

let employeeDepartment : IWorker = {
    empDepartment: 'Software Department',
    gender: 'Male',
    name : 'ABdullah'
};

console.log(employee)
console.log(employeeDepartment)

//class' a interface' i implement etme

class Employee implements IPerson {
    name: string;
    gender: string;
    empNumber: number; 

    constructor(empNumber: number, name:string, gender:string) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
}


employee = new Employee(1, "Abdullah", "Male");
console.log(employee);
















