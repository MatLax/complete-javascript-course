"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // Function to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Deconstruction inside a function, see function call after function
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your pasta with ${ing1}, ${ing2} and ${ing3}!`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////// DESTRUCTURING ARRAYS ////////////////
// Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Passing an order (and logging it)
console.log(restaurant.order(2, 0));

// Destructuring the order
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//////////////// DESTRUCTURING OBJECTS /////////////////
// Similar to destructuring arrays but with curly braces and the order doesn't matter (just like regular objects)
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Variable name different from property name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Passing an order
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// Passing an order that uses default values
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});

////////////////// Spread Operator /////////////

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients);

// Old way of pulling the elements from the array
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// With spread operator
restaurant.orderPasta(...ingredients);

// On objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);

///////////////// Rest pattern and parameters ///////////////

//	Can use both rest and spread at the same time
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//	In objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
restaurant.orderPizza(`pepperoni`, `onions`, `olives`, `spinach`); //	First ingredient store in mainIngredient, the rest in otherIngredients
restaurant.orderPizza(`mushrooms`); // Mushrooms as main ingredient, creates an empty array for other ingredients

//////////////// DESTRUCTURING ARRAYS ///////////////////

/*

// Destructuring is to break down a complex data structure into a smaller data structure

// Without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring
const [x, y, z] = arr;

// Logging to show it works in console
console.log(`without :`, a, b, c, ` / with :`, x, y, z);

// leaving a hole between , will skip an element
console.log(main, secondary);
let [main, , secondary] = restaurant.categories; 

// If we wanted to switch the variables without destructuring:
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// With destructuring:
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Passing an order (and logging it)
console.log(restaurant.order(2, 0));

// Destructuring the order
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// With nested array (array inside another)
const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
console.log(i, j); // logs: (2) [4, 5]

// To destructure while getting all the data separatly we need to destructure inside the destructure
const [k, , [l, m]] = nested;
console.log(k, l, m); // logs: 2, 4, 5

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // r is undefined

const [s = 1, t = 1, u = 1] = [11, 12];
console.log(s, t, u); // u has a default value of 1 so it doesn't return as undefined 

*/

//////////////////////// DESTRUCTURING OBJECTS /////////////////////////////

/*

// Similar to destructuring arrays but with curly braces and the order doesn't matter (just like regular objects)
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Variable name different from property name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// We need to wrap the mutation in parenthesis because if we start with curly braces Javascript expects a code block which can't be = something
({ a, b } = obj); 
console.log(a, b); // a and b = 23 and 7

// Nested objects like openingHours
const { fri } = openingHours;
console.log(fri); // Returns an object, not what we want

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// We can change the variables names
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Real world example (copy from example in code)

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// This order will use default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

*/

//////////////// SPREAD OPERATOR (...) ///////////////////////

/*

// Contrary to destructuring it doesn't create new variables, it only pulls all elements from an array
// Works on all iterables (arrays, strings, maps, sets, not objects)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // There's a better way to achieve the same result
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // Same result as badNewArr

console.log(...newArr); // Logs each element individually

// Real world usage, creating a new menu
const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread operator on a string
const str = `Mat`;
const letters = [...str, , `L.`];
console.log(letters); // ["M", "a", "t", " ", "L."]
console.log(...str); // M a t

// Real-world example:
const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Wrong way to pull the elements
restaurant.orderPasta(...ingredients);

// On objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);

// By creating a copy with a spread operator we solve the issue seen in the previous section when changing a value (affecting the original)
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurant.name);
console.log(restaurantCopy.name); 

*/

/////////////////// REST PATTERNS (...) AND PARAMETERS ///////////////////

/*

// Same syntax as spread operator but does the opposite
// Used to collect elements and pack them in an array

// Spread because it's on the right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1, 2, 3, 4] Takes 3 and 4 and includes them directly in the arr array

//	Rest because it's on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1, 2, [3, 4, 5] Takes the remaining elements and puts them in the others variable as an array

//	Can use both rest and spread at the same time
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//	In objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//	FUNCTIONS

//Function to add up numbers no matter how many of them there are
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // Should give 5
add(5, 3, 7, 2); // Should give 17
add(8, 2, 5, 3, 2, 1, 4); // Should give 25

const x = [23, 5, 7];
add(...x); // Should give 35, ...x spreads the array which is then compressed by ...numbers into the function

restaurant.orderPizza(`mushrooms`, `onions`, `olives`, `spinach`); //	First ingredient store in mainIngredient, the rest in otherIngredients
restaurant.orderPizza(`mushrooms`); // Mushrooms as main ingredient, creates an empty array for other ingredients

*/

////////////////////////// SHORT CIRCUITING (&& and ||) //////////////////////////

/*

console.log(`---- OR ----`);
// Use any data type, return any data type, short-circuiting or short circuit evaluation

console.log(3 || `Mathieu`); // Logs 3, short circuiting for the || operator means that if the first value is truthy then it will return that value
console.log(`` || `Mathieu`); // Mathieu
console.log(true || 0); // true
console.log(undefined || null); // null, even if null is falsy because it's the last value in the chain

console.log(undefined || 0 || `` || `Hello` || 23 || null); // Hello, because it's the first truthy value

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // Returns 10

restaurant.numGuests = 23;
const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest2); // Skips default value because it got overridden by 23

const guest3 = restaurant.numGuests || 10;
console.log(guest3); // Returns 23 because restaurant.numGuests was defined, therefore it's become a truthy value. WILL NOT WORK IF DEFINED AS 0 BECAUSE IT'S A FALSY VALUE

console.log(`---- AND ----`);
// Works in the opposite way, returns the first falsy value or the last value
console.log(0 && `Mathieu`); // Returns 0
console.log(7 && `Mathieu`);

console.log(`Hello` && 23 && null && `Mathieu`); // Returns null

// Practical example
if (restaurant.orderPasta) {
  restaurant.orderPasta(`mushrooms`, `spinach`, `onions`);
}
// Can be replaced by:
restaurant.orderPasta &&
  restaurant.orderPasta(`mushrooms`, `spinach`, `onions`);

*/

/////////////////////// NULLISH COALESCING OPERATOR (??) /////////////////////////
