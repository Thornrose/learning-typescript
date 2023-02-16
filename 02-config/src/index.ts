// when setting up constructor, need to pre-declare types of anything passed to constructor
class User {
  email: string;
  name: string;
  private readonly city: string = "";
  constructor(email: string, name: string, city: string){
    this.email = email;
    this.name = name;
    this.city = city
  }
}

const cheever = new User("a@a.ca", "cheever", "Halifax");
// cheever.city // inaccessible

class UserB {
  //protected keyword
  protected _courseCount = 1;

  readonly isHuman: boolean = true;

  constructor(
    public email: string, 
    public name: string, 
    private readonly _city: string
    ){

  }
  // private method
  private deleteToken(){
    console.log("Token deleted");
  }

  // getter syntax
  get getAppleEmail(): string{
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // setter syntax
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Must have at least 1 course");
    }
    this._courseCount = courseNum;
    // this.deleteToken(); // private methods can only be used inside class definition

  }



}

class SubUser extends UserB {
  isFamily: boolean = true;

  // _courseCount is protected so it does transfer, if it were private, following method would be invalid
  changeCourseCount(){
    this._courseCount = 4
  }
}

const cheeverB = new UserB("a@a.ca", "cheever", "Halifax");

cheeverB.getAppleEmail;

// cheeverB.deleteToken(); // inaccessible outside of class definition

