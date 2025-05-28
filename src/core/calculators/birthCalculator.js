import { sumAndReduce } from "../utils/reducers.js";

export function dateToNumber(dateStr) {
  const [day, month, year] = dateStr.split("/").map(Number);
  return sumAndReduce(day + month + year);
}
