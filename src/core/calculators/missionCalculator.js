import { nameToNumber } from './nameCalculator.js';
import { dateToNumber } from './birthCalculator.js';
import { sumAndReduce } from '../utils/reducers.js';

export function calculateMission(name, birthDate) {
  const nameNumber = nameToNumber(name);
  const dateNumber = dateToNumber(birthDate);
  const mission = sumAndReduce(nameNumber + dateNumber);

  return { nameNumber, dateNumber, mission };
}
