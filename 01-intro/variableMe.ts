let greetings: string = 'Hello Cheever';
let myNum: number;
greetings.toUpperCase()
console.log(greetings);

// number type

let userId: number;
userId = 334455.5; // not best practice

let otherId = 445566.2; // better practice: type inference
// otherId = "string" // TS will still give errors 

// boolean type

let isLoggedIn: boolean = false;

// any keyword

let hero; // no type and no value given - inferred as ANY type. basically wasting the functionality of TS

let heroTwo: string;

function getHero(){
  return "Hulk" // could return anything
}

hero = getHero();

heroTwo = getHero(); // won't work if not returned a string!


export {}