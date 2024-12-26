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
