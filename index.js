"use strict";
let message = 'Hello TS';
// console.log(message);
let firstName = 'Rasel';
let age = 24;
let isEmployed = false;
let fruits = ['mango', 'litchi'];
let numbers = [1, 2, 3, 4];
// tuples
let user;
user = ['Rasel', 24, true];
// unions
let value;
value = 'name';
value = 24;
let userId = 'Tom';
userId = 234;
let person = {
    name: 'Tom',
    age: 24,
    isStudent: true,
};
// console.log(`Hi I am ${person.name}, I am ${person.age} year old`);
function add(a, b) {
    return a + b;
}
// console.log(add(3, 5));
function greet(name, age) {
    if (age) {
        return `${name}, ${age}`;
    }
    return `hello ${name}`;
}
console.log(greet('tom'));
console.log(greet('tommy', 45));