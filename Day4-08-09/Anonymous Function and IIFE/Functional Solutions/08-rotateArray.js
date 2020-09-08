let arr = [1, 12, 15, 26, 38];
let n = 2;

rotateArray = function (arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
};

console.log(rotateArray(arr, n));
