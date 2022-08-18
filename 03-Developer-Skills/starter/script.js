// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 
1) Understanding the problem:

What is temnperature amplitude?
    Difference between highest and lowest temperatures

How to compute max and min in an array?


What does a sensor error look like and what to do when it occurs?
    Reports a string instead of a number, ignore it

2) Breaking up into sub-problems:

How to ignore errors?

Find max value in array

Find min value in array

Substract min from max to calculate amplitude


const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  Math.max(temps) - Math.min(temps);
};

console.log(calcTempAmplitude(temperature));*/
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperature.length - 1; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
*/

// PROBLEM 2:
//	Function should now receive two arrays of temps

//	With two arrays should we implement the functionality twice?
//	No, just merge two arrays

//	Merge two arrays.
//	Use the concat method
/*
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);

console.log(array3);
*/

//	Call function with new array
/*
const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length - 1; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 5, -1], [0, 7, 2]);
console.log(amplitude);
//	---------------------------------------
//	Identify the bug: Returns prompt input + 273 concanated (ex: input 10 = 10273)

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


//	Identify origin of the bug: Value is a string

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };

  console.log(measurement.value); // Seems to return the right value
  //	Other console logging options:
  //	console.warn(measurement.value);
  //	console.error(measurement.value);
  //	console.table(measurement);
  console.log(measurement); //	VALUE IS A STRING
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


//	Fix the bug: Convert value to number

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };
  console.log(measurement); //	Value is now a number
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//	BIGGER BUG

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length - 1; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 5, 4], [8, 7, 2]);
//	Bug: max and min now 0 by default, therefore 0 used to calculate amplitude because no array value is lower than zero
//	By using debugger tool we can see that the lowest value in the array doesn't replace min because it's not lower than 0
console.log(amplitude);

//	Can use debugger; to automatically open debugger tool
*/

//	CHALLENGE:
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:

1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

//	Function that takes array and logs based on array length -> use loop
//	Array transformed to string, separated by ...
//	Temperature is value in array
//	Days is index + 1

//	Problem: Transform array into string of varrying length

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

/* LOGS SEPARATED
const printForecast = function (arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(`... ${arr[i]}°C in ${i + 1} days`);
  }
};
*/

//	USE SAME METHOD AS CALCULATING AVERAGE FROM PREVIOUS EXERCISE
//	EMPTY STRING = EMPTY STRING + WHAT'S GETTING ADDED
const printForecast = function (arr) {
  let str = `...`;
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(str);
};
printForecast(data1);
printForecast(data2);
