arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (arr) {
  result = [];
  for (num of arr) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }
  console.log(result);
})(arr);
