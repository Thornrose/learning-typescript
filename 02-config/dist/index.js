"use strict";
// when setting up constructor, need to pre-declare types of anything passed to constructor
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const cheever = new User("a@a.ca", "cheever");
cheever.city = "Halifax";
// cheever.city = 2 // invalid
