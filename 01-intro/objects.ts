
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

export {}