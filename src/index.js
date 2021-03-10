module.exports = function toReadable (number) {
  if (number == 0)  return "zero"
  const from0To19 = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];

  let readableNumber = [];

  // hundreds
  let tmp = (number - number % 100) / 100;
  number -= tmp * 100;
  if (tmp) readableNumber.push(from0To19[tmp] + " hundred");

  if (number && number < 20) {
    readableNumber.push(from0To19[number]);
    return readableNumber.join(" ");
  }
  
  // tens
  tmp = (number - number % 10) / 10;
  number -= tmp * 10;
  if (tmp) {
    if      (tmp == 2) readableNumber.push("twenty")
    else if (tmp == 3) readableNumber.push("thirty")
    else if (tmp == 4) readableNumber.push("forty")
    else if (tmp == 5) readableNumber.push("fifty")
    else if (tmp == 8) readableNumber.push("eighty")
    else readableNumber.push(from0To19[tmp] + "ty")
  }

  // ones
  if (number) readableNumber.push(from0To19[number]);

  return readableNumber.join(" ");
}
