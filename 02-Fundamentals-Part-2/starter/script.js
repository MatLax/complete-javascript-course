//	Strict makes it easier to write errorless code
"use strict";
//	Can also be activated for specific sections
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //	missing an s in hasDriversLicense, without strict mode the error won't be logged
if (hasDriversLicense) console.log(`Can drive now`);

const interface = 'Audio'; //	interface is a reserved word for potential future implementation
const private = 534; //	same as previous
const if = 23; //	if can't be a variable


//	A function is a piece of code that can be reused

function logger() { //	that opens function body to determine code to execute when calling function
    console.log(`My name is Mathieu`);
}

logger(); //	function gets called/invoked/ran
logger(15); //	the argument in parenthesis is ignored because it's not useful to the function
//	logger doesn't produce any value because we don't return anything from the function

//	functions can output data but can also receive data

function fruitProcessor(apples, oranges) { //	the parameters in parenthesis aren't defined yet
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; //	juice become the result of calling this function
}

fruitProcessor(5, 0); //	in parenthesis are arguments, that only returns 5 0

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //	This logs the string because juice is saved to a variable in order to return the string

console.log(fruitProcessor(5, 0)); //	This also logs the string

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



//  Since that's all we want to return there's no need to declare a variable to return the data from it
//Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1990);
console.log(age1)

//Function expression
//Anonymous function
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1995)
console.log(age2)

// A function declaration can be called before being defined:
const age3 = calcAge3(2000)
console.log(age3)
function calcAge3(birthYear) {
    return 2022 - birthYear;
}

//A function expression cannot be called before being defined:
const age4 = calcAge4(2005)
console.log(age4)
const calcAge4 = function (birthYear) {
    return 2022 - birthYear;
}   // This logs: Uncaught ReferenceError: Cannot access 'calcAge4' before initialization


//Arrow function
//Much shorter to write for single line functions
const calcAge5 = birthYear => 2022 - birthYear; //No need to write return
const age5 = calcAge5(2010);
console.log(age5);

const yearsUntilRetirement1 = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement1(2015))

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(2020, `Mathieu`));


//function calling another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor(2, 3));
// The parameter 2 replaces apples in <<const applePieces = cutFruitPieces(apples)>> which calls <<cutFruitPieces>> so 2 replaces fruit in that function, const applePieces therefore is 8
// The advantage is that it makes modifying code easier, if the machine stated cutting in 3 pieces instead you only need to change the number in one place
function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2022 - birthYear
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(2020, `Mathieu`));
console.log(yearsUntilRetirement2(1955, `Melanie`)); //This returns a negative number

