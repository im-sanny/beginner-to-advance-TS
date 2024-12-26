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
class Continent {
    constructor(name, country) {
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
console.log(favContinent.name);
