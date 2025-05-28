import { normalize } from "../utils/normalization.js";
import { sumAndReduce } from "../utils/reducers.js";

const numerologyTable = {
  A: 1,
  J: 1,
  S: 1,
  B: 2,
  K: 2,
  T: 2,
  C: 3,
  L: 3,
  U: 3,
  D: 4,
  M: 4,
  V: 4,
  E: 5,
  N: 5,
  W: 5,
  F: 6,
  O: 6,
  X: 6,
  G: 7,
  P: 7,
  Y: 7,
  H: 8,
  Q: 8,
  Z: 8,
  I: 9,
  R: 9,
};

export function nameToNumber(name) {
  const cleaned = normalize(name).replace(/[^A-Z]/g, "");
  const numbers = cleaned
    .split("")
    .map((letter) => numerologyTable[letter] || 0);
  const total = numbers.reduce((acc, val) => acc + val, 0);
  return sumAndReduce(total);
}

export function getNameNumbersArray(name) {
  const cleaned = normalize(name).replace(/[^A-Z]/g, "");
  return cleaned.split("").map((letter) => numerologyTable[letter] || 0);
}
