// generic function
function inside<T>(value: T): T {
  return value;
}

console.log(inside<string>('hello hi lol'));

// generic array
function getItems<T>(items: T[]): T[] {
  return items;
}
console.log(getItems<number>([1, 2, 3]));
console.log(getItems<string>(['Hi from array']));
 