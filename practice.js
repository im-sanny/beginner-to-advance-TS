"use strict";
function describeCar(car) {
    return `lol is a ${car.name}, model ${car.model}, year ${car.year}`;
}
const myCar = {
    name: 'Tesla',
    model: 'Model 3',
    year: 2023,
};
console.log(describeCar(myCar));
