// this is fine but what if we want specific types at specific indices?
const user: (string | number)[] = ["chee", 1];

// tuple syntax: limits not only types but acceptable length of array. [2, "cheever"] would be unacceptable
const userTwo: [string, number] = ["cheever", 2];

// can use optionals here as well
let rgb: [number, number, number, number?] = [255, 111, 112];

type User = [number, string];

const newUser: User = [144, "ca@ca.ca"];

//newUser[1] = 3; cn't change types, but CAN change values 
newUser[1] = "no more email";

// pushes like this may not always be caught? 
// newUser.push(true); // should be invalid


// ENUMS

// example of having choices:
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AISLE) {
//   // ...
// }

// enums provide a good restricted multiple choice.
// default values for below act like array indexes, based on value of first - auto incrementing 
// if you set first val as string, it does break the rest - until you go back to numbers
enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
  EMERGENCY = 0
}

const hcSeat = SeatChoice.WINDOW



export {}