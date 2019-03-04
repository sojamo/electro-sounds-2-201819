# Electro Sounds: Basics

This section briefly describes fundamental coding concepts. All examples and assignments are based on one or more of these concepts. It is essential that students understand, practice and internalise these concepts. Code snippets and examples given in the following are written in JavaScript.


## Code Basics

  - Variables
  - Functions (Blocks, Scope)
  - Conditionals
  - Loops
  - Arrays
  - Objects
  - Data

### Variables

Variables are the backbone of many computer programs. In computer programming, a variable is a location and a symbolic name containing a value. This means that information can be stored in a variable, which can be accessed at other points in the program.


``` javascript
let symbolicName = value
```

``` javascript
let val = 10 // declare a variable with symbolic name val
val = 11 // change the value of variable val
```

variables in javascript are prefixed with _var_, _let_ or _const_ when declared, you can read up on the different use cases here [^1], [^2]. Preferably _let_ and _const_ are used over _var_ however a JavaScript ES6 or higher implementation is required (which is the case for most latest modern browsers).

A variable can be of global or local scope. A global variable is a variable declared in the main body of your code, outside all functions or objects. A local variable is limited in scope to the function, block, statement or expression on which it is used.

Variables declared by _let_ or _const_ have as their scope the block in which they are defined, as well as in any contained sub-blocks. In this way, _let_ and _const_ work very much like _var_. (The main difference is that the scope of a _var_ variable is the entire enclosing function. [^3])

``` javascript
// global scope
let global = 0

function fn() {
  global = 1
}

console.log(global) // prints 1
```

``` javascript
// local scope
function fn() {
  let local = 0
  local = 1
  console.log(local) // prints 1
}

console.log(local) // error, local is not defined
```

``` javascript
// constant, value can't be changed after declaration
function fn() {
  const c = 0
  c = 1 // error, not allowed
  console.log(c)
}
```

``` javascript
// local before global
let i = 0
function fn() {
  for(let i=0;i<10;i++) {
		// assigns 0 to 9 to local variable i
		// then prints i
    console.log(i)
  }
}
```

### Assignments
To "assign" a variable means to symbolically associate a specific piece of information with a name. Any operations that are applied to this "name" (or variable) must hold true for any possible values. The assignment operator is the equals sign which should never be used for equality, which is the double equals sign. [link](https://www.cs.utah.edu/~germain/PPS/Topics/assignment_statement.html)

```JavaScript
let a = 1
a = 2
console.log("value of a is", a)
```

When working with numbers, the following syntax can be use.

```JavaScript
// we assume a is a number and we add 1 to it.
a = a + 1
```
instead you can also use the following syntax

```JavaScript
a += 2 // addition: is the equivalent to a = a + 2
a -= 2 // subtraction: is the equivalent to a = a - 2
a *= 2 // multiplication: is the equivalent to a = a * 2
a /= 2 // division: is the equivalent to a = a / 2
```

## Functions

A function in programming is a block of code that performs some operation and may or may not return a value. Functions have inputs and outputs. An output is present when the function returns a value. Inputs are called arguments or parameters, they are used to pass external values to a function.

In the first example a function is defined, this functions has not inputs nor outputs, when called (invoked), the function will perform a task, it will print Hello World into the console.

```JavaScript
function fn() {
  console.log("Hello World.")
}
// calling function fn() will
// print Hello World into the console.
fn()
```

Next, we define a function with 2 input arguments: theArg1 and theArg2, for the function to perform its task (adding both arguments together), we expect the arguments to be numbers.

```JavaScript
function add(theArg1, theArg2) {
  let result = theArg1 + theArg2
  console.log(result)
}
add(2,3)
```

```JavaScript
function add(theArg1, theArg2) {
  let result = theArg1 + theArg2
  return result
}
let val = add(2,3)
console.log(val)
```


## Conditional Statements

Conditional statements give you the ability to control the flow of your program, letting it make decisions on what code to execute. The if statement allows you to control if a program enters a section of code or not based on whether a given condition is true or false. One of the important functions of the if statement is that it allows the program to select an action based upon the user's input. For example, by using an if statement to check a user-entered password, your program can decide whether a user is allowed access to the program. [link](https://www.cprogramming.com/tutorial/c/lesson2.html)

### if

```JavaScript
var n = 0
if(n == 0) {
  console.log('condition is true')
}
```

### if-else

```JavaScript
var n = 1
if(n == 0) {
  console.log('condition is true')
} else {
  console.log('condition is false')
}
```

### if-else if-else

```JavaScript
var n = 1
if(n == 0) {
  console.log('n is 1, so condition is false')
} else if (n == 1) {
  console.log('n is 1, so condition is true')
} else {
  console.log('in case n is a number other than 0 or 1, else will be called')
}
```

### Operators

```JavaScript
>     greater than              5 > 4 is TRUE
<     less than                 4 < 5 is TRUE
>=    greater than or equal     4 >= 4 is TRUE
<=    less than or equal        3 <= 4 is TRUE
==    equal to                  5 == 5 is TRUE
!=    not equal to              5 != 4 is TRUE
&&	  logical AND               a==1 && b==2 is TRUE if a=1 and b=2
||    logical OR                a==1 || b==2 is TRUE if a=1 or b=2
```

## Loops

A loop is a sequence of instructions that is continuously repeated until a condition is reached. Often a loop counts up from 0 to a higher number and increases by 1 for each iteration. Loops 'can be nested, a loop within a loop.

```JavaScript
for(let i=0; i<10; i++) {
  console.log("looping, index is",i)
}
```

When executing the loop above, the command (instruction) console.log() is called 10 times and "looping, index is" followed by the value if i is repeatedly printed into the console.

```JavaScript
for(let i=0; i<8; i++) {
  for(let j=0; j<8; j++) {
  push()
  let x = i * 50
  let y = j * 50
  rect(x, y, 40, 40)
  pop()
  }
}
```

The above loop is a nested loop, when executed it renders a grid of 64 tiles, 8 rows and 8 columns.

## Arrays

## Objects

## Data


## Links

  - [p5js](https://p5js.org/) is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.
  - [Introduction to p5.js tutorial](https://www.youtube.com/watch?v=8j0UDiN7my4&vl=en) by Daniel Shiffman, the Coding Train and many more tutorials from the [channel](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw).
  - [Three.js](https://threejs.org) is a cross-browser JavaScript library/API used to create and display animated 3D computer graphics in a web browser. Three.js uses WebGL.
  - [Codepen](https://codepen.io) CodePen is a social development environment for front-end designers and developers [1](https://github.com/nucliweb/People-You-Should-Follow-on-CodePen)
  - [Glitch](https://glitch.com) is the friendly community where you'll build the app of your dreams
  - [Shadertoy](https://www.shadertoy.com) build and share your best shaders with the world
  - [A-frame](https://aframe.io) is a web framework for building virtual reality experiences
  - [Tone.js](https://tonejs.github.io) is a framework for creating interactive music in the browser
  - [p5jsart](https://twitter.com/p5jsart) twitter feed
  - [open processing](https://www.openprocessing.org/) create, fork and explore interactive sketches in p5js
  - [Book of Shaders](https://thebookofshaders.com) is a gentle step-by-step guide through the abstract and complex universe of Fragment Shaders
