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


export {}