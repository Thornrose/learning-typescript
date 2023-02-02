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

### 'any' keyword
- documentation is nice about it, but "any" is a way to avoid typechecking. it is not a type itself.
- you usually want to avoid using `any`
- using `noImplicitAny` (in config?) "to flag any implicit `any` as an error."

## New keywords
- union
- interface

## Notes

- when you want to "run" the typescript, use command `tsc` will generate corresponding JS file.
  - if you use `let` (or `const`?) in TS, the JS file it creates will be written as `var`, i wonder if there is a config option about that

- closing vscode and opening again, you may not see the same TS errors? weird behaviour there.

- typescript main website has a playground where youcan test code - settings / TS Config available here as well 