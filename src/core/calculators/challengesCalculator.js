import { sumAndReduce } from "../utils/reducers.js";

export function calculateChallenges(birthDate) {
  const [day, month, year] = birthDate.split("/").map(Number);
  const reducedYear = sumAndReduce(year);

  const minor = Math.abs(day - month);
  const secondary = Math.abs(day - reducedYear);
  const major = Math.abs(minor - secondary);

  return {
    minor: sumAndReduce(minor),
    secondary: sumAndReduce(secondary),
    major: sumAndReduce(major),
  };
}
