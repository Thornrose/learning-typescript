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

// reopening - usually done if interface is coming from different file, for example

interface User {
  githubToken: string
}

// extends keyword - inheritance
interface Admin extends User {
  role: "admin" | "ta" | "student"
}

const cheever: Admin = {
  email: "c@c.c",
  userId: 1111,
  _dbId: 5,
  githubToken: "github",
  role: "admin",
  startTrial: () => {
    return "trial started"
  },
  getCoupon: () => {
    return 10
  }
}

// will give error if not given correct # of args.
//cheever.getCoupon()


// in operator narrowing
interface UserB {
  name: string
}

interface AdminB {
  name: string;
  isAdmin: boolean
}

function checkAdmin(account: UserB | AdminB) {
  if ("isAdmin" in account) {
    return account.isAdmin
  }
}
// this is typescript making use of the existing in operator from JS

export {}