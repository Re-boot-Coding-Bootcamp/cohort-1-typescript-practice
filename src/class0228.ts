// interface PersonalInfo {
//   firstName: string;
//   lastName: string;
//   dob: Date;
//   ssn: number;
// }

// const printPersonalInfo = (info: PersonalInfo) => {
//   console.log("First Name: ", info.firstName);
//   console.log("Last Name: ", info.lastName);
//   console.log("Date of Birth: ", info.dob);
//   console.log("SSN: ", info.ssn);
// };
// const firstPerson: PersonalInfo = {
//   firstName: "John",
//   lastName: "Doe",
//   dob: new Date(),
//   ssn: 1234567890,
// };
// printPersonalInfo(firstPerson);

// const secondPerson = {
//   firstName: "Jane",
//   lastName: "Doe",
//   dob: new Date(),
//   ssn: 9876543210,
//   age: 30,
//   gender: "female",
// };
// printPersonalInfo(secondPerson);

// ----------------------------

// let dob: any; // not recommended
// let dob: string | Date;
// dob = new Date();
// dob = "01/01/2021";

// type PersonalInfo = {
//   firstName: string;
//   lastName: string;
//   dob: string | Date;
//   ssn: number;
// };

// const person: PersonalInfo = {
//   firstName: "Jane",
//   lastName: "Doe",
//   dob: new Date(),
//   ssn: 987654321,
// };

// const personString = JSON.stringify(person);

// const x: object = JSON.parse(personString);

// // type assertion
// const parsedPerson = x as PersonalInfo;

// ----------------------------

// interface PersonV2 {
//   firstName: string;
//   lastName: string;
//   middleName: string | null | undefined;
// }

// const person3: PersonV2 = {
//   firstName: "John",
//   lastName: "Doe",
//   middleName: "Michael",
// };

// const person4: PersonV2 = {
//   firstName: "Jane",
//   lastName: "Doe",
//   middleName: null,
// };

// const person5: PersonV2 = {
//   firstName: "Jane",
//   lastName: "Doe",
//   middleName: undefined,
// };

// // optional
// interface PersonV3 {
//   firstName: string;
//   lastName: string;
//   middleName?: string;
// }

// const person6: PersonV3 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person6.middleName);
// console.log(person5.middleName);

// ----------------------------

// enum MathOperation {
//   Add = "Add",
//   Subtract = "Subtract",
//   Multiply = "Multiply",
//   Divide = "Divide",
// }

// const calculate = (
//   operation: MathOperation,
//   x: number,
//   y: number
// ): number | undefined => {
//   switch (operation) {
//     case MathOperation.Add:
//       return x + y;
//     case MathOperation.Subtract:
//       return x - y;
//     case MathOperation.Multiply:
//       return x * y;
//     case MathOperation.Divide:
//       return x / y;
//   }
// };

// console.log(calculate(MathOperation.Add, 10, 5));
