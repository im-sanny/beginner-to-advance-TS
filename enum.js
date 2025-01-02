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
var Users;
(function (Users) {
    Users["Admin"] = "Admin";
    Users["User"] = "User";
    Users["Guest"] = "Guest";
})(Users || (Users = {}));
function messageByRole(user) {
    switch (user) {
        case Users.Admin:
            return 'Welcome! u have admin access';
        case Users.User:
            return 'Welcome u have normal access';
        case Users.Guest:
            return 'Welcome u have guest access';
        default:
            return 'sorry no access for unknown person';
    }
}
console.log(messageByRole(Users.Admin));
