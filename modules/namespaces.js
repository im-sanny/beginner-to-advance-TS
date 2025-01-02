"use strict";
var Util;
(function (Util) {
    function greet(name) {
        return `hello ${name}!`;
    }
    Util.greet = greet;
})(Util || (Util = {}));
console.log(Util.greet('Jerry'));
