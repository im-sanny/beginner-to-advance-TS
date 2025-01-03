// Interface for Vehicle Specifications
interface VehicleSpecification {
  manufacturer: string;
  modelName: string;
  manufacturingYear: number;
  ownerName?: string;
}

// Function to describe a vehicle
function describeVehicle(vehicleDetails: VehicleSpecification): string {
  return `Car manufacturer is ${vehicleDetails.manufacturer}, model ${vehicleDetails.modelName}, made in ${vehicleDetails.manufacturingYear}`;
}

// Vehicle object
const electricVehicle: VehicleSpecification = {
  manufacturer: 'Tesla',
  modelName: 'Model S',
  manufacturingYear: 2022,
};
// console.log(describeVehicle(electricVehicle));

// Class representing continent information with access modifiers
class ContinentInformation {
  public continentName: string;
  private numberOfCountries: number;

  constructor(name: string, countryCount: number) {
    this.continentName = name;
    this.numberOfCountries = countryCount;
  }

  // Method to get continent description
  describeContinentFavorite(): string {
    return `My favorite continent is ${this.continentName}`;
  }

  // Method to get the total number of countries
  getTotalCountries(): number {
    return this.numberOfCountries;
  }
}

// Creating an instance of ContinentInformation
const continentDetails = new ContinentInformation('Europe', 24);
// console.log(continentDetails.describeContinentFavorite());
// console.log(continentDetails.getTotalCountries());
// console.log(continentDetails.numberOfCountries); // Would cause an error

// Base class for pets with protected member
class BasePet {
  protected petName: string;

  constructor(name: string) {
    this.petName = name;
  }

  // Method in base class to introduce the pet
  introducePet(): string {
    return `My favorite pet is ${this.petName}`;
  }
}

// Derived class using the protected member from BasePet
class SpecificPet extends BasePet {
  constructor() {
    super('Whiskers');
  }

  // Method using the protected name from the parent class
  makePetSound(): string {
    return `${this.petName} says meow meow`;
  }
}

// Creating and using pet instances
const myPet = new SpecificPet();
// console.log(myPet.makePetSound());
// console.log(myPet.introducePet());

// Class representing a book with a readonly property
class Book {
  readonly bookName: string;

  constructor(name: string) {
    this.bookName = name;
  }

  // Method to suggest reading the book
  read(): string {
    return `You should read ${this.bookName}`;
  }
}

const bookInstance = new Book('Hehe Boi');
// bookInstance.bookName = 'Lol'; // Error

// Class representing dimensions with getter and setter
class Total {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area(): number {
    return this.width * this.height;
  }

  // Setter for dimensions
  set dimensions(dimensions: { width: number; height: number }) {
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
}

const total = new Total(3, 5);
// console.log(total.area);
total.dimensions = { width: 4, height: 8 };
// console.log(total.area);

// Class for calculations with static methods
class Calculate {
  static add: number = 7;

  // Static method to calculate total
  static total(tot: number): number {
    return 2 * this.add * tot;
  }

  // Static method to perform subtraction
  static minus(mi: number): number {
    return this.add - mi;
  }
}
// console.log(Calculate.add);
// console.log(Calculate.total(30));
// console.log(Calculate.minus(30));

// Class representing an employee with private properties
class Employee {
  private employeeId: number;
  name: string;

  constructor(id: number, name: string) {
    this.employeeId = id;
    this.name = name;
  }

  // Method to get employee details
  getDetails(): string {
    return `Employee id ${this.employeeId}, employee name ${this.name}`;
  }
}

const employee = new Employee(69, 'Lol');
// console.log(employee.getDetails());

// Generic function to greet
function greet<T>(value: T): T {
  return value;
}
// console.log(greet<string>('Hello Tom'));

// Generic array function
function items<T>(value: T[]): T[] {
  return value;
}
// console.log(items<string>(['a', 'b', 'c']));

// Generic class to hold data
class DataHolder1<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  // Method to get data
  getData() {
    return this.data;
  }

  // Method to set data
  setData(data: T) {
    this.data = data;
  }
}

const dataHolder1 = new DataHolder1<string>('Hello from practice');
// console.log(dataHolder1.getData());
dataHolder1.setData('Update in practice');
// console.log(dataHolder1.getData());

// Numeric enum for days
enum Days {
  Day1 = 1,
  Day2,
  Day3,
}
// console.log(Days.Day2);

// String enum for colors
enum Colors {
  Black = 'BLACK',
  Gray = 'GRAY',
  Pink = 'PINK',
}
// console.log(Colors.Gray);

// Function to subtract a value
function subtract(value: string | number): number {
  if (typeof value === 'number') {
    return value - 4;
  } else {
    return parseInt(value);
  }
}
// console.log(subtract(6));

// Using instanceof to determine flower type
class Rose {
  look() {
    return 'Rose is beautiful';
  }
}

class Lily {
  smell() {
    return 'Lily is a smell-less flower';
  }
}

function aboutFlower(flower: Rose | Lily) {
  if (flower instanceof Rose) {
    return flower.look();
  } else {
    return flower.smell();
  }
}
const rose = new Rose();
// console.log(aboutFlower(rose));

// Enum for animal sounds
enum Access {
  Cow = 'Cow',
  Cat = 'Cat',
  Crow = 'Crow',
}

function animalCall(call: Access): string {
  switch (call) {
    case Access.Cow:
      return 'Cow says moo moo';
    case Access.Cat:
      return 'Cat says meow meow';
    case Access.Crow:
      return 'Crow says ka ka';
    default:
      return 'Animal not identified';
  }
}
// console.log(animalCall(Access.Cat));

// Generic constraints example
interface FullLength {
  length: number;
  count?: string;
}

function countAll<T extends FullLength>(item: T): void {
  if (item.length) {
    console.log(`Total length is ${item.length}`);
  } else {
    console.log(`Total string is ${item.count}`);
  }
}
countAll('string');
countAll([1, 2, 3]);

// keyof with generics
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const personName = { id: 3, name: 'User 3' };
// console.log(personName);

// Generic utility types
interface ToDo {
  title: string;
  description: string;
  completed: boolean;
}
type PartialToDo = Partial<ToDo>;
type ReadonlyToDo = Readonly<ToDo>;
type PickToDo = Pick<ToDo, 'title' | 'description'>;
type OmitToDo = Omit<ToDo, 'completed'>;

// Class decorator to count instances
function CountAll(toyClass: Function) {
  console.log(`New ${toyClass.name} is created`);
}
@CountAll
class Toy {
  constructor(public name: string) {}
}
const factory = new Toy('Rubber Ball');

// Property decorator for checking
function Checker(target: any, propertyKey: string) {
  console.log(`Checking ${propertyKey}`);
}
class Check {
  @Checker
  username: string = 'Elephant';
}

// Method decorator for logging
function MinusLogger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Minus method ${propertyKey}`);
}

class Minus {
  @MinusLogger
  subtract(a: number, b: number): number {
    return a - b;
  }
}
const totalMinus = new Minus();
console.log(totalMinus.subtract(10, 3));
