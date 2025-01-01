"use strict";
// Basic String Type Annotation: Explicitly defining a string variable
let greeting = 'Hello TypeScript';
// Primitive Type Declarations: Strongly typed simple variables
let customerName = 'Rasel';
let customerAge = 24;
let isCustomerEmployed = false;
// Array Type Annotations: Typed arrays with specific element types
let favoriteFruits = ['mango', 'litchi'];
let productQuantities = [1, 2, 3, 4];
// Tuple: Fixed-length array with predefined type sequence
let userProfile;
userProfile = ['Rasel', 24, true];
// Union Types: Variables that can hold multiple types
let dynamicValue;
dynamicValue = 'customer name';
dynamicValue = 42;
let productId = 'PROD001';
productId = 12345;
let customerProfile = {
    fullName: 'Tom Anderson',
    age: 24,
    isUndergraduate: true,
};
// Function with Explicit Type Annotations: Defining input and output types
function calculateSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
// Function with Optional Parameter: Parameter that may or may not be provided
function generateGreeting(name, age) {
    return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`;
}
// Function with Default Parameter: Providing a default value if not specified
function calculateProduct(baseValue, multiplier = 3) {
    return baseValue * multiplier;
}
// Arrow Function with Type Alias
const performAddition = (x, y) => x + y;
let userAccount = {
    id: 79,
    username: 'tom_tech',
    isAdministrator: true,
    accountCreatedAt: '2023-06-15',
};
// Class: Object-oriented programming construct with type safety
class Person {
    // Constructor: Initializes object properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method with return type annotation
    describePerson() {
        return `I know ${this.name}`;
    }
    // Method returning a number
    getAge() {
        return this.age;
    }
}
// Class Instantiation and Array of Class Type
const person = new Person('Thomas', 30);
let personArray = [];
// console.log(person.describePerson());
// console.log(personArray);
// Access modifier
class Animal {
    constructor(species) {
        this.species = species;
    }
    makeSound() {
        return `This is a ${this.species}`;
    }
}
class Dog extends Animal {
    constructor() {
        super('Dog');
    }
    bark() {
        return `${this.species} says woof woof`;
    }
}
let dog = new Dog();
// console.log(dog.makeSound());
// console.log(dog.bark());
// readOnly
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    makeSound() {
        return `${this.brand} produce good car`;
    }
}
const getCar = new Car('Ford');
// console.log(getCar.makeSound());
// console.log(getCar.brand);
// getCar.brand = 'Jaguar' //Error - Cannot assign to 'brand' because it is a read-only property
// getter and setter
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set dimension(dimension) {
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
    static calculateCircumference(radius) {
        return 2 * this.Pi * radius;
    }
}
MathUtil.Pi = 3.14;
// console.log(MathUtil.Pi);
// console.log(MathUtil.calculateCircumference(10));
//generic
function identity(value) {
    return value;
}
// console.log(identity<string>('hello'));
// generic array
function item(value) {
    return value;
}
// console.log(item<number>([1, 2, 3]));
// console.log(item<string>(['a', 'b', 'c', 'd']));
// generic class
class Data {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
const numberHolder = new Data(33);
// console.log(numberHolder.getData());
numberHolder.setData(3333333);
// console.log(numberHolder.getData());
// numeric enum
var Stat;
(function (Stat) {
    Stat[Stat["Active"] = 1] = "Active";
    Stat[Stat["Inactive"] = 2] = "Inactive";
    Stat[Stat["Pending"] = 3] = "Pending";
})(Stat || (Stat = {}));
console.log(Stat.Inactive);
// string enum
var Color;
(function (Color) {
    Color["White"] = "WHITE";
    Color["Orange"] = "ORANGE";
    Color["Yellow"] = "YELLOW";
})(Color || (Color = {}));
console.log(Color.Yellow);
// typeof
function add(value) {
    if (typeof value === 'number') {
        return 2 + value;
    }
    else {
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
function getSound(animal) {
    if (animal instanceof Cat) {
        return animal.meow();
    }
    else {
        return animal.moo();
    }
}
const cat = new Cat();
console.log(getSound(cat));
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function getRoleMessage(role) {
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
