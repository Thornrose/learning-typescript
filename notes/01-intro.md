# Gettting started with Typescript

- A `superset` of Javascript - write in a precise manner
- always compiled / converted (`transpiled`) into javascript
- not about "reinventing" javascript, just writing with a certain behaviour
- about `Type Safety`
  - in raw JS, you are able to do something like:
  ``` js
  2 + '2'
  = '22'
  ```
  this is not type safe behaviour. TS would not allow this

### what typescript IS / IS NOT
- not a new programming language
- TS does `Static Checking`
- literally the main job is to analyze the code as we type
- because TS is compiled to JS, you could run it even if it shows errors and it might still work
- in TS you will write MORE code than with raw js
- writing in `.ts`, `.tsx` is the React counterpart
- TS is a **development tool** - project still runs in JS. TS is a **wrapper** around JS

### Installing Typescript

- two levels of installation:
  - first is global. helpful for learning etc
  - second is in projects: need to have a typescript config file
- global install easy - done!

### TS Config
- mainly used when running an actual project - diving into this later

## Types

- Number, String, Boolean
- Null, Undefined, Void
- Object, Array, Tuples, and many more...
- Any (usually bad), Never, unknown

### Quick look into documentation: Everyday Types
- Objects can have optional properties defined using `?`
- Union types: specify if something can be of multiple types using `|`
  - "TypeScript will only allow an operation if it is valid for *every* member of the union. For example, if you have the union `string | number`, you can’t use methods that are only available on `string`"
- Literal types: you can actually assign a string / number / etc *as* a type - not often valuable though
- Interface syntax seems a bit like class syntax but for defining object key types. can also use `type =` , but interface can be cleaner and more versatile
- TS should also notice if you try to use a method on something and even if it's a valid method in JS, if it's onan incompatible type, it will tell you
- Number: no specificity between int/float, it's all number

## Situations
- a function accepts 2 numbers: in regular JS, you might accidentally concatenate a number with a string (2 + '2' = 22). TS pre-checks the types to make sure it will be numbers coming in.
  - think about this in terms of error handling: you should not NEED to handle certain errors because TS is setting you up for success every time
- a function returns a string: similar as above. Making sure working with team, things get easier

## Basic syntax

``` ts
const variableName: type = value;
```
- declare type after `:`
- ` = value` is optional

However, best practice for primitive types (number, string, boolean) tends to be using `type inference`:
``` ts
let userID = 123232.22;
```
Seems familiar right? It's basic javascript - but later on if you try to assign this a non-number value, TS will give you errors

- another note: is `;` at the end of lines still best practice? I feel like it is

### 'any' keyword
- documentation is nice about it, but "any" is a way to avoid typechecking. it is not a type itself.
- you usually want to avoid using `any`
- using `noImplicitAny` (in config?) "to flag any implicit `any` as an error."

## Functions
- always define types for variables passed to functions
- seems like return value is inferred? UPDATE: it is, but there's more to it if you want to typecheck return values
- as anticipated, `let/const` changing to `var` CAN be addressed in config

return values: syntax for declaring function return value type is as follows:

``` ts
function addThree(num: number): number {
  // return "hello" // will get an error!
  return num + 3;
}
```
in function declaration, this will give an error on the `return` line if the value being returned is of invalid type. it will NOT show errors in places where the function is being used. which makes sense, it's cathing it here so it essentially is stopped at the point where it needs to be addressed at the root of the problem.

It is best practice that if the function will *not* have a return value, you explicitly delare the return value as `: void`.

another situation (example given with error handing) is the `never` keyword - the function will never return a value, because when that function runs it will throw an error/intentional crash. more info in docs:
- "The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program."

you can also do something like this with pre-existing methods, like Array.map for example:

``` ts
const heroes = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`
})
```
here, while the type of `hero` can be pulled from the array, you still want to declare the type for the return values.

## Type Aliases
- for objects, this seems like a common and powerful took, where you can create objects / define types that follow a certain format. Like a variable but only holding type definitions.

``` ts
type User = {
  name: string;
  email: string;
  isActive: boolean
}
```
there are examples of how it is "legal to do something like `type str = string` where you simply create a new name of a type and assign it to a pre-existing type - likely not common, could see it being used if you want to write shorthand, but probably more work than it is worth.


### combining types: example

use the `&` symbol to combine types

``` ts
type cardNumber = {
  cardnumber: string
}

type cardDate = {
  carddate: string
}

// combining types to make new type
type cardDetails = cardNumber & cardDate & {
  cvv: number
}
```

## optional & readonly properties in objects

take a look at this object: 
``` ts
type UserTwo = {
  readonly _id: string
  name: string
  email: string;
  isActive: boolean;
  cardDetails?: number
}
```
- the `readonly` keyword before `_id` indicates that after the initial value for _id is declared, it can never be changed
- the `?` after `cardDetails` indicates that this object could be created without this property - it is optional

## Arrays

documentation is simple enough but says a lot:

> "To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[];` this syntax works for any type (e.g. `string[]` is an array of strings, and so on). You may also see this written as `Array<number>`, which means the same thing."

## Union type

defined as one of multiple types - still preferrable over "any"

## Tuples
- type of specialized array

## Enums
- used to set specific values within a parameter - another type of object notation? 
- checking how it is compiled to js is very interesting - sets up an IIFE (see notes below)
- by prepending `enum` with `const` will not generate any code 

## Interface

## Notes

- when you want to "run" the typescript, use command `tsc` will generate corresponding JS file.
  - if you use `let` (or `const`?) in TS, the JS file it creates will be written as `var`, i wonder if there is a config option about that? UPDATE: yes, there is

- closing vscode and opening again, you may not see the same TS errors? weird behaviour there. UPDATE: adding `export {}` to the end of a file has nut been explained yet, but makes error lines more consistent?

- typescript main website has a playground where youcan test code - settings / TS Config available here as well 

- new concept: **IIFE** (Immediately Invoked Function Expression)
  - runs as soon as defined, so don't have to call later.
  - design pattern
  - aka "Self-Executing Anonymous Function" - maybe we have seen this before
  - useful to avoid polluting global namespace, execute async functions, creating private and public variables and methods. good example on MDN