const yearsUntilRetirement3 = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} should be retired.`;
    }
}
console.log(yearsUntilRetirement3(1955, `Melanie`)); // By introducing and if else statement we can change the function return

//Return exits the funtion, everything written after Return is ignored



// Arrays are data structure

// That's how we would create different values based on our previous knowledge:
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

// What we want is to bundle those values with arrays:
// Litteral syntax
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

// Another way to write it:
const years = new Array(1991, 1984, 2008, 2020);

// If you want to log only the first element of an array:
console.log(friends[0]);  // Arrays are zero based so the first element is #0
console.log(friends[1]);

console.log(friends.length); // Number of elements in the array, not zero based
console.log(friends[friends.length - 1]); // Will log the last element, converrts length to zero based through maths

// Mutating elements in the array
friends[2] = `Jay`;
console.log(friends); //Peter gets replaced with Jay

// Elements of the array can be modified even when using const, but the array itself cannot be change
//friends = [`Bob`, `Alice`] would lead to error: script.js:179 Uncaught TypeError: Assignment to constant variable at script.js:179:9

// Arrays can hold values with different types:
const year = 2022
const mathieu = [`Mathieu`, `Lacroix`, year - 1986, `CSR`, friends];
console.log(mathieu);
console.log(mathieu.length);

// Exercise, using arrays with a function
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const birthYear = [1990, 1995, 2000, 2005];

// Long way to get the data is to create variable for each input:
console.log(calcAge(birthYear)); //Doesn't work, retuns NaN
const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[birthYear.length - 1]);
console.log(age1, age2, age3);

// Shortcut is to create one variable with returns all the data in the form of an array:
const age = [calcAge(birthYear[0]), calcAge(birthYear[1]), calcAge(birthYear[birthYear.length - 1])];
console.log(age)



// Array methods are ways to interact with an array
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends); // logs (3) ['Michael', 'Steven', 'Peter']

// Push allows to add an element at the end of an array
friends.push(`Jay`); // push is a function
console.log(friends); //logs (4) ['Michael', 'Steven', 'Peter', 'Jay']

const newLength = friends.push(`Jerome`);
console.log(newLength); // logs 5 because the push function end on return array.length

//  unshift adds an element at the begining of the array
friends.unshift(`John`);
console.log(friends); // logs (6) ['John', 'Michael', 'Steven', 'Peter', 'Jay', 'Jerome']

//  pop removes the last element of an array
friends.pop();
console.log(friends); // logs (5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']
const popped = friends.pop();
console.log(popped); // logs Jay, pop returns the element being removed

//  shift removes the first element of an array
friends.shift(); // also logs the element being removed
console.log(friends); // logs (3) ['Michael', 'Steven', 'Peter']

// indexOf returns the position of an element in an array
console.log(friends.indexOf(`Steven`)); // logs 1
console.log(friends.indexOf(`Bob`)); // logs -1, which means the element isn't there

// includes will return if the element is part of the array, true or false, uses strict equality
console.log(friends.includes(`Steven`)); // logs true
console.log(friends.includes(`Bob`)); // logs false

// incudes can be used for conditionals
if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven`);
}



// OBJECTS

//	Assign name to value in an array so the order doesn't matter
const mathieu = { //	The name of the object is mathieu, it has five properties with different values
    firstName: `Mathieu`,
    lastName: `Lacroix`,
    age: 2022 - 1986,
    job: `None`,
    friends: [`Jonathan`, `Jean-Michel`, `Jasmin`]
};
console.log(mathieu);

//	dot notation is used most times
console.log(mathieu.lastName);

//	bracket notation
console.log(mathieu[`lastName`]);

//	can use concatenation to pull info with bracket notation when you need to compute the property name
const nameKey = `Name`;
console.log(mathieu[`first` + nameKey]);
console.log(mathieu[`last` + nameKey]);
//	nameKey replaced by Name > firstName & lastName

//	example of when bracket notation is required
const interestedIn = prompt(`What do you want to know about Mathieu? Choose between firstName, lastName, age, job and friends`)
console.log(interestedIn);
console.log(mathieu.interestedIn); //	 will return undefined
console.log(mathieu[interestedIn]);

//	can use if else because interestedIn is a truthy/falsy statement
if (mathieu[interestedIn]) {
    console.log(mathieu[interestedIn]);
} else {
    console.log(`Wrong request, choose between firstName, lastName, age, job and friends`);
}

//	adding properties to object
mathieu.location = `Gatineau`;
mathieu[`twitter`] = `@MatLax`;
console.log(mathieu);

//	Challenge
//	console.log(`${mathieu.firstName} has ` + mathieu[`friends`.length] + ` and his best friend is ` + mathieu[`friends`[0]]);
//	Solution:
console.log(`${mathieu.firstName} has ${mathieu.friends.length} and his best friend is ${mathieu.friends[0]}`);



//	Object methods

//	Objects can hold data, functions, arrays and even other objects

