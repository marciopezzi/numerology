import { getNameNumbersArray } from "./nameCalculator.js";

export function calculateKarmicLessons(name) {
  const numbers = getNameNumbersArray(name);
  const uniqueNumbers = [...new Set(numbers)];
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return allNumbers.filter((n) => !uniqueNumbers.includes(n));
}
