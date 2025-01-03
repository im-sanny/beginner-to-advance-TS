"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Function to describe a vehicle
function describeVehicle(vehicleDetails) {
    return `Car manufacturer is ${vehicleDetails.manufacturer}, model ${vehicleDetails.modelName}, made in ${vehicleDetails.manufacturingYear}`;
}
// Vehicle object
const electricVehicle = {
    manufacturer: 'Tesla',
    modelName: 'Model S',
    manufacturingYear: 2022,
};
// console.log(describeVehicle(electricVehicle));
// Class representing continent information with access modifiers
class ContinentInformation {
    constructor(name, countryCount) {
        this.continentName = name;
        this.numberOfCountries = countryCount;
    }
    // Method to get continent description
    describeContinentFavorite() {
        return `My favorite continent is ${this.continentName}`;
    }
    // Method to get the total number of countries
    getTotalCountries() {
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
    constructor(name) {
        this.petName = name;
    }
    // Method in base class to introduce the pet
    introducePet() {
        return `My favorite pet is ${this.petName}`;
    }
}
// Derived class using the protected member from BasePet
class SpecificPet extends BasePet {
    constructor() {
        super('Whiskers');
    }
    // Method using the protected name from the parent class
    makePetSound() {
        return `${this.petName} says meow meow`;
    }
}
// Creating and using pet instances
const myPet = new SpecificPet();
// console.log(myPet.makePetSound());
// console.log(myPet.introducePet());
// Class representing a book with a readonly property
class Book {
    constructor(name) {
        this.bookName = name;
    }
    // Method to suggest reading the book
    read() {
        return `You should read ${this.bookName}`;
    }
}
const bookInstance = new Book('Hehe Boi');
// bookInstance.bookName = 'Lol'; // Error
// Class representing dimensions with getter and setter
class Total {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getter for area
    get area() {
        return this.width * this.height;
    }
    // Setter for dimensions
    set dimensions(dimensions) {
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
    // Static method to calculate total
    static total(tot) {
        return 2 * this.add * tot;
    }
    // Static method to perform subtraction
    static minus(mi) {
        return this.add - mi;
    }
}
Calculate.add = 7;
// console.log(Calculate.add);
// console.log(Calculate.total(30));
// console.log(Calculate.minus(30));
// Class representing an employee with private properties
class Employee {
    constructor(id, name) {
        this.employeeId = id;
        this.name = name;
    }
    // Method to get employee details
    getDetails() {
        return `Employee id ${this.employeeId}, employee name ${this.name}`;
    }
}
const employee = new Employee(69, 'Lol');
// console.log(employee.getDetails());
// Generic function to greet
function greet(value) {
    return value;
}
// console.log(greet<string>('Hello Tom'));
// Generic array function
function items(value) {
    return value;
}
// console.log(items<string>(['a', 'b', 'c']));
// Generic class to hold data
class DataHolder1 {
    constructor(data) {
        this.data = data;
    }
    // Method to get data
    getData() {
        return this.data;
    }
    // Method to set data
    setData(data) {
        this.data = data;
    }
}
const dataHolder1 = new DataHolder1('Hello from practice');
// console.log(dataHolder1.getData());
dataHolder1.setData('Update in practice');
// console.log(dataHolder1.getData());
// Numeric enum for days
var Days;
(function (Days) {
    Days[Days["Day1"] = 1] = "Day1";
    Days[Days["Day2"] = 2] = "Day2";
    Days[Days["Day3"] = 3] = "Day3";
})(Days || (Days = {}));
// console.log(Days.Day2);
// String enum for colors
var Colors;
(function (Colors) {
    Colors["Black"] = "BLACK";
    Colors["Gray"] = "GRAY";
    Colors["Pink"] = "PINK";
})(Colors || (Colors = {}));
// console.log(Colors.Gray);
// Function to subtract a value
function subtract(value) {
    if (typeof value === 'number') {
        return value - 4;
    }
    else {
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
function aboutFlower(flower) {
    if (flower instanceof Rose) {
        return flower.look();
    }
    else {
        return flower.smell();
    }
}
const rose = new Rose();
// console.log(aboutFlower(rose));
// Enum for animal sounds
var Access;
(function (Access) {
    Access["Cow"] = "Cow";
    Access["Cat"] = "Cat";
    Access["Crow"] = "Crow";
})(Access || (Access = {}));
function animalCall(call) {
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
function countAll(item) {
    if (item.length) {
        console.log(`Total length is ${item.length}`);
    }
    else {
        console.log(`Total string is ${item.count}`);
    }
}
countAll('string');
countAll([1, 2, 3]);
// keyof with generics
function getProperty(obj, key) {
    return obj[key];
}
const personName = { id: 3, name: 'User 3' };
// Class decorator to count instances
function CountAll(toyClass) {
    console.log(`New ${toyClass.name} is created`);
}
let Toy = class Toy {
    constructor(name) {
        this.name = name;
    }
};
Toy = __decorate([
    CountAll,
    __metadata("design:paramtypes", [String])
], Toy);
const factory = new Toy('Rubber Ball');
// Property decorator for checking
function Checker(target, propertyKey) {
    console.log(`Checking ${propertyKey}`);
}
class Check {
    constructor() {
        this.username = 'Elephant';
    }
}
__decorate([
    Checker,
    __metadata("design:type", String)
], Check.prototype, "username", void 0);
// Method decorator for logging
function MinusLogger(target, propertyKey, descriptor) {
    console.log(`Minus method ${propertyKey}`);
}
class Minus {
    subtract(a, b) {
        return a - b;
    }
}
__decorate([
    MinusLogger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Minus.prototype, "subtract", null);
const totalMinus = new Minus();
console.log(totalMinus.subtract(10, 3));
