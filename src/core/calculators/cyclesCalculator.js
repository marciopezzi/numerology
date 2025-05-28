import { sumAndReduce } from "../utils/reducers.js";

export function calculateCycles(birthDate, currentYear) {
  const [day, month, year] = birthDate.split("/").map(Number);

  const firstCycle = sumAndReduce(day + month);
  const secondCycle = sumAndReduce(day + year);
  const thirdCycle = sumAndReduce(firstCycle + secondCycle);

  const personalYear = sumAndReduce(day + month + currentYear);

  return {
    lifeCycles: {
      first: firstCycle,
      second: secondCycle,
      third: thirdCycle,
    },
    personalYear,
  };
}
