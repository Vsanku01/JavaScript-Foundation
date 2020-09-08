arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (arr) {
  let res = 0;
  for (num of arr) {
    res += parseInt(num);
  }
  console.log(res);
})(arr);
