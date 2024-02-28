var person1 = {
    name: "Murad",
    age: 31,
    gender: "male",
};
// v1
var printPersonDetails = function (input) {
    console.log("".concat(input.name, " is ").concat(input.age, " years old ").concat(input.gender));
};
var printPersonDetailsV2 = function (person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old ").concat(person.gender));
};
var addition = function (a, b) {
    return a + b;
};
