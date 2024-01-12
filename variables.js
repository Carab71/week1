// "use strict";
// let num = 3;
// let num2 = (num += num);
// console.log(num);

// let favDrink = "milk";
// let drinkSize = "large";
// console.log(`I will like to have ${drinkSize} ${favDrink} please thanks`);

let firstName = "John";
let age = 20;
let favColour = "blue";
console.log(
  `Hi my name is ${firstName}, and am ${age} years old, and favourite color is ${favColour} `
);

let firstName1 = "Simba";
let age1 = 27;
let favColour1 = "orange";
console.log(
  `Hi my name is ${firstName1}, and am ${age1} years old, and favourite color is ${favColour1} `
);

let breakfast = "Toast with tea";
let lunch = "Mince meat with pasta";
let dinner = "Red beans";
console.log(
  `The food i had today for breakfast is ${breakfast}, for lunch ${lunch}, and for dinner is ${dinner}`
);

let breakfast1 = "Pancakes with green tea";
let lunch1 = "cheese burger";
let dinner1 = "pizza";
console.log(
  `The food i will have tomorrow for breakfast is ${breakfast1}, for lunch ${lunch1}, and for dinner is ${dinner1}`
);

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const todayDate = new Date(2024, 1, 10);
const birthYear = new Date(2000, 1, 1);

const diffDays = Math.round((todayDate - birthYear) / oneDay);
console.log(diffDays);
