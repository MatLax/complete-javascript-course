/*
//	Lecture Values and Variables
const country = "Canada"
console.log(country);
const continent = "North America"
console.log(continent);
let population = 37000000
console.log(population);

//	Lecture Data Types
const isIsland = false;
const language = 'français';
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//	language = "Français" (ne fonctionne pas à cause de "const")
//	Lecture basic operators
console.log(population / 2);
console.log(population++);

let populationFinland = 6000000
let populationAverage = 33000000
console.log(population > populationFinland);
console.log(population > populationAverage);
let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;
console.log(description);

//	Lecture Strings and Template Liretals
let description2 = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description);

if (population > 33000000) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ` + (33000000 - population) + ` below the average`);
}


//	'9' - '5'; pred: 4 > 4
//	'19' - '13' + '17'; pred: 617 > 617
//	'19' - '13' + 17; pred: 617 > 23 (19-3 = 6 + 17 = 23)
//	'123' < 57; pred: NaN > false
//	5 + 6 + '4' + 9 - 4 - 2; pred: 11 + '4' = 114 + 9 - 4 - 2 = 117 > 1143 (11 + '4' + 3)

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);



let numNeighbours = prompt(`How many neighbour countries dos your country have?`);
if (numNeighbours == 1) {
    console.log(`Only one border`);
} else if (numNeighbours > 1) {
    console.log(`More than one border`);
} else {
    console.log(`No border`);
}

numNeighbours = prompt(`How many neighbour countries dos your country have?`);
if (numNeighbours === 1) {
    console.log(`Only one border`);
} else if (numNeighbours > 1) {
    console.log(`More than one border`);
} else {
    console.log(`No border`);
}

numNeighbours = Number(prompt(`How many neighbour countries dos your country have?`));
if (numNeighbours == 1) {
    console.log(`Only one border`);
} else if (numNeighbours > 1) {
    console.log(`More than one border`);
} else {
    console.log(`No border`);
}
*/
const country = 'Canada';
const continent = 'North America';
const population = 37000000;
const isIsland = false;
const language = 'English';

if (language === 'English' && population < 50000000 && isIsland == false) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
    case `mandarin`:
        console.log(`Most number of native speakers`);
        break;
    case `spanish`:
        console.log(`2nd place...`);
        break;
    case `english`:
        console.log(`3rd place...`);
        break;
    default:
        console.log(`Great langage too`);
}

population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);