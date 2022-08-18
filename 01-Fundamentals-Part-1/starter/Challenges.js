/*
//	Challenge #1
//	First data

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI " + bmiMark, "John's BMI " + bmiJohn);
console.log("Mark's BMI is higher: " + markHigherBMI);

//	Second data
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.75;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI " + bmiMark, "John's BMI " + bmiJohn);
console.log("Mark's BMI is higher: " + markHigherBMI);

//	Challen #2
//	Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark} is higher than John's (${bmiJohn}))`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

//	Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.75;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark} is higher than John's (${bmiJohn}))`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

//	Challenge 3
//	1st data
let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins won!");
} else if (scoreDolphins === scoreKoalas) {
    console.log("It's a draw!");
} else {
    console.log("Koalas won!");
}

//	2nd data
scoreDolphins = (97 + 112 + 101) / 3
scoreKoalas = (109 + 95 + 123) / 3
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins won!");
} else if (scoreDolphins === scoreKoalas) {
    console.log("It's a draw!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas won!");
}

//	3rd data
scoreDolphins = (97 + 112 + 101) / 3
scoreKoalas = (109 + 95 + 106) / 3
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins won!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
    console.log("It's a draw!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas won!");
} else {
    console.log("No one gets anything!");
}



const bill = 430
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}$, the tip was ${tip}$ so the total is ${bill + tip}`);

*/