interface Car {
  name: string;
  model: string;
  year: number;
  isElectric?: boolean;
}

function describeCar(car: Car): string {
  return `This is my ${car.name}, model ${car.model}, year ${car.year}`;
}

const myCar: Car = {
  name: 'Tesla',
  model: 'Model 3',
  year: 2023,
};

console.log(describeCar(myCar));
