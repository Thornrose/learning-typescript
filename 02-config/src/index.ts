// when setting up constructor, need to pre-declare types of anything passed to constructor
class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

const cheever = new User("a@a.ca", "cheever");
cheever.city = "Halifax";
// cheever.city = 2 // invalid