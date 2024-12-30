"use strict";
function double(value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else {
        return parseInt(value) * 2;
    }
}
console.log(double(20));
