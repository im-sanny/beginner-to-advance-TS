function Logger(constructor: Function) {
  console.log(`Logging class: ${constructor.name}`);
}
@Logger
class Truck {
  constructor(public brand: string) {}
}
const truck = new Truck('cyberTruck');

// property decorator
function Log(target: any, propertyKey: string) {
  console.log(`someone accessed ${propertyKey}`);
}
class User4 {
  @Log
  title: string = 'keep it up';
}

// method decorator
function SquareLogger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Square method ${propertyKey}`);
}
class Square {
  @SquareLogger
  square(a: number, b: number) {
    return a * b;
  }
}
const calcSquare = new Square();
console.log(calcSquare.square(70, 62));
