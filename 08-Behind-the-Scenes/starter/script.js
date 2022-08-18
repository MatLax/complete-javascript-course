"use strict";
/*
Java script is:

High-level, i.e. it automates certain functionalities that low-level languages don't. Ex.: in C you have to manually alocate memory for variables.

Garbage-collected, i.e. it automatically cleans the memory of unnecessary objects.

Interpreted/just-in-time compiled, i.e. converted to machine language as required instead of being compiled in advance.

Multi-paradigm, i.e. the code can be structured in multiple ways, procedural, object-oriented, functional programming, it's all compatible.

Prototybe-based object-oriented, i.e. prototypes store all methods applicable to the different objects. Ex.: using .push on an array, the array is an object, .push is a reference to a method determined in the Array prototype.

First-class functions, i.e. fuctions are treated as any other variables, which means we can pass them into other functions or even return them.

Dynamic, i.e. the type of variable can easily be changed as it's determined as the code is read.

Single-threaded, i.e. it does one thing at a time, so it needs a concurrency model to know how to handle multiple tasks happening at the same time.

Non-blocking event loop, i.e. it takes long running tasks and executes them in the background before putting them back in the main thread.

*/

/* JS Engine: Program that executes Javascript code. Ex.: Google V8 that powers Google Chrome and NodeJS.

Call stack: Where the code is executed.

Heap: Where objects are stored in memory.

Compilation vs Interpretation: In compilation the entire code is converted to machine code at once and is executed later (.exe file for example), in interpretation the interpreter runs through the code, converts it to machine code and executes it line by line. Javascript runs a mix of both (Just-in-time compilation), converting the entire code at once and then executing it immediatly.

JIT compilation: Parsing (reading the code into an Abstract Syntax Tree), the AST is then compiled into machine code and then the compiled code is executed right away. As the code is running there's an automatic optimization process happening which replaces the compiled code and then executes it.

JS Runtime: Includes all the things that we need to use JavaScript. At the heart is a JS Engine but it also needs API (functionalities provided to the engine but that aren't part of vanila JS) and a callback queue (contains all the callback functions that are ready to be executed, click/time/data/...)
*/

/* Execution contexts and the call stack

After compiling the code is ready to be executed

Execution context: Environment in which a piece of Javascript is executed, where the information necessary to execute the code is stored.

1) Creation of the global execution context for top-level code that's outside of function. Ex.: global variables and registering functions without executing them.

2) Execution of top-level code that's inside the GEC.

3) Execution of functions and waiting for callbacks.

Execution context in detail:

Inside (generated right before execution):
     Variable environment (variables, functions, arguments object)
     Scope chain (variables located outside the current function)
     "this" keyword

The call stack is what keeps track of the order of execution of all the execution contexts.
*/

/* Scope and the scope chain

Scoping : How the program variable are organized and accessed.

Lexical scoping: Scoping is controlled by placement of functions and blocks in the code.

The scope: Space in which a certain variable is declaged (global, function, block).

Scope of a variable: Region of the code where a variable can be accessed.

Global scope: Outside any funciton or block, accessible everywhere.

Function scope: also called local scope, variables declared in it only accessible in it.

Block scope (inside {}): Variables only accessible inside the block, only applies to let and const variables, if declared with var then it will be accessible outside the block. An if statement is an example of a block.

Scope chain: The child scope has access to all variables in the parent scope, it's a one way street

*/
/* 
//calcAge declare in global scope
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName); // firstName is in global scope
  return age;
}

const firstName = `Mathieu`;
calcAge(1986);
 */
/* function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output); // age is available in all of calcAge, birthYear is global because called by calcAge outside the function, firstName is global
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = `Mélanie`; // overrides Mathieu because it looks in the closest scope first
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //Reassigning outer scope's variable
      output = `NEW OUTPUT`;
    }
    console.log(millenial); // works because var ignores the block and is available in the whole calcAge function
    // add(2,3) // doesn't work because outise the block in which the function was declared
    console.log(output); // logs NEW OUTPUT instead of the one defined in printAge
  }
  printAge();
  return age;
}

const firstName = `Mathieu`;
calcAge(1986); */
// console.log(age); // doesn't work, age isn't available outside calcAge

