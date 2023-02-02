"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
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
    if (isPaid === void 0) { isPaid = true; }
};
addTwo(5);
getUpper('hi');
signUpUser('Cheever', 'chee@e.e', 'pw', true);
loginUser("CA", "CA@CA.CA");
