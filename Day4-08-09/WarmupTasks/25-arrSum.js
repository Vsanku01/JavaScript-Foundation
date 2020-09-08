var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
  posSum = 0;
  negSum = 0;
  for (num of arr) {
    if (Math.sign(num) === 1) {
      posSum += num;
    } else {
      negSum += num;
    }
  }
  return [posSum , negSum]
};
console.log(countPositivesSumNegatives(arr));