/* Hoisting: Makes some types of variables accessible in the code before they are actually declared. During the creating phase the code is scanned to find the variables and a property is created for each one of them in the "variable environment object". 

Hoisting doesn't work the same for all variable types.

  Function declaration: Hoisted, initial value = actual function, scope = block (strict mode only)

  var variables:  Hoisted, initial value = undefined, scope = function

  let and const variables: Not hoisted, initial value = uninitialized (Temporal Dead Zone), scope = block

  function expressions and arrows: based on if declared using var or let/const

Temporal Dead Zone:

const myName = `Mathieu`;
if (myName === `Mathieu`){
  console.log(`Mathieu is a ${job}`);
  const job = `CSR`;
}

    In the above example console.log(...) is in the Temporal Dead Zone for the job variable, which means the variable exist but isn't accessible because it hasn't been initialized yet. It will result in: ReferenceError: Cannot access 'job' before initialization

The reason for TDZ makes it easier to avoir and catch errors (accessing variables before declaration should be avoided), makes const variables work the way they're supposed to.

Why hoisting?

  Using function before actual declaration
  var hoisting is just a byproduct

*/

//	Hoisting test:
// With variables

/*  console.log(me); //	undefined
 console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization at script.js:151:13
 console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization at script.js:152:13

var me = `Mat`;
let job = `CSR`;
const year = 1986;
 */

// With functions

/* console.log(addDecl(2, 3)); //	Results in 5
console.log(addExpr(2, 3)); //	Because we used const (calling uninitialized) results in: Uncaught ReferenceError: Cannot access 'addExpr' before initialization at script.js:165:13
console.log(addArrow(2, 3)); //	Because we used var (calling undefined) results in: script.js:166 Uncaught TypeError: addArrow is not a function at script.js:166:13

// Declaration
function addDecl(a, b) {
  return a + b;
}
// Expression
const addExpr = function (a, b) {
  return a + b;
};
//	Arrow
var addArrow = (a, b) => a + b;
 */

// Pitfall of hoisting

/* if (!numProducts) deleteShoppingCart();
//	if before the var, numProducts is undefined (falsy) so before checking the cart content it deletes it
var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}
 */
//  Best practices is to use const and let, to declare the variables at the begining of the code and to declare functions next and then write the code.

//	In the window object (console) you will find variables declared with var but not with let or const

/* var x = 1;
let y = 2;
const z = 3;

// is the variable === window property of the same name?

console.log(x === window.x); // true
console.log(y === window.y); //	false
console.log(z === window.z); //	false */

/*	The this keyword: A special variable created for every exewcution context, it takes the value of the "owner" of the function in which the this keyword is used. Its value is not static, it depends on how the function is called and is only asigned when the function is called.

It can be called in different ways: */

//	Method: this = <Object that is calling the method>
/* const mathieu = {
  name: `Mathieu`,
  year: 1986,
  calcAge: function () {
    return 2022 - this.year; //	calcAge is method, the object calling the method is mathieu, therefore this = mathieu
  },
};
mathieu.calcAge(); //	36
 */
//	Simple function call: this = undefined (only in strict mode)

//	Arrow function: this = <this of surrounding function (lexical this)>

//	Event listener: this = <DOM element that the handler is attached to>

//	new, call, apply, bind: later in the course

//  this will never point to the function itself or the variable environment

