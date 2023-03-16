//Interface
;
function getFullName(person) {
    if (person.middleName)
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'Abdullah',
    middleName: "Hay",
    lastName: 'Şentürk'
};
console.log(getFullName(person));
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("abdullah senturk", true));
var employee = {
    empNumber: 1,
    name: 'Abdullah',
    gender: 'Male'
};
var employeeDepartment = {
    empDepartment: 'Software Department',
    gender: 'Male',
    name: 'ABdullah'
};
console.log(employee);
console.log(employeeDepartment);
//class' a interface' i implement etme
var Employee = /** @class */ (function () {
    function Employee(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return Employee;
}());
employee = new Employee(1, "Abdullah", "Male");
console.log(employee);
