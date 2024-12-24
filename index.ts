let message: string = 'Hello TS';
// console.log(message);

let firstName: string = 'Rasel';
let age: number = 24;
let isEmployed: boolean = false;

let fruits: string[] = ['mango', 'litchi'];
let numbers: number[] = [1, 2, 3, 4];

// tuples
let user: [name: string, age: number, student: boolean];
user = ['Rasel', 24, true];

// unions
let value: string | number;
value = 'name';
value = 24;

// type aliases
type Id = string | number;
let userId: Id = 'Tom';
userId = 234;

// practice
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person: Person = {
  name: 'Tom',
  age: 24,
  isStudent: true,
};

// console.log(`Hi I am ${person.name}, I am ${person.age} year old`);

function add(a: number, b: number): number {
  return a + b;
}
// console.log(add(3, 5));

function greet(name: string, age?: number): string {
  if (age) {
    return `${name}, ${age}`;
  }
  return `hello ${name}`;
}

// console.log(greet('tom'));
// console.log(greet('tommy', 45));