/* console.log(this); //	this = window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1991); //	this = undefined because of strict mode

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(1991); //	this = window object, arrow function get its own this keyword

const mathieu = {
  year: 1986.5,
  calcAge: function () {
    console.log(this); //	returns mathieu object
    console.log(2022 - this.year); //	returns 2022 - 1986 = 36
  },
};
mathieu.calcAge();

const melanie = {
  year: 1986,
};
melanie.calcAge = mathieu.calcAge; // method borrowing, calcAge will now be part of melanie
melanie.calcAge(); //	when borrowing the method, the this in calcAge now points to melanie instead because it's the object calling the method

const f = mathieu.calcAge;
f(); //	this = undefined, no function owner, same as first example
 */
/* 
//	var firstName = `Melanie`;

const mathieu = {
  firstName: `Mathieu`,
  year: 1986,
  calcAge: function () {
    console.log(this); //	returns mathieu object
    console.log(2022 - this.year); //	returns 2022 - 1986 = 36
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

mathieu.greet(); //	return "Hey undefined", the parent scope of this is the global scope because it's an arrow function, if we add the var firstName = `Melanie`; variable then it returns "Hey Melanie"
 */

/* const mathieu = {
  firstName: `Mathieu`,
  year: 1986,
  calcAge: function () {
    console.log(this); //	returns mathieu object
    console.log(2022 - this.year); //	returns 2022 - 1986 = 36
    const self = this; //	self or that
    const isMillenial = function () {
      //	console.log(this);
      //	console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); //	Doesn't work with this because this is undefined, work with self because self "keeps" this as a reference to the mathieu object
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

mathieu.greet();
mathieu.calcAge(); */

//	In ES6 we use an arrow function instead of self

/* const mathieu = {
  firstName: `Mathieu`,
  year: 1986,
  calcAge: function () {
    console.log(this); //	returns mathieu object
    console.log(2022 - this.year); //	returns 2022 - 1986 = 36
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); //	Works because of the arrow function
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

mathieu.greet();
mathieu.calcAge(); */

//	Arguments
/* 
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
 */
/* var addArrow = (a, b) => {
  console.log(arguments); //	arguments is not defined so causes an error
  return a + b;
};
addArrow(2, 5);
 */

/* Primitives vs objects
  Primitives are: numbers, strings, boolean, undefined, null, symbom, BigInt

  Objects are: Object literal, arrays, functions, many more...

  Primitives are stored in the call stack

  Objects are stored in the heap
*/
/* 
let age = 30;
let oldAge = age;
age = 31;

console.log(age); //	31
console.log(oldAge); //	30

const me = {
  name: `Jonas`,
  age: 30,
};
const friend = me;
friend.age = 27;

// Both	me and friend both refer to the same address in the call stack (0003, 0001 being age then oldAge, 0002 being age after modification) and because me is an object the call stack address' value is D30F, which is an address in the heap so it refers to that address to determine the values associated with 0003. When modifying data in D30F it affects any variable which references it through the call stack.

//	friend.age can be modified because the value at address 0003 (D30F) doesn't change

console.log(`Friend:`, friend); //	name: `Jonas`, age: 27
console.log(`me`, me); //	name: `Jonas`, age: 27, notice that the age expected was 31 but is now 27
 */

//	Primitives types
let lastName = `Williams`;
let oldLastName = lastName; //	Williams
lastName = `Davis`; //	Modifies lastName without affecting oldLastName
console.log(lastName, oldLastName); //	They're now different

//	Reference types
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};
const marriedJessica = jessica; //	This just copies the reference to the object
marriedJessica.lastName = `Davis`;

console.log(`Before marriage: `, jessica); //	Wrong last name (Davis) because of modified object being refered to in the heap
console.log(`After marriage: `, marriedJessica);

//	const means the memory address (call stack) the variable refers to is constant

//	Copying objects
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;
console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, jessicaCopy);

//	Using the Object.assign function it creates a new object that's a copy of the original, that's why the last name isn't modified. It's a shallow copy so it only copies the properties at the first level.

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);
console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, jessicaCopy);

//	Because family is an array (an object) the reference is the same in the memory heap so it's modified in both jessica2 and jessicaCopy. We would need a deep clone to copy all the information levels, we would usually use an external library to do so.
