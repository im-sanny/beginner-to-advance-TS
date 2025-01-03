// Class Decorator: Logs the class name when the class is defined
function Logger(classConstructor: Function) {
  console.log(`Logging class: ${classConstructor.name}`);
}

// Applying the Logger decorator to the Truck class
@Logger
class Truck {
  constructor(public truckBrand: string) {}
}

const electricTruck = new Truck('CyberTruck');

// Property Decorator: Logs access to a property
function Log(target: any, propertyKey: string) {
  console.log(`Someone accessed property: ${propertyKey}`);
}

// Class with a property that uses the Log decorator
class UserProfile {
  @Log
  userTitle: string = 'Keep it up';
}

// Method Decorator: Logs when a method is called
function SquareLogger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Square method called: ${propertyKey}`);
}

// Class with a method that uses the SquareLogger decorator
class Square {
  @SquareLogger
  calculateSquare(a: number, b: number) {
    return a * b;
  }
}

const squareCalculator = new Square();
console.log(squareCalculator.calculateSquare(70, 62));
