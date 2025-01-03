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
// Class Decorator: Logs the class name when the class is defined
function Logger(classConstructor) {
    console.log(`Logging class: ${classConstructor.name}`);
}
// Applying the Logger decorator to the Truck class
let Truck = class Truck {
    constructor(truckBrand) {
        this.truckBrand = truckBrand;
    }
};
Truck = __decorate([
    Logger,
    __metadata("design:paramtypes", [String])
], Truck);
const electricTruck = new Truck('CyberTruck');
// Property Decorator: Logs access to a property
function Log(target, propertyKey) {
    console.log(`Someone accessed property: ${propertyKey}`);
}
// Class with a property that uses the Log decorator
class UserProfile {
    constructor() {
        this.userTitle = 'Keep it up';
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], UserProfile.prototype, "userTitle", void 0);
// Method Decorator: Logs when a method is called
function SquareLogger(target, propertyKey, descriptor) {
    console.log(`Square method called: ${propertyKey}`);
}
// Class with a method that uses the SquareLogger decorator
class Square {
    calculateSquare(a, b) {
        return a * b;
    }
}
__decorate([
    SquareLogger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Square.prototype, "calculateSquare", null);
const squareCalculator = new Square();
console.log(squareCalculator.calculateSquare(70, 62));
