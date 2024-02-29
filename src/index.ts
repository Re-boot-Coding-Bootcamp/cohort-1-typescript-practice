type Gender = "male" | "female" | "other";

interface Person {
  name: string;
  age: number;
  gender: Gender;
}

const person1: Person = {
  name: "Murad",
  age: 31,
  gender: "male",
};

// v1
const printPersonDetails = (input: Person): void => {
  console.log(`${input.name} is ${input.age} years old ${input.gender}`);
};

// v2
type PrintDetailsFunctionType = (input: Person) => void;
const printPersonDetailsV2: PrintDetailsFunctionType = (person) => {
  console.log(`${person.name} is ${person.age} years old ${person.gender}`);
};

const addition = (a: number, b: number): number => {
  return a + b;
};
