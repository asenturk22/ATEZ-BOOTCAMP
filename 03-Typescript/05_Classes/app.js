var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //Constructor
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //methot
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
;
var person = new Person(1, "Abdullah", "Şentürk");
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person));
var employee = new Employee(2, "Ahmet", "Şentürk");
console.log(employee);
console.log(employee.getFullName());
//static keyword' ü 
var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 4;
        Circle.pi++;
    }
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log("PI : ", Circle.pi);
console.log(Circle.hesapla(5));
var obje1 = new Circle();
var obje2 = new Circle();
var obje3 = new Circle();
console.log(obje1.pi);
console.log(Circle.pi);
//Abstract Class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name : " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateDepartment = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
//let department = new AccountingDepartment();
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateDepartment();
