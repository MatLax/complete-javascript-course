/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas')
console.log(23)

let firstName = "Matilda"

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM"
let PI = 3.1415;

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'Programmer'
let job2 = 'Teacher'

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

//	console.log(typeof true);
console.log(typeof javascriptIsFun);
//	console.log(typeof 23);
//	console.log(typeof "Jonas");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


//	Mutating
let age = 30;
age = 31;

//	Can't be mutated, immutable
const birthYear = 1991; //	That's OK
//	birthYear = 1990; //	Doesn't work

//	Const can't be empty
//	const job; wouldn't work

//	We never use var
var job = 'programmer';
job = 'teacher'

//	We don't really need to declare variables using let, var, const
lastName = 'Lacroix';
console.log(lastName);


//	Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//	2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Mat';
const lastName = 'Lax';
console.log(firstName + ' ' + lastName);

//	Assignment operators
let x = 10 + 5; //	15
x += 10 //	x = x + 10 -> 25
x *= 4 //	x = x * 4 -> 100
x++ //	x = x + 1
x--
x--  //	x = x - 1
console.log(x);

//	Comparison operators
console.log(ageJonas > ageSarah); //	 <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
//	Math has precedence over comparison, see MDN operator precedence
console.log(now - 1991 > now - 2018);
//	Most math executes left-to-right
console.log(25 - 10 - 5); //	result is 10, not -30

//	Example of right-to-left
let x, y;
x = y = 25 - 10 - 5; //	x = y = 10 -> x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Mat';
const job = 'teacher';
const birthYear = 1986;
const year = 2022

//	Creating a string with variables the old way
const mat = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';
console.log(mat);

//	Creating a string with variables with ES6 +
const matES6 = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(matES6);
//	Backticks can be used for any stings

//	Strings over multiple lines old way
console.log('String with \n\
multiple\n\
lines');

//	Strings over multiple lines new way (backticks)
console.log(`String with
multiple
lines`);


const age = 15

//	Complicated way
const isOldEnough = age >= 18
if (isOldEnough) {
    console.log(`Sarah can start driving license 👍`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot start driving license before ${yearsLeft} years`);
}
//	Right way (no need for isOldEnough variable)
if (age >= 18) {
    console.log(`Sarah can start driving license 👍`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot start driving license before ${yearsLeft} years`);
}

//	This leads to an error because century isn't defined outside of the blocks
//	const birthYear = 1986;
//	if (birthYear <= 2000) {
//	    let century = 20;
//	} else {
//	    let century = 21;
//	}
//	console.log(century);
//	It would work if console.log(); was inside the code blocks

//	This works because century is defined first
const birthYear = 1986;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//	Manual type Conversion
//	In this example you can't add the string to a number because one is text, the other data
const inputYear = `1991`;
console.log(inputYear + 18);

//	The Number function automatically converts a string to number but only where in use, it doesn't change the variable itself
console.log(Number(inputYear) + 18);

//	This will log NaN or Not a Number
console.log(Number('Mathieu'));

//	NaN is an invalid number but it is considered a number
console.log(typeof NaN);

//	Convert a number to a string
console.log(String(21));

//	Type coercion
//	Javascript can convert values automatically
//	When there's an operation between a string and a number the number is automatically converted
console.log('I am ' + 23 + ' years old');
//	Is the same as writting this
console.log('I am ' + '23' + ' years old');
//	Otherwise we would have to do
console.log('I am ' + String(23) + ' years old');

//	This will work because it converts the strings to numbers
console.log('23' - '10' - 3);
console.log('23' * '10' * 3);
console.log('23' / '10' / 3);
//	This converts the number to a string instead because the + is used to concatenate
console.log('23' + '10' + 3);

//	This will log 10, '1' + 1 = 11 - 1 = 10
let n = '1' + 1;
n = n - 1;
console.log(n);

//	This will log 95, 2 + 3 + 4 = 9 + '5'
console.log(2 + 3 + 4 + '5');

//	This will log 15, 10 - 4 - 3 - 2 = 1 + '5'
console.log('10' - '4' - '3' - 2 + '5');

//	Type coercion can introduce bugs in your code, some prefer not to rely on it



//	Falsy become false when converted to boolean
//	5 falsy values: 0, '', undefined, null, NaN

//	Everything else converts to true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Mat'));
console.log(Boolean({})); //	emptry object
console.log(Boolean('')); //	empty string

//	Coercion to boolean happens when using logical operators or in a logical context (ex: if else statement)

