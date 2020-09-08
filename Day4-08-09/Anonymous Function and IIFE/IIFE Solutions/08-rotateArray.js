let arr = [1, 12, 15, 26, 38];
let n = 2;

(function (arr, n) {
  console.log(arr.slice(n).concat(arr.slice(0, n)));
})(arr, n);

console.log(rotateArray(arr, n));
