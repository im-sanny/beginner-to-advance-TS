// Basic String Type Annotation: Explicitly defining a string variable
let greetingMessage: string = 'Hello TypeScript';

// Primitive Type Declarations: Strongly typed simple variables
let customerFullName: string = 'Rasel';
let customerAgeInYears: number = 24;
let isCustomerCurrentlyEmployed: boolean = false;

// Array Type Annotations: Typed arrays with specific element types
let favoriteFruitList: string[] = ['mango', 'litchi'];
let productQuantityList: number[] = [1, 2, 3, 4];

// Tuple: Fixed-length array with predefined type sequence
let userProfileTuple: [username: string, age: number, isStudent: boolean];
userProfileTuple = ['Rasel', 24, true];

// Union Types: Variables that can hold multiple types
let flexibleValue: string | number;
flexibleValue = 'customer name';
flexibleValue = 42;

// Type Aliases: Creating custom types for complex or reusable type definitions
type IdentifierType = string | number;
let productIdentifier: IdentifierType = 'PROD001';
productIdentifier = 12345;

// Object Type: Defining a structured object with specific property types
type CustomerProfileType = {
  fullName: string;
  age: number;
  isUndergraduate: boolean;
};

let customerProfileObject: CustomerProfileType = {
  fullName: 'Tom Anderson',
  age: 24,
  isUndergraduate: true,
};

// Function with Explicit Type Annotations: Defining input and output types
function calculateSum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

