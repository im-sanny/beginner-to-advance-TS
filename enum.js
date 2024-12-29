"use strict";
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Pending"] = 3] = "Pending";
})(Status || (Status = {}));
console.log(Status.Pending);
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
console.log(Colors.Blue);
