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
// Function to describe vehicle
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
// Continent Class with Access Modifiers
class ContinentInformation {
    constructor(name, countryCount) {
        this.continentName = name;
        this.numberOfCountries = countryCount;
    }
    // Method to get continent description
    describeContinentFavorite() {
        return `My favorite continent is ${this.continentName}`;
    }
    // Method to get number of countries
    getTotalCountries() {
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
    constructor(name) {
        this.petName = name;
    }
    // Method in base class
    introducePet() {
        return `My favorite pet is ${this.petName}`;
    }
}
// Derived class using protected member
class SpecificPet extends BasePet {
    constructor() {
        super('Whiskers');
    }
    // Method using protected name from parent class
    makePetSound() {
        return `${this.petName} says meow meow`;
    }
}
// Creating and using pet instances
const myPet = new SpecificPet();
// console.log(myPet.makePetSound());
// console.log(myPet.introducePet());
// Readonly
class Boomks {
    constructor(name) {
        this.name = name;
    }
    read() {
        return `You should read ${this.name}`;
    }
}
const boomk = new Boomks('hehe boi');
// boomk.name = 'lol'   //Error
// getter and setter
class Total {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get all() {
        return this.width * this.height;
    }
    set idk(idk) {
        this.width = idk.width;
        this.height = idk.height;
    }
}
const total = new Total(3, 5);
// console.log(total.all);
total.idk = { width: 4, height: 8 };
// console.log(total.all);
class Calculate {
    static total(tot) {
        return 2 * this.add * tot;
    }
    static minus(mi) {
        return this.add - mi;
    }
}
Calculate.add = 7;
// console.log(Calculate.add);
// console.log(Calculate.total(30));
// console.log(Calculate.minus(30));
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `Employee id ${this.id}, employee name ${this.name}`;
    }
}
const employee = new Employee(69, 'lol');
// console.log(employee.getDetails());
// generics
function greet(value) {
    return value;
}
// console.log(greet<string>('hello tom'));
// generic array
function items(value) {
    return value;
}
// console.log(items<string>(['a', 'b', 'c']));
// generic class
class Data2 {
    constructor(data) {
        this.data2 = data;
    }
    getData() {
        return this.data2;
    }
    setData(data2) {
        this.data2 = data2;
    }
}
const dataHolder1 = new Data2('hello from practice');
// console.log(dataHolder1.getData());
dataHolder1.setData('update in practice');
// console.log(dataHolder1.getData());
// numeric enum
var Days;
(function (Days) {
    Days[Days["Day1"] = 1] = "Day1";
    Days[Days["Day2"] = 2] = "Day2";
    Days[Days["Day3"] = 3] = "Day3";
})(Days || (Days = {}));
// console.log(Days.Day2);
// string enum
var Colors3;
(function (Colors3) {
    Colors3["Black"] = "BLACK";
    Colors3["Gray"] = "GRAY";
    Colors3["Pink"] = "PINK";
})(Colors3 || (Colors3 = {}));
// console.log(Colors3.Gray);
// typeof
function subtract(value) {
    if (typeof value === 'number') {
        return value - 4;
    }
    else {
        return parseInt(value);
    }
}
// console.log(subtract(6));
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
function aboutF(flower) {
    if (flower instanceof Rose) {
        return flower.look();
    }
    else {
        return flower.smell();
    }
}
const rose = new Rose();
// console.log(aboutF(rose));
var Access;
(function (Access) {
    Access["cow"] = "Cow";
    Access["cat"] = "Cat";
    Access["crow"] = "Crow";
})(Access || (Access = {}));
function animalCall(call) {
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
function countAll(item) {
    if (item.length) {
        return console.log(`total length is ${item.length}`);
    }
    else {
        return console.log(`total string is ${item.count}`);
    }
}
countAll('string');
countAll([1, 2, 3]);
// keyof with generics
function fName(obj, key) {
    return obj[key];
}
const pName = { id: 3, name: 'User3' };
// class decorator
function CountAll(toys) {
    console.log(`new ${toys.name} is created`);
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
// property decorator
function Checker(target, propertyKey) {
    console.log(`checking ${propertyKey}`);
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
// method decorator
function MinusLogger(target, propertyKey, descriptor) {
    console.log(`Minus method ${propertyKey}`);
}
class Minus {
    minus(a, b) {
        return a - b;
    }
}
__decorate([
    MinusLogger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Minus.prototype, "minus", null);
const totalMinus = new Minus();
console.log(totalMinus.minus(10, 3));
