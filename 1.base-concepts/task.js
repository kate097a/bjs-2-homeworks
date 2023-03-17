function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d) ) / (2 * a));
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  } else if (d == 0) {
    arr.push((-b / 2) * a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let p = percent / 100 / 12;
  let s = amount - contribution;
  totalAmount = 12 * Number((s * (p + (p / (((1 + p) ** date) - 1)))).toFixed(2));
  return totalAmount;
}
