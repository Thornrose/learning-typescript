"use strict";
exports.__esModule = true;
// union types set using pipe |
var score = 33;
score = 44;
score = "55";
// cheever can ever be user OR admin...
var cheever = { name: "Cheever", id: 332 };
// ... but once it is given properties of one, TS will be strict on that - can't add properties of the other
cheever = { username: "ca", id: 323 };
cheever.name = "rere";
