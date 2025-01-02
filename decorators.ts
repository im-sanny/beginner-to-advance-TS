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
