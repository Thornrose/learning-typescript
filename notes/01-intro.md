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

## what typescript IS / IS NOT
- not a new programming language
- TS does `Static Checking`
- literally the main job is to analyze the code as we type
- because TS is compiled to JS, you could run it even if it shows errors and it might still work
- in TS you will write MORE code than with raw js
- writing in `.ts`, `.tsx` is the React counterpart
- TS is a **development tool** - project still runs in JS. TS is a **wrapper** around JS

## Installing Typescript

- two levels of installation:
  - first is global. helpful for learning etc
  - second is in projects: need to have a typescript config file
- global install easy - done!

## new keywords
- union
- interface

## Notes

- when you run tsc, 