interface Car {
  name: string;
  model: string;
  year: number;
  owner?: string;
}

function myCar(car: Car): string {
  return `car name is ${car.name}, car model ${car.model}, made in ${car.model}`;
}

const cars: Car = {
  name: 'telsa',
  model: '610',
  year: 342,
};

console.log(myCar(cars));

class Continent {
  name: string;
  private country: number;

  constructor(name: string, country: number) {
    this.name = name;
    this.country = country;
  }

  fav() {
    return `My favorite continent is ${this.name}`;
  }
  num() {
    return this.country;
  }
}

const favContinent = new Continent('Europe', 24);
console.log(favContinent.fav());
console.log(favContinent.num());
// console.log(favContinent.country); //Error: Property 'age' is private.
