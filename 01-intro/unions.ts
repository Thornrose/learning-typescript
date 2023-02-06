// union types set using pipe |
let score: string | number | boolean = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number
}

type Admin = {
  username: string;
  id: number
}

// cheever can ever be user OR admin...
let cheever: User | Admin = {name: "Cheever", id: 332}

// ... but once it is given properties of one, TS will be strict on that - can't add properties of the other
cheever = { username: "ca", id: 323}
// cheever.name = "rere"; // invalid property name for type Admin


// function getDbId(id: number | string){
//   // making API calls etc
//   console.log(`DB id is: ${id}`);

// }

// unions are treated by TS as a "new data type" - anything done to it within a function must be possible on either data type
// "union narrowing"
function getDbId(id: number | string){
  // id.toLowerCase() // invalid method for type string | number
  if (typeof id === "string") {
    id.toLowerCase()
  }
  if (typeof id === "number") {
    id.toString()
  }

}

getDbId(3);
getDbId("3");

// unions with arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3", "4"];

// for mixed types in same array it is not:
// const data3: string | number[] = [1, 2, 3, "4"];
// const data3: string[] | number[] = [1, 2, 3, "4"];

// it is:
const data3: (string | number | boolean)[] = [1, 2, true, 3, "4"];

// super strict type declarations
let pi: 3.14 = 3.14;
// pi = 3.14159 // would not be allowed after, not really an actual use case, but here:


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";

// seatAllotment = "crew"; // not allowed after above declaration





export {}