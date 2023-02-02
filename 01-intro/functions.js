"use strict";
exports.__esModule = true;
function addTwo(num) {
    // return num + 2
    return "hello!";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    // no shortcut for defining types of multiple inputs?
    // tried using [] and that has some effect, but not sure yet. Likely more later
}
var loginUser = function (name, email, isPaid) {
    // provide default value for optional parameter
    // will generate a new line in js file!
    if (isPaid === void 0) { isPaid = true; }
};
var myValue = addTwo(5); // example of how function return value can still cause problems, more on this topic to come!
getUpper('hi');
signUpUser('Cheever', 'chee@e.e', 'pw', true);
loginUser("CA", "CA@CA.CA");
// return values
function addThree(num) {
    // return "hello" // will get an error!
    return num + 3;
}
var otherValue = addThree(2);
// better way to write funcs
// utilizing UNION type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
// syntax for declaring return val type on arrow function. will throw error if no return value is provided
var getHello = function (s) {
    return "";
};
