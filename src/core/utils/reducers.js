export function sumAndReduce(number) {
  while (number > 9 && number !== 11 && number !== 22) {
    number = number
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0);
  }
  return number;
}
