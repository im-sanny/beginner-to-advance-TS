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
// Basic String Type Annotation: Explicitly defining a string variable
let greetingMessage = 'Hello TypeScript';
// Primitive Type Declarations: Strongly typed simple variables
let customerFullName = 'Rasel';
let customerAgeInYears = 24;
let isCustomerCurrentlyEmployed = false;
// Array Type Annotations: Typed arrays with specific element types
let favoriteFruitList = ['mango', 'litchi'];
let productQuantityList = [1, 2, 3, 4];
// Tuple: Fixed-length array with predefined type sequence
let userProfileTuple;
userProfileTuple = ['Rasel', 24, true];
// Union Types: Variables that can hold multiple types
let flexibleValue;
flexibleValue = 'customer name';
flexibleValue = 42;
let productIdentifier = 'PROD001';
productIdentifier = 12345;
let customerProfileObject = {
    fullName: 'Tom Anderson',
    age: 24,
    isUndergraduate: true,
};
// Function with Explicit Type Annotations: Defining input and output types
function calculateSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
// Function with Optional Parameter: Parameter that may or may not be provided
function generateGreetingMessage(name, age) {
    return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`;
}
// Function with Default Parameter: Providing a default value if not specified
function calculateProductValue(baseValue, multiplier = 3) {
    return baseValue * multiplier;
}
// Arrow Function with Type Alias
const performAdditionOperation = (x, y) => x + y;
let userAccountObject = {
    id: 79,
    username: 'tom_tech',
    isAdministrator: true,
    accountCreatedAt: '2023-06-15',
};
// Class: Object-oriented programming construct with type safety
class Person {
    // Constructor: Initializes object properties
    constructor(name, age) {
        this.personName = name;
        this.personAge = age;
    }
    // Method with return type annotation: Describes the person
    describePerson() {
        return `I know ${this.personName}`;
    }
    // Method returning a number: Gets the person's age
    getAge() {
        return this.personAge;
    }
}
// Class Instantiation and Array of Class Type
const individualPerson = new Person('Thomas', 30);
let personArrayList = [];
// console.log(individualPerson.describePerson());
// console.log(personArrayList);
// Access modifier
class Animal {
    constructor(species) {
        this.animalSpecies = species;
    }
    // Method: Makes sound based on species
    makeSound() {
        return `This is a ${this.animalSpecies}`;
    }
}
class Dog extends Animal {
    constructor() {
        super('Dog');
    }
    // Method: Dog barks
    bark() {
        return `${this.animalSpecies} says woof woof`;
    }
}
let dogInstance = new Dog();
// console.log(dogInstance.makeSound());
// console.log(dogInstance.bark());
// readOnly
class Car {
    constructor(brand) {
        this.carBrand = brand;
    }
    // Method: Describes the sound of the car
    makeSound() {
        return `${this.carBrand} produces good cars`;
    }
}
const fordCar = new Car('Ford');
// console.log(fordCar.makeSound());
// console.log(fordCar.carBrand);
// fordCar.carBrand = 'Jaguar' //Error - Cannot assign to 'carBrand' because it is a read-only property
// getter and setter
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getter: Calculates the area of the rectangle
    get area() {
        return this.width * this.height;
    }
    // Setter: Updates the dimensions of the rectangle
    set dimension(dimension) {
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
    // Static Method: Calculates the circumference of a circle
    static calculateCircumference(radius) {
        return 2 * this.PiValue * radius;
    }
}
MathUtility.PiValue = 3.14;
// console.log(MathUtility.PiValue);
// console.log(MathUtility.calculateCircumference(10));
// Generic Function: Returns the same value passed to it
function identity(value) {
    return value;
}
// console.log(identity<string>('hello'));
// Generic Array Function: Returns an array of the same type
function item(value) {
    return value;
}
// console.log(item<number>([1, 2, 3]));
// console.log(item<string>(['a', 'b', 'c', 'd']));
// Generic Class: Holds data of any type
class DataHolder {
    constructor(data) {
        this.dataValue = data;
    }
    // Method: Gets the stored data
    getData() {
        return this.dataValue;
    }
    // Method: Sets new data
    setData(data) {
        this.dataValue = data;
    }
}
const numberDataHolder = new DataHolder(33);
// console.log(numberDataHolder.getData());
numberDataHolder.setData(3333333);
// console.log(numberDataHolder.getData());
// Numeric Enum: Represents different statuses
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Active"] = 1] = "Active";
    StatusEnum[StatusEnum["Inactive"] = 2] = "Inactive";
    StatusEnum[StatusEnum["Pending"] = 3] = "Pending";
})(StatusEnum || (StatusEnum = {}));
// console.log(StatusEnum.Inactive);
// String Enum: Represents different colors
var ColorEnum;
(function (ColorEnum) {
    ColorEnum["White"] = "WHITE";
    ColorEnum["Orange"] = "ORANGE";
    ColorEnum["Yellow"] = "YELLOW";
})(ColorEnum || (ColorEnum = {}));
// console.log(ColorEnum.Yellow);
// Typeof: Adds numbers or parses strings
function add(value) {
    if (typeof value === 'number') {
        return 2 + value;
    }
    else {
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
function getAnimalSound(animal) {
    if (animal instanceof Cat) {
        return animal.meow();
    }
    else {
        return animal.moo();
    }
}
const catInstance = new Cat();
// console.log(getAnimalSound(catInstance));
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["User"] = "User ";
    UserRole["Guest"] = "Guest";
})(UserRole || (UserRole = {}));
// Function: Returns a message based on user role
function getRoleMessage(role) {
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
// Function: Measures the length of an item
function measure(item) {
    console.log(`Measured length is ${item.length}`);
}
measure('item');
measure([1, 2, 3]);
// Keyof with Generics: Gets a property from an object
function getProperty1(obj, key) {
    return obj[key];
}
const userObject = { id: 1, name: 'Zari' };
// Class Decorator: Monitors a class for security
function SecurityCamera(store) {
    console.log(`Monitoring: ${store.name}`);
}
// Applying the security camera decorator to the GroceryStore class
let GroceryStore = class GroceryStore {
    constructor(storeName) {
        this.storeName = storeName;
    }
};
GroceryStore = __decorate([
    SecurityCamera,
    __metadata("design:paramtypes", [String])
], GroceryStore);
// When the store opens, the security system activates automatically
const myGroceryStore = new GroceryStore('Walmart');
// Property Decorator: Logs access to a property
function PropertyLogger(target, propertyKey) {
    console.log(`Accessed property is: ${propertyKey}`);
}
// Class with a property that uses the property logger
class User {
    constructor() {
        this.userName = 'tom';
    }
}
__decorate([
    PropertyLogger,
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
// Method Decorator: Logs method calls
function MethodLogger(target, propertyKey, descriptor) {
    console.log(`Method ${propertyKey} called`);
}
// Class with a method that uses the method logger
class Calculator1 {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    MethodLogger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator1.prototype, "add", null);
const calculatorInstance = new Calculator1();
console.log(calculatorInstance.add(1, 3));