let money = 0;
if (money) { //	money is 0 therefore it's false, it's been coerced into a boolean
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

money = 10;
if (money) { //	money is 10 therefore it's true, it's been coerced into a boolean
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height) { //	Height is falsy because it's assigned but undefined, else is executed
    console.log('Yay! Height is defined');
} else {
    console.log('Height is undefined');
}

height = 0;
if (height) { //	Height is falsy because it's zero, else is executed but that an error in our code
    console.log('Yay! Height is defined');
} else {
    console.log('Height is undefined');
}

const age = 18;
if (age === 18) console.log(`You just became an adult`); //	=== returns a boolean value but it will be true only if both sides are exactly the same
if (age == '18') console.log(`You're an adult`);

//	=== strict equality operator doesn't do type coercion
//	== loose equality operator does type coercion, avoid for clean code if possible, can introduce bugs

let favourite = prompt(`What's your favorite number?`)
console.log(favourite);
console.log(typeof favourite);

if (favourite == 14) { //	This will work because of == instead of ===
    console.log(`Cool!`);
} else {
    console.log(`Not a cool number`);
}

favourite = Number(prompt(`What's your favorite number?`))
console.log(favourite);
console.log(typeof favourite);

if (favourite === 14) { //	This will work because of the conversion to number of the favourite variable
    console.log(`Cool!`);
} else {
    console.log(`Not a cool number`);
}

favourite = Number(prompt(`What's your favorite number?`))
console.log(favourite);
console.log(typeof favourite);

if (favourite === 14) { //	This will work because of the conversion to number of the favourite variable
    console.log(`Cool!`);
} else if (favourite === 7) {
    console.log(`That's half a cool number`);
} else {
    console.log(`Not cool brah`);
}

if (favourite !== 14) console.log(`Why not 14?`); //	That's the strict version, there's also != for loose


//	Boolean logix
//	And (&&): will result in true only is all variables included are true
//	Or (||): wil result in true if one variable is true
//	Not (!): inverts true/false value

const age = 16
let a = age >= 20
let b = age < 30

console.log(a); //	false
console.log(b); //	true

console.log(!a); //	true
console.log(!b); //	false

console.log(a && b); //	0

console.log(a || b); //	1

console.log(!a && b); //	1

console.log(a || !b); //	0



let hasDriversLicense = true //	a
let hasGoodVision = true //	a

console.log(hasDriversLicense && hasGoodVision); //	Returns true

hasGoodVision = false
console.log(hasDriversLicense && hasGoodVision); //	Returns false

console.log(hasDriversLicense || hasGoodVision); //	Returns true

console.log(!hasDriversLicense); //	Returns false

const shouldDrive = hasDriversLicense && hasGoodVision
if (shouldDrive) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
} //	Returns Someone else

// Shortened version
if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
} //	returns Someone else

hasGoodVision = true
if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
} //	Returns Sarah...

let isTired = true; //	c
console.log(hasDriversLicense || hasGoodVision || isTired); //	Returns true
console.log(hasDriversLicense && hasGoodVision && isTired); //	Returns true

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
} //	Returns Someone else... because isTired is true therefore results in && false

isTired = false; //	c
console.log(hasDriversLicense || hasGoodVision || isTired); //	Returns true
console.log(hasDriversLicense && hasGoodVision && isTired); //	Returns true

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive`);
} //	Returns Sarah... because isTired is false therefore results in && true



const day = `saturday`;

switch (day) {
    case `monday`:
        console.log(`Plan my course structure`);
        console.log(`Go to coding meetup`);
        break; //	Without break the code continues executing so it would also log `Prepare theory videos` and `tuesday` wouldn't log the two monday strings
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}

//	Written as an if... else statement
if (day === `monday`) {
    console.log(`Plan...`);
    console.log(`Go to...`);
} else if (day === `tuesday`) {
    console.log(`Prepare...`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write...`);
} else if (day === `friday`) {
    console.log(`Record...`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy...`);
} else {
    console.log(`ERROR!!!`);
}



//	Expression is a piece of code that produces a value, ex.:

3 + 4
1954
true && false && !false

//	A statement is a bigger piece of code that isn't a value by itself

if (23 > 10) {
    const str = '23 is bigger'
}

const me = `Mathieu` //	M e is an expression because there's a value attached to it
console.log(`I'm ${me}`); //	That's a statement which includes an expression



//	Conditional operator
const age = 23;
//	One way to do it:
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);
//	More common way:
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);
//	Same as:
let drink2;
if (age >= 18) {
    drink2 = `wine`
} else {
    drink2 = `water`
}
console.log(drink2);
//	Ternary can be inserted into string like so:
console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
*/

