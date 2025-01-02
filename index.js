"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
// console.log(Stat.Inactive);
// string enum
var Color;
(function (Color) {
    Color["White"] = "WHITE";
    Color["Orange"] = "ORANGE";
    Color["Yellow"] = "YELLOW";
})(Color || (Color = {}));
// console.log(Color.Yellow);
// typeof
function add(value) {
    if (typeof value === 'number') {
        return 2 + value;
    }
    else {
        return parseInt(value + 4);
    }
}
// console.log(add(1));
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
// console.log(getSound(cat));
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
function measure(item) {
    console.log(`measured length is ${item.length}`);
}
measure('item');
measure([1, 2, 3]);
// keyof with generics
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: 'Zari' };
// class decorator
// Think of it like a security camera system in a store:
function SecurityCamera(store) {
    console.log(`Monitoring: ${store.name}`);
}
// Put security cameras in the store
let GroceryStore = (() => {
    let _classDecorators = [SecurityCamera];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var GroceryStore = _classThis = class {
        constructor(name) {
            this.name = name;
        }
    };
    __setFunctionName(_classThis, "GroceryStore");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GroceryStore = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GroceryStore = _classThis;
})();
// When store opens, security system activates automatically
const myStore = new GroceryStore('Walmart');
