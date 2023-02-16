// setting it up like this will give us type never[]!
// const superHeroes: [] = [];

// superHeroes.push("spiderman");

// proper syntax:
const superHeroes: string[] = [];
// const heroPower: number[] = [];
// alt syntax using generics:
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
}

// can set as any type, even custom
const allUsers: User[] = [];

// declaring array of arrays?
const MLModels: number[][] = [
  [255, 255, 255],
  [45]
]

superHeroes.push("spiderman");
heroPower.push(2);

allUsers.push({name: "", isActive: true});

export {}
