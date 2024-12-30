function double(value: string | number): number {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return parseInt(value) * 2;
  }
}
console.log(double(20));


// instanceof
class Tiger {
  roar() {
    return 'roarrrr';
  }
}

class Goat {
  call() {
    return 'maa maa';
  }
}

function animal2(animal2: Tiger | Goat) {
  if (animal2 instanceof Tiger) {
    return animal2.roar();
  } else {
    return animal2.call();
  }
}

const tiger = new Tiger();
console.log(animal2(tiger));
