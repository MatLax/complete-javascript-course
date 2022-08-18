// Javascript fundamentals - Part 2
// Challenge 1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins won! The average score was ${avgDolphins} and ${avgKoalas}!`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas won! The average score was ${avgKoalas} and ${avgDolphins}`);
    } else {
        console.log(`There's no clear winner! The average score was ${avgDolphins} and ${avgKoalas}!`);
    }
}

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1)

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27)
checkWinner(avgDolphins2, avgKoalas2)
*/

// Challenge 2
/*
const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        console.log(`The bill is ${bill}$, the tip is ` + bill * 0.15 + `$ for a total of ` + bill * 1.15 + `$`);
    } else {
        console.log(`The bill is ${bill}$, the tip is ` + bill * 0.20 + `$ for a total of ` + bill * 1.20 + `$`);
    }
}

const bills = [125, 555, 44];
console.log[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


//	Teacher's solution

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);
*/

//	Challenge #3
/*
const mark = {
    name: `Mark`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
};

const john = {
    name: `John`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
};

mark.calcBMI()
john.calcBMI()

console.log(mark.BMI);
console.log(john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
} else if (john.BMI > mark.BMI) {
    console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`);
} else {
    console.log(`Both John and Mark have the same BMI (${mark.BMI})`);
};
*/

//	Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (i = 0; i <= bills.length - 1; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
        tips.push(bills[i] * 0.15);
        totals.push(bills[i] * 1.15)
        console.log(`The bill is ${bills[i]}$, the tip is ` + bills[i] * 0.15 + `$ for a total of ` + bills[i] * 1.15 + `$`);
    } else {
        tips.push(bills[i] * 0.20);
        totals.push(bills[i] * 1.20)
        console.log(`The bill is ${bills[i]}$, the tip is ` + bills[i] * 0.20 + `$ for a total of ` + bills[i] * 1.20 + `$`);
    }
}
console.log(tips);
console.log(totals);

let tips2 = [];
let totals2 = [];
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (j = 0; j <= bills.length - 1; j++) {
    const tip = calcTip(bills[j]);
    tips2.push(tip);
    totals2.push(bills[j] + tip)
}
console.log(tips2);
console.log(totals2);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
console.log(calcAverage(totals2));
