// setting array types with generics
const score: Array<number> = [];
const names: Array<string> = [];

// "identity function" example from docs
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// example using any, which we don't want to do - we lose info for return value
function identityTwo(val: any): any {
  return val
}


// here we use generics, so it acts similar to any, but in this case, the type for val is "locked in"
// we get the type information FROM the argument passed to the parameter
// similarly to previous examples, can not use specific type methods 
function identityThree<Type>(val: Type): Type {
  return val;
  
}

identityThree(3);
identityThree(true);
identityThree("hello");

// more common syntax: shorthand with capital letters

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  style: number;
}

// this is where we can actually see it in action. when we CALL the method we can say what we want return value to be.
// identityFour<number>("4") // invalid
// identityFour<Bottle>({}) // requires object that matches type of Bottle 

// with array types
function searchProducts<T>(products: T[]): T {
  // do some work on products array
  const myIndex = 0;
  return products[myIndex];
}

// with arrow function syntax: common to have comma , after T to specify it is generic and not a html tag
const searchMoreProducts = <T,>(products: T[]): T => {
  const myIndex = 0;
  return products[myIndex];
}

// using type params in generic constraints

interface Database {
  connection: string;
  username: string;
  password: string
}


// can put multiple types in <>
const anotherFunc = <T, U extends Database>(valOne:T, valTwo:U): object => {
  return {
    valOne,
    valTwo
  }
}

const db: Database = {
  connection: "conn",
  username: "uname",
  password: "pass"
}

anotherFunc(3, db);


// using generics for class creation
interface Quiz {
  name: string,
  style: string
}

interface Course {
name: string;
author: string;
subject: string

}

class ForSale<T> {
  public cart: T[] = [];

  addToCart(product: T){
    this.cart.push(product);
  }
}
// ...? feel like this could have gone further