"use strict";
exports.__esModule = true;
// basic object format example
// objects not typically defined like this, rather they come from function return values
var user = {
    name: "cheever",
    email: "ames@e.email",
    isActive: true
};
// defining exactly what the arguments must look like within object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// however, notice now if you create an object as a variable, it can "sneak through" the function with undeclared pairs
var newUser = { name: "cheever", isPaid: false, email: "ca@ca.ca" };
createUser(newUser); // see type aliases below for way to handle this
// same as above but for return values. can technbically use empty {} or [] if contents unknown?
function createCourse() {
    return { name: "a cool course", price: 15.99 };
}
// type aliases make function definitions cleaner
function createBetterUser(user) {
    return { name: "", email: "", isActive: true };
}
// will complain if you don't follow the format
createBetterUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1232",
    name: "CA",
    email: "c@c.ca",
    isActive: false
};
myUser.email = "Ca@a.ac";
// because property was declared as read only, it cannot be changed later
// still another case where once compiled, javascript will do it anyway
myUser._id = "ohhh";
