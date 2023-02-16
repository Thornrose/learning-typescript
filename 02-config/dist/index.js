"use strict";
// when setting up constructor, need to pre-declare types of anything passed to constructor
class User {
    constructor(email, name, city) {
        this.city = "";
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const cheever = new User("a@a.ca", "cheever", "Halifax");
// cheever.city // inaccessible
class UserB {
    constructor(email, name, _city) {
        this.email = email;
        this.name = name;
        this._city = _city;
        //protected keyword
        this._courseCount = 1;
        this.isHuman = true;
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    // getter syntax
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter syntax
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Must have at least 1 course");
        }
        this._courseCount = courseNum;
        // this.deleteToken(); // private methods can only be used inside class definition
    }
}
class SubUser extends UserB {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    // _courseCount is protected so it does transfer, if it were private, following method would be invalid
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const cheeverB = new UserB("a@a.ca", "cheever", "Halifax");
cheeverB.getAppleEmail;
// cheeverB.deleteToken(); // inaccessible outside of class definition
