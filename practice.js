"use strict";
function myCar(car) {
    return `car name is ${car.name}, car model ${car.model}, made in ${car.model}`;
}
const cars = {
    name: 'telsa',
    model: '610',
    year: 342,
};
console.log(myCar(cars));
