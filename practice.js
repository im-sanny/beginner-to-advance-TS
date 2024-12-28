"use strict";
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
console.log(describeVehicle(electricVehicle));
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
console.log(continentDetails.describeContinentFavorite());
console.log(continentDetails.getTotalCountries());
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
console.log(myPet.makePetSound());
console.log(myPet.introducePet());
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
console.log(total.all);
total.idk = { width: 4, height: 8 };
console.log(total.all);
