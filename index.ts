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

function multiply(a: number, b: number = 3): number {
  return a * b;
}

type AddFn = (a: number, b: number) => number;

const addNumbers: AddFn = (a, b) => a + b;

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
  description?: string;
  readonly title: string;
}

let users: User = {
  id: 79,
  name: 'tom',
  isAdmin: true,
  title: 'good products',
};
users.id = 70;
// users.title = 'New title';

class Birds {
  name: string;
  age: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.age = quantity;
  }

  like(): string {
    return `I like ${this.name}`;
  }
  buy(): number {
    return this.age;
  }
}

const bird = new Birds('Cuckoo', 1);
console.log(bird.like());
