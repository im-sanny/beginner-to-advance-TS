// Basic String Type Annotation: Explicitly defining a string variable
let greeting: string = 'Hello TypeScript';

// Primitive Type Declarations: Strongly typed simple variables
let customerName: string = 'Rasel';
let customerAge: number = 24;
let isCustomerEmployed: boolean = false;

// Array Type Annotations: Typed arrays with specific element types
let favoriteFruits: string[] = ['mango', 'litchi'];
let productQuantities: number[] = [1, 2, 3, 4];

// Tuple: Fixed-length array with predefined type sequence
let userProfile: [username: string, age: number, isStudent: boolean];
userProfile = ['Rasel', 24, true];

// Union Types: Variables that can hold multiple types
let dynamicValue: string | number;
dynamicValue = 'customer name';
dynamicValue = 42;

// Type Aliases: Creating custom types for complex or reusable type definitions
type Identifier = string | number;
let productId: Identifier = 'PROD001';
productId = 12345;

// Object Type: Defining a structured object with specific property types
type CustomerProfile = {
  fullName: string;
  age: number;
  isUndergraduate: boolean;
};

let customerProfile: CustomerProfile = {
  fullName: 'Tom Anderson',
  age: 24,
  isUndergraduate: true,
};

// Function with Explicit Type Annotations: Defining input and output types
function calculateSum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

// Function with Optional Parameter: Parameter that may or may not be provided
function generateGreeting(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`;
}

// Function with Default Parameter: Providing a default value if not specified
function calculateProduct(baseValue: number, multiplier: number = 3): number {
  return baseValue * multiplier;
}

// Function Type Alias: Defining a type for function signatures
type MathOperation = (a: number, b: number) => number;

// Arrow Function with Type Alias
const performAddition: MathOperation = (x, y) => x + y;

// Interface: Defining a contract for object structure with additional features
interface UserAccount {
  id: number;
  username: string;
  isAdministrator: boolean;
  profileDescription?: string;
  readonly accountCreatedAt: string;
}

let userAccount: UserAccount = {
  id: 79,
  username: 'tom_tech',
  isAdministrator: true,
  accountCreatedAt: '2023-06-15',
};

// Class: Object-oriented programming construct with type safety
class Person {
  // Private properties: Only accessible within the class
  private name: string;
  private age: number;

  // Constructor: Initializes object properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method with return type annotation
  describePerson(): string {
    return `I know ${this.name}`;
  }

  // Method returning a number
  getAge(): number {
    return this.age;
  }
}

// Class Instantiation and Array of Class Type
const person = new Person('Thomas', 30);
let personArray: Person[] = [];

// console.log(person.describePerson());
// console.log(personArray);

// Access modifier
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }

  makeSound(): string {
    return `This is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor() {
    super('Dog');
  }
  bark(): string {
    return `${this.species} says woof woof`;
  }
}

let dog = new Dog();
// console.log(dog.makeSound());
// console.log(dog.bark());

// readOnly
class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
  makeSound(): string {
    return `${this.brand} produce good car`;
  }
}

const getCar = new Car('Ford');
// console.log(getCar.makeSound());
// console.log(getCar.brand);
// getCar.brand = 'Jaguar' //Error - Cannot assign to 'brand' because it is a read-only property

// getter and setter
class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  get area(): number {
    return this.width * this.height;
  }

  set dimension(dimension: { width: number; height: number }) {
    this.width = dimension.width;
    this.height = dimension.height;
  }
}

const rect = new Rectangle(5, 10);
// console.log(rect.area);

rect.dimension = { width: 20, height: 30 };
// console.log(rect.area);

// Static Methods and Properties
class MathUtil {
  static Pi: number = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * this.Pi * radius;
  }
}
// console.log(MathUtil.Pi);
// console.log(MathUtil.calculateCircumference(10));

//generic
function identity<T>(value: T): T {
  return value;
}
// console.log(identity<string>('hello'));

// generic array
function item<T>(value: T[]): T[] {
  return value;
}
// console.log(item<number>([1, 2, 3]));
// console.log(item<string>(['a', 'b', 'c', 'd']));

// generic class
class Data<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }
}
const numberHolder = new Data<number>(33);
// console.log(numberHolder.getData());
numberHolder.setData(3333333);
// console.log(numberHolder.getData());

// numeric enum
enum Stat {
  Active = 1,
  Inactive,
  Pending,
}
console.log(Stat.Inactive);

// string enum
enum Color {
  White = 'WHITE',
  Orange = 'ORANGE',
  Yellow = 'YELLOW',
}
console.log(Color.Yellow);

// typeof
function add(value: number | string): number {
  if (typeof value === 'number') {
    return 2 + value;
  } else {
    return parseInt(value + 4);
  }
}
console.log(add(1));

// instanceof
class Cat {
  meow() {
    return 'Meow!';
  }
}
class Cow {
  moo() {
    return 'Moo! Moo!';
  }
}

function getSound(animal: Cat | Cow) {
  if (animal instanceof Cat) {
    return animal.meow();
  } else {
    return animal.moo();
  }
}

const cat = new Cat();
console.log(getSound(cat));

enum Role {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

function getRoleMessage(role: Role): string {
  switch (role) {
    case Role.Admin:
      return 'u have full access';
    case Role.User:
      return 'u have limited access';
    case Role.Guest:
      return 'u have guest access';
    default:
      return 'unknown role';
  }
}
console.log(getRoleMessage(Role.Admin));

interface Length {
  length: number;
}
function measure<T extends Length>(item: T): void {
  console.log(`measured length is ${item.length}`);
}
measure('item');
measure([1, 2, 3]);

// keyof with generics
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: 'Zari' };
console.log(user.name);
