// Interface for Car Details
interface VehicleSpecification {
  manufacturer: string;
  modelName: string;
  manufacturingYear: number;
  ownerName?: string;
}

// Function to describe vehicle
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

// Continent Class with Access Modifiers
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

  // Method to get number of countries
  getTotalCountries(): number {
    return this.numberOfCountries;
  }
}

// Creating continent instance
const continentDetails = new ContinentInformation('Europe', 24);
// console.log(continentDetails.describeContinentFavorite());
// console.log(continentDetails.getTotalCountries());
// console.log(continentDetails.numberOfCountries); // Would cause an error

// Protected Modifier Example
class BasePet {
  protected petName: string;

  constructor(name: string) {
    this.petName = name;
  }

  // Method in base class
  introducePet(): string {
    return `My favorite pet is ${this.petName}`;
  }
}

// Derived class using protected member
class SpecificPet extends BasePet {
  constructor() {
    super('Whiskers');
  }

  // Method using protected name from parent class
  makePetSound(): string {
    return `${this.petName} says meow meow`;
  }
}

// Creating and using pet instances
const myPet = new SpecificPet();
// console.log(myPet.makePetSound());
// console.log(myPet.introducePet());

// Readonly
class Boomks {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
  read(): string {
    return `You should read ${this.name}`;
  }
}

const boomk = new Boomks('hehe boi');
// boomk.name = 'lol'   //Error

// getter and setter
class Total {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  get all(): number {
    return this.width * this.height;
  }
  set idk(idk: { width: number; height: number }) {
    this.width = idk.width;
    this.height = idk.height;
  }
}

const total = new Total(3, 5);
// console.log(total.all);
total.idk = { width: 4, height: 8 };
// console.log(total.all);

class Calculate {
  static add: number = 7;

  static total(tot: number): number {
    return 2 * this.add * tot;
  }
  static minus(mi: number): number {
    return this.add - mi;
  }
}
// console.log(Calculate.add);
// console.log(Calculate.total(30));
// console.log(Calculate.minus(30));

class Employee {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getDetails(): string {
    return `Employee id ${this.id}, employee name ${this.name}`;
  }
}

const employee = new Employee(69, 'lol');
// console.log(employee.getDetails());

// generics
function greet<T>(value: T): T {
  return value;
}
// console.log(greet<string>('hello tom'));

// generic array
function items<T>(value: T[]): T[] {
  return value;
}
// console.log(items<string>(['a', 'b', 'c']));

// generic class
class Data2<T> {
  private data2: T;

  constructor(data: T) {
    this.data2 = data;
  }
  getData() {
    return this.data2;
  }
  setData(data2: T) {
    this.data2 = data2;
  }
}

const dataHolder1 = new Data2<string>('hello from practice');
// console.log(dataHolder1.getData());
dataHolder1.setData('update in practice');
// console.log(dataHolder1.getData());

// numeric enum
enum Days {
  Day1 = 1,
  Day2,
  Day3,
}
console.log(Days.Day2);

// string enum
enum Colors3 {
  Black = 'BLACK',
  Gray = 'GRAY',
  Pink = 'PINK',
}
console.log(Colors3.Gray);

// typeof
function subtract(value: string | number): number {
  if (typeof value === 'number') {
    return value - 4;
  } else {
    return parseInt(value);
  }
}
console.log(subtract(6));

// instanceof
class Rose {
  look() {
    return 'Rose is beautiful';
  }
}

class Lily {
  smell() {
    return 'Lily is smell less flower';
  }
}

function aboutF(flower: Rose | Lily) {
  if (flower instanceof Rose) {
    return flower.look();
  } else {
    return flower.smell();
  }
}
const rose = new Rose();
console.log(aboutF(rose));

enum Access {
  cow = 'Cow',
  cat = 'Cat',
  crow = 'Crow',
}

function animalCall(call: Access): string {
  switch (call) {
    case Access.cow:
      return 'cow says moo moo';
    case Access.cat:
      return 'cat says meow meow';
    case Access.crow:
      return 'crow says ka ka';
    default:
      return 'animal not identified';
  }
}
console.log(animalCall(Access.cat));

//  Generic Constraints
interface FullLength {
  length: number;
  count?: string;
}

function countAll<T extends FullLength>(item: T): void {
  if (item.length) {
    return console.log(`total length is ${item.length}`);
  } else {
    return console.log(`total string is ${item.count}`);
  }
}
countAll('string');
countAll([1, 2, 3]);

// keyof with generics
function fName<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const pName = { id: 3, name: 'User3' };
console.log(pName);
