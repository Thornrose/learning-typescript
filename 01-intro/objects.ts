
// basic object format example
// objects not typically defined like this, rather they come from function return values
const user = {
  name: "cheever",
  email: "ames@e.email",
  isActive: true
}

// defining exactly what the arguments must look like within object
function createUser({name: string, isPaid: boolean}) {}

// however, notice now if you create an object as a variable, it can "sneak through" the function with undeclared pairs
let newUser = {name: "cheever", isPaid: false, email: "ca@ca.ca"};
createUser(newUser); // see type aliases below for way to handle this

// same as above but for return values. can technbically use empty {} or [] if contents unknown?
function createCourse(): {name: string, price: number} {
  return {name: "a cool course", price: 15.99}
}

// type aliases
type User = {
  name: string;
  email: string;
  isActive: boolean
}

// type aliases make function definitions cleaner
function createBetterUser(user: User): User {
  return {name: "", email: "", isActive: true}
}

// will complain if you don't follow the format
createBetterUser({name: "", email: "", isActive: true});


// readonly keyword, optional ? marker
type UserTwo = {
  readonly _id: string
  name: string
  email: string;
  isActive: boolean;
  cardDetails?: number // ? indicates property is optional
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  carddate: string
}

// combining types to make new type
type cardDetails = cardNumber & cardDate & {
  cvv: number
}

let myCard: cardDetails = {
  cardnumber: "12121",
  carddate: "121291",
  cvv: 123
}

let myUser: UserTwo = {
  _id: "1232",
  name: "CA",
  email: "c@c.ca",
  isActive: false
}

myUser.email = "Ca@a.ac";

// because property was declared as read only, it cannot be changed later
// still another case where once compiled, javascript will do it anyway:
// myUser._id = "ohhh";

export {}