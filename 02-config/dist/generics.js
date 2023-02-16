"use strict";
// setting array types with generics
const score = [];
const names = [];
// "identity function" example from docs
function identityOne(val) {
    return val;
}
// example using any, which we don't want to do - we lose info for return value
function identityTwo(val) {
    return val;
}
// here we use generics, so it acts similar to any, but in this case, the type for val is "locked in"
// we get the type information FROM the argument passed to the parameter
// similarly to previous examples, can not use specific type methods 
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree(true);
identityThree("hello");
// more common syntax: shorthand with capital letters
function identityFour(val) {
    return val;
}
// this is where we can actually see it in action. when we CALL the method we can say what we want return value to be.
// identityFour<number>("4") // invalid
// identityFour<Bottle>({}) // requires object that matches type of Bottle 
