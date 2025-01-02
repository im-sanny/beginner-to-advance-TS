function Logger(constructor: Function) {
  console.log(`Logging class: ${constructor.name}`);
}
@Logger
class Truck {
  constructor(public brand: string) {}
}
const truck = new Truck('cyberTruck');
