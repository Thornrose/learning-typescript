"use strict";
exports.__esModule = true;
// this is fine but what if we want specific types at specific indices?
var user = ["chee", 1];
// tuple syntax: limits not only types but acceptable length of array. [2, "cheever"] would be unacceptable
var userTwo = ["cheever", 2];
// can use optionals here as well
var rgb = [255, 111, 112];
var newUser = [144, "ca@ca.ca"];
//newUser[1] = 3; cn't change types, but CAN change values 
newUser[1] = "no more email";
// pushes like this may not always be caught? 
newUser.push(true); // should be invalid
