arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumbers = (arr) => {
  result = [];
  for (num of arr) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }
  return result;
};
console.log(oddNumbers(arr));
