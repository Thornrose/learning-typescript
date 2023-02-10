// looking back at type aliases, similar structure:
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean
// }


interface User {
  readonly _dbId: number
  email: string,
  userId: number,
  googleId?: number,
  //interfaces get interesting with functions:
  // startTrial: () => string
  // other syntax: note that with either of these, the way to method is later defined is the same
  startTrial(): string,
  getCoupon(couponname: string): number
}

const cheever: User = {
  email: "c@c.c",
  userId: 1111,
  _dbId: 5,
  startTrial: () => {
    return "trial started"
  },
  getCoupon: () => {
    return 10
  }
}

// will give error if not given correct # of args.
//cheever.getCoupon()



export {}