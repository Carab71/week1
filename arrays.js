// let coffeeOder = ["bob - latte", "sarah - americano", "steve - flat white"];

// coffeeOder[2] = "donna - white coffee";
// coffeeOder.push("jone - black coffee");
// console.log(coffeeOder);

// let friends = ["MIke", "Kevo", "bob", "ahmed"];
// console.log(friends);
// friends.push("jone");
// console.log(friends);

// console.log(friends.pop());

// friends.unshift("Maria");
// console.log(friends);

// console.log(friends.shift());

// const coupleFriends = friends.slice(2);
// console.log(coupleFriends);

// const coupleFriend = friends.splice(0);
// console.log(coupleFriend);

// let favDrinks = ["coke", "orange", "coffee"];

// for (let i = 0; i < favDrinks.length; i++) {
//   console.log(favDrinks[i]);
// }

// let multiplesOfTwo = [];

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     multiplesOfTwo.push(i);
//   }
// }
// console.log(`numbers divisible by 2 are ${multiplesOfTwo}`);

// let age = 15;

// while (age < 18) {
//   console.log("you're a child!");
//   age++;
// }

// console.log("you're an adult");
// let cards = ["diamond", "spade", "heart", "club"];
// let currentCard = "club";

// while (currentCard != "spade") {
//   console.log(currentCard);
//   currentCard = cards[Math.floor(Math.random() * 4)];
// }
// console.log(currentCard);

// test1
const favFilms = ["jangle", "spiderman", "hitman", "natGeo", "onelife"];
favFilms.push("napoleon", "mastero");

for (let i = 0; i < favFilms.length; i++) {
  console.log(favFilms[i]);
}

//test2
let num = [];
while (num.length < 6) {
  const num1 = Math.floor(Math.random() * 50) + 1;
  if (num.indexOf(num1) === -1) num.push(num1);
}
// console.log(num);

//test3
for (let i = 9; i > 0; i--) {
  // console.log(i);
}

//test4
const movies = ["foe", "painHustlers", "freelance", "theKiller"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
  if (movies[3] === "ghostbusters!") {
    console.log("Yay it's ghostbusters");
  } else {
    // console.log(`Sorry it's ${movies[2]}`);
  }
}

//test 5
for (let i = 0; i < 6; i++) {
  console.log(Math.floor(Math.random()) * 30);
  if (i % 7 === 0) {
    console.log("it's divisible by 7");
  } else {
    console.log("it's not divisible by 7");
  }
}
