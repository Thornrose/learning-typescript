function addTwo(num: number) {
  // return num + 2
  return "hello!";

}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){
 // no shortcut for defining types of multiple inputs?
 // tried using [] and that has some effect, but not sure yet. Likely more later
}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {
  // provide default value for optional parameter
  // will generate a new line in js file!

}

let myValue = addTwo(5); // example of how function return value can still cause problems, more on this topic to come!
getUpper('hi')
signUpUser('Cheever', 'chee@e.e', 'pw', true);
loginUser("CA", "CA@CA.CA");

// return values

function addThree(num: number): number {
  // return "hello" // will get an error!
  return num + 3;
}

let otherValue = addThree(2);

// better way to write funcs

// utilizing UNION type
function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true
  }
  return "200 OK"
}

// syntax for declaring return val type on arrow function. will throw error if no return value is provided
const getHello = (s: string): string => {
  return ""
}

// const heroes = ['thor', 'spiderman', 'ironman'];
const heroes = [1, 2, 3];

// defining return value of array method even!
heroes.map((hero): string => {
  return `hero is ${hero}`
})


// void return value
function consoleError(errmsg: string): void{
  console.log(errmsg);

}

// never return value
function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

// type narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase()
  }
  return val + 3; // note that since we already decided what to do when val is string, TS knows that at this point it could only be number
}

export {}