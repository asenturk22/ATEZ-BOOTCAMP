//Enum data-type
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["Ferbruary"] = 1] = "Ferbruary";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["November"] = 9] = "November";
    Months[Months["December"] = 10] = "December";
})(Months || (Months = {}));
var myCat = {
    name: 'Java',
    type: 'tekir',
    age: 4,
    dot: 'Spotted',
    sound: function () { return console.log('Moew'); }
};
myCat.sound();
var Java = {
    name: "Java",
    type: "Cat",
    birthMonth: Months.Ferbruary
};
console.log(Java);
/******* GENERIC */