const mathieu = {
    firstName: `Mathieu`, //	string value
    lastName: `Lacroix`,
    birthYear: 1986, //	number value
    job: `None`,
    friends: [`Jonathan`, `Jean-Michel`, `Jasmin`], //	array value
    hasDriversLicense: true, //	boulean value

    //	a function attached to an object is called a method, requires an expression
    calcAge: function (birthYear) {
        return 2022 - birthYear;
    },
    //	Reading the birthYear directly from the object
    calcAge2: function () {
        console.log(this);
        return 2022 - this.birthYear; //	this equals the object on which the method is called
    },

    calcAge3: function () { //	automatically saving the value as a new property
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    //	 Challenge, write a function to get a summary of the object's content
    //	Doesn't work:
        getSummary: function () {
            if (this.hasDriversLicense) {
                return `${this.firstName} ${this.lastName} is ${this.age} years old, his job is ${this.job}, he has ${this.friends.length} friends named ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]}, ${firstName} has a driver's license.`;
            } else {
                return `${this.firstName} ${this.lastName} is ${this.age} years old, his job is ${this.job}, he has ${this.friends.length} friends named ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]}, ${firstName} doesn't have a driver's license`;
            }
        }

    //	Challenge solution
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge3()} years old, his job is ${this.job}, he has ${this.friends.length} friends  called ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]} and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
    }
};


//	calling calcAge
console.log(mathieu.calcAge(1986));
console.log(mathieu[`calcAge`](1986));
//	using the property in the object as a parameter for the function so we don't repeat ourselves
console.log(mathieu.calcAge(mathieu.birthYear));
console.log(mathieu[`calcAge`](mathieu[`birthYear`]));
//	with this
console.log(mathieu.calcAge2()); //	first logs this (mathieu object) then 36
//	new property added
console.log(mathieu.calcAge3());
console.log(mathieu.age);

console.log(mathieu.getSummary());



//	Loops

//	Allows to automate repetitive tasks

//	This is inneficient and goes against the don't repeat yourself principle:

console.log(`Lifting weight repetition 1 `);
console.log(`Lifting weight repetition 2 `);
console.log(`Lifting weight repetition 3 `);
console.log(`Lifting weight repetition 4 `);
console.log(`Lifting weight repetition 5 `);
console.log(`Lifting weight repetition 6 `);
console.log(`Lifting weight repetition 7 `);
console.log(`Lifting weight repetition 8 `);
console.log(`Lifting weight repetition 9 `);
console.log(`Lifting weight repetition 10 `);

//	Same but with a loop:
//	for loop keeps running while condition = true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}


//	Looping arrays
const mathieuArray = [
    `Mathieu`,
    `Lacroix`,
    2022 - 1986,
    `CSR`,
    [`Jonathan`, `Jean-Michel`, `Jasmin`],
    true
];
const types = [];

//	logging every element to the console.
for (let i = 0; i <= mathieuArray.length - 1; i++) {
    //	reading from array
    console.log(mathieuArray[i], typeof mathieuArray[i]);
    //	filling types
    //	types[i] = typeof mathieuArray[i];
    //	or
    types.push(typeof mathieuArray[i])
}

console.log(types);

const years = [1990, 2000, 2010, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

//	Continue and break
//	continue allows to exit the current itteration of the loop to start over
console.log(`--- only strings ---`);
for (let i = 0; i <= mathieuArray.length - 1; i++) {
    if (typeof mathieuArray[i] !== `string`) continue;   // skip over not string
    console.log(mathieuArray[i], typeof mathieuArray[i]);
}

//	break stops the loop
console.log(`--- break at number ---`);
for (let i = 0; i <= mathieuArray.length - 1; i++) {
    if (typeof mathieuArray[i] === `number`) break;   // stop the loop at number
    console.log(mathieuArray[i], typeof mathieuArray[i]);
}


//	Looping backwards

const mathieuArray = [
    `Mathieu`,
    `Lacroix`,
    2022 - 1986,
    `CSR`,
    [`Jonathan`, `Jean-Michel`, `Jasmin`],
];

for (let i = mathieuArray.length - 1; i >= 0; i--) {
    console.log(mathieuArray[i]);
};

//	Loop in loop

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--STARTING EXERCISE ${exercise}--`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} rep ${rep}`);
    }
};


//	While loop (more versatile)

for (let rep = 1; rep <= 10; rep++) {
    console.log(`For: Lifting weight repetition ${rep}`);
}

//	Same thing with while loop:

let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weight repetition ${rep}`);
    rep++
}

//	While loop doesn't need a counter

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`CONGLATURATIONS!`);
}

*/
