"use strict";
// generic function
function inside(value) {
    return value;
}
// console.log(inside<string>('hello hi lol'));
// generic array
function getItems(items) {
    return items;
}
// console.log(getItems<number>([1, 2, 3]));
// console.log(getItems<string>(['Hi from array']));
// generic class
class Data1 {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(_data) {
        this._data = _data;
    }
}
const dataHolder = new Data1('hi from generic class');
function logLength(item) {
    // console.log(`Length ${item.length}`);
}
logLength('hello form length function');
logLength([1, 2, 3]);
// keyof with generics
function holdProperty(obj, key) {
    return obj[key];
}
const user1 = { id: 2, name: 'User2' };