// Function with Optional Parameter: Parameter that may or may not be provided
function generateGreetingMessage(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`;
}

// Function with Default Parameter: Providing a default value if not specified
function calculateProductValue(
  baseValue: number,
  multiplier: number = 3
): number {
  return baseValue * multiplier;
}

// Function Type Alias: Defining a type for function signatures
type MathOperationType = (a: number, b: number) => number;

// Arrow Function with Type Alias
const performAdditionOperation: MathOperationType = (x, y) => x + y;

// Interface: Defining a contract for object structure with additional features
interface UserAccountInterface {
  id: number;
  username: string;
  isAdministrator: boolean;
  profileDescription?: string;
  readonly accountCreatedAt: string;
}

let userAccountObject: UserAccountInterface = {
  id: 79,
  username: 'tom_tech',
  isAdministrator: true,
  accountCreatedAt: '2023-06-15',
};

// Class: Object-oriented programming construct with type safety
class Person {
  // Private properties: Only accessible within the class
  private personName: string;
  private personAge: number;

  // Constructor: Initializes object properties
  constructor(name: string, age: number) {
    this.personName = name;
    this.personAge = age;
  }

  // Method with return type annotation: Describes the person
  describePerson(): string {
    return `I know ${this.personName}`;
  }

  // Method returning a number: Gets the person's age
  getAge(): number {
    return this.personAge;
  }
}

// Class Instantiation and Array of Class Type
const individualPerson = new Person('Thomas', 30);
let personArrayList: Person[] = [];

// console.log(individualPerson.describePerson());
// console.log(personArrayList);

// Access modifier
class Animal {
  protected animalSpecies: string;

  constructor(species: string) {
    this.animalSpecies = species;
  }

  // Method: Makes sound based on species
  makeSound(): string {
    return `This is a ${this.animalSpecies}`;
  }
}

class Dog extends Animal {
  constructor() {
    super('Dog');
  }

  // Method: Dog barks
  bark(): string {
    return `${this.animalSpecies} says woof woof`;
  }
}

let dogInstance = new Dog();
// console.log(dogInstance.makeSound());
// console.log(dogInstance.bark());

// readOnly
class Car {
  readonly carBrand: string;

  constructor(brand: string) {
    this.carBrand = brand;
  }

  // Method: Describes the sound of the car
  makeSound(): string {
    return `${this.carBrand} produces good cars`;
  }
}

const fordCar = new Car('Ford');
// console.log(fordCar.makeSound());
// console.log(fordCar.carBrand);
// fordCar.carBrand = 'Jaguar' //Error - Cannot assign to 'carBrand' because it is a read-only property

// getter and setter
class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Getter: Calculates the area of the rectangle
  get area(): number {
    return this.width * this.height;
  }

  // Setter: Updates the dimensions of the rectangle
  set dimension(dimension: { width: number; height: number }) {
    this.width = dimension.width;
    this.height = dimension.height;
  }
}

const rectangleInstance = new Rectangle(5, 10);
// console.log(rectangleInstance.area);

rectangleInstance.dimension = { width: 20, height: 30 };
// console.log(rectangleInstance.area);

// Static Methods and Properties
class MathUtility {
  static PiValue: number = 3.14;

  // Static Method: Calculates the circumference of a circle
  static calculateCircumference(radius: number): number {
    return 2 * this.PiValue * radius;
  }
}
// console.log(MathUtility.PiValue);
// console.log(MathUtility.calculateCircumference(10));

// Generic Function: Returns the same value passed to it
function identity<T>(value: T): T {
  return value;
}
// console.log(identity<string>('hello'));

// Generic Array Function: Returns an array of the same type
function item<T>(value: T[]): T[] {
  return value;
}
// console.log(item<number>([1, 2, 3]));
// console.log(item<string>(['a', 'b', 'c', 'd']));

// Generic Class: Holds data of any type
class DataHolder<T> {
  private dataValue: T;

  constructor(data: T) {
    this.dataValue = data;
  }

  // Method: Gets the stored data
  getData(): T {
    return this.dataValue;
  }

  // Method: Sets new data
  setData(data: T): void {
    this.dataValue = data;
  }
}
const numberDataHolder = new DataHolder<number>(33);
// console.log(numberDataHolder.getData());
numberDataHolder.setData(3333333);
// console.log(numberDataHolder.getData());

// Numeric Enum: Represents different statuses
enum StatusEnum {
  Active = 1,
  Inactive,
  Pending,
}
// console.log(StatusEnum.Inactive);

// String Enum: Represents different colors
enum ColorEnum {
  White = 'WHITE',
  Orange = 'ORANGE',
  Yellow = 'YELLOW',
}
// console.log(ColorEnum.Yellow);

// Typeof: Adds numbers or parses strings
function add(value: number | string): number {
  if (typeof value === 'number') {
    return 2 + value;
  } else {
    return parseInt(value + '4');
  }
}
// console.log(add(1));

// Instanceof: Determines the type of an object
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

function getAnimalSound(animal: Cat | Cow) {
  if (animal instanceof Cat) {
    return animal.meow();
  } else {
    return animal.moo();
  }
}

const catInstance = new Cat();
// console.log(getAnimalSound(catInstance));

enum UserRole {
  Admin = 'Admin',
  User = 'User ',
  Guest = 'Guest',
}

// Function: Returns a message based on user role
function getRoleMessage(role: UserRole): string {
  switch (role) {
    case UserRole.Admin:
      return 'You have full access';
    case UserRole.User:
      return 'You have limited access';
    case UserRole.Guest:
      return 'You have guest access';
    default:
      return 'Unknown role';
  }
}
// console.log(getRoleMessage(UserRole.Admin));

// Interface: Defines an object with a length property
interface LengthInterface {
  length: number;
}

// Function: Measures the length of an item
function measure<T extends LengthInterface>(item: T): void {
  console.log(`Measured length is ${item.length}`);
}
measure('item');
measure([1, 2, 3]);

// Keyof with Generics: Gets a property from an object
function getProperty1<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const userObject = { id: 1, name: 'Zari' };
// console.log(userObject.name);

// Generic Utility Type: Defines a task with optional properties
interface Task {
  title: string;
  description: string;
  completed: boolean;
}
type PartialTask = Partial<Task>;
type ReadonlyTask = Readonly<Task>;
type PickedTask = Pick<Task, 'title' | 'completed'>;
type OmitTask = Omit<Task, 'completed'>;

// Class Decorator: Monitors a class for security
function SecurityCamera(store: Function) {
  console.log(`Monitoring: ${store.name}`);
}

// Applying the security camera decorator to the GroceryStore class
@SecurityCamera
class GroceryStore {
  constructor(public storeName: string) {}
}

// When the store opens, the security system activates automatically
const myGroceryStore = new GroceryStore('Walmart');

// Property Decorator: Logs access to a property
function PropertyLogger(target: any, propertyKey: string) {
  console.log(`Accessed property is: ${propertyKey}`);
}

// Class with a property that uses the property logger
class User {
  @PropertyLogger
  userName: string = 'tom';
}

// Method Decorator: Logs method calls
function MethodLogger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Method ${propertyKey} called`);
}

// Class with a method that uses the method logger
class Calculator1 {
  @MethodLogger
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculatorInstance = new Calculator1();
console.log(calculatorInstance.add(1, 3));
