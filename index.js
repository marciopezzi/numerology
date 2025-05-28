import {
  getNameNumbersArray,
  nameToNumber,
} from "./src/core/calculators/nameCalculator.js";

const name = "Marcio Albertasse Pezzi de Lima";

// const numbers = getNameNumbersArray(name);
const numbers = [
  4, 1, 9, 3, 9, 6, 1, 3,
  2, 5, 9, 2, 1, 1, 1, 5,
  7, 5, 8, 8, 9, 4, 5, 3,
  9, 4, 1
];

const total = numbers.reduce((acc, val) => acc + val, 0);
const reduced = nameToNumber(name);

console.log("Números:", numbers);
console.log("Soma:", total);
console.log("Redução:", reduced);
