"use strict";
// Generic function: Returns the value passed to it
function inside(value) {
    return value;
}
// console.log(inside<string>('hello hi lol'));
// Generic array function: Returns an array of the same type
function getItems(items) {
    return items;
}
// console.log(getItems<number>([1, 2, 3]));
// console.log(getItems<string>(['Hi from array']));
// Generic class: Holds data of any type with getter and setter
class DataHolder2 {
    constructor(data) {
        this._data = data;
    }
    // Method to get the stored data
    getData() {
        return this._data;
    }
    // Method to set new data
    setData(newData) {
        this._data = newData;
    }
}
const dataHolder = new DataHolder('hi from generic class');
// Function to log the length of an item
function logLength(item) {
    // console.log(`Length: ${item.length}`);
}
logLength('hello from length function');
logLength([1, 2, 3]);
// Keyof with generics: Function to get a property from an object
function holdProperty(obj, key) {
    return obj[key];
}
const user1 = { id: 2, name: 'User 2' };
