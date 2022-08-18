`use strict`;

//	Lecture : Functions
function describeCountry(country, population, capitalCity) {
  const desCount = `${country} has ${population} people and its capital city is ${capitalCity}`;
  return desCount;
}

const canada = describeCountry(`Canada`, 37000000, `Ottawa`);
console.log(canada);
const usa = describeCountry(`USA`, 350000000, `Washington`);
console.log(usa);

//	Lecture: Function Declarations vs Expressions

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
const china = percentageOfWorld1(1441000000);
console.log(china);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};
const france = percentageOfWorld2(70000000);
console.log(france);

//	Lecture: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
const UK = percentageOfWorld3(86000000);
console.log(UK);

//	Lecture: Fuctions calling other functions

let country = `China`;
let population = 1441000000;

const describePopulation = (country, population) => {
  console.log(
    `${country} has ${population} people, which is about ` +
      percentageOfWorld1(population) +
      `% of the world.`
  );
};
describePopulation(country, population);

//	Lecture: Introduction to arrays

const populations = [30000000, 40000000, 50000000, 60000000];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//	Lecture: Basic array operations (methods)

const neighboursFrance = [`Spain`, `Belgium`, `Germany`];
neighboursFrance.push(`Utopia`);
console.log(neighboursFrance); // (4) ['Spain', 'Belgium', 'Germany', 'Utopia']
neighboursFrance.pop();
console.log(neighboursFrance); // (3) ['Spain', 'Belgium', 'Germany']
if (!neighboursFrance.includes(`Germany`)) {
  console.log(`Probably not a central European country :D`);
} else {
  console.log(`That's a central European country!`);
}
neighboursFrance[neighboursFrance.indexOf(`Belgium`)] = `Kingdom of Belgium`;
console.log(neighboursFrance); // (3) ['Spain', 'Kingdom of Belgium', 'Germany']

//	Lecture: Introduction to objects

const myCountry = {
  country: `Canada`,
  capital: `Ottawa`,
  language: `Français`,
  population: 37000000,
  neighbours: [`United-States`, `Russia`, `Groenland`],
};

//	Lecture Dot vs Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} people speaking ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and its capital is ${myCountry.capital}.`
);

myCountry.population = myCountry.population + 2000000;
console.log(
  `${myCountry.country} has ${myCountry.population} people speaking ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and its capital is ${myCountry.capital}.`
);

myCountry[`population`] = myCountry[`population`] - 2000000;
console.log(
  `${myCountry.country} has ${myCountry.population} people speaking ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and its capital is ${myCountry.capital}.`
);

//	Lecture: Object Methods

myCountry.describe = function () {
  return `${this.country} has ${this.population} people speaking ${this.language}, ${this.neighbours.length} neighbouring countries and its capital is ${this.capital}.`;
};

console.log(myCountry.describe());

myCountry.checkIsland = function () {
  this.neighbours > 0 ? (this.isIsland = true) : (this.isIsland = false);
};

myCountry.checkIsland();
console.log(myCountry.isIsland);

//	Lecture: Iteration : The for loop

for (let voter = 1; voter <= 3; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

//	Lecture : Looping arrays, breaking and continuing

/* REMINDER
const populations = [30000000, 40000000, 50000000, 60000000];
function percentageOfWorld1(population) {
    return population / 7900000000 * 100;
}
*/
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

//	Lecture: looping backwards and loops in loops

//	DOESN'T WORK 100%
const listOfNeighbours = [
  [`Canada`, `Mexico`],
  [`Spain`],
  [`Norway`, `Sweden`, `Russia`],
];
const countryWithNeighbour = [`United States`, `Portugal`, `Finland`];

/* YOU'RE AN IDIOT BUT THAT'S OK!
for (
  let countryList = countryWithNeighbour.length - 1;
  countryList >= 0;
  countryList--
) {
  console.log(`${countryWithNeighbour[countryList]}'s neighbour(s)`);
  for (
    let neighList = listOfNeighbours[countryList].length - 1;
    neighList >= 0;
    neighList--
  ) {
    for (
      let specNeigh = 0;
      specNeigh < listOfNeighbours[neighList].length;
      specNeigh++
    ) {
      console.log(`Neighbour: ${listOfNeighbours[neighList][specNeigh]}`);
    } //	logs whole array
  }
}
*/
const listOfNeighbours = [
  [`Canada`, `Mexico`],
  [`Spain`],
  [`Norway`, `Sweden`, `Russia`],
];
const countryWithNeighbour = [`United States`, `Portugal`, `Finland`];

for (
  let countryList = countryWithNeighbour.length - 1;
  countryList >= 0;
  countryList--
) {
  console.log(`${countryWithNeighbour[countryList]}'s neighbour(s)`);
  for (
    let specNeigh = 0;
    specNeigh < listOfNeighbours[countryList].length;
    specNeigh++
  ) {
    console.log(`${listOfNeighbours[countryList][specNeigh]}`);
  }
}
/*
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/

//	Lecture: The while loop

/*const populations = [30000000, 40000000, 50000000, 60000000];
function percentageOfWorld1(population) {
    return population / 7900000000 * 100;
}
*/
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
