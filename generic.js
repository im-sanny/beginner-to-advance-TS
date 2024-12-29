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
// console.log(dataHolder.getData());
// dataHolder.setData('lets update');
// console.log(dataHolder.getData());
