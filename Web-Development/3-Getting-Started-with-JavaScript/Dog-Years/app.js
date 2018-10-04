// My age.
let myAge = 28;

// The first two human years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

// Each human year following counts as 4 dog years.
// Since we already accounted for the first two years, we substract 2.
laterYears = myAge -= 2;
laterYears *= 4;

// Sum the two phases of dog years.
myAgeInDogYears = laterYears + earlyYears;

// My name.
const myName = 'Aitor';

// Log my age in dog years to the console.
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);