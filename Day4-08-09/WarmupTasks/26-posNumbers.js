function getPositives(arr) {
  let res = [];
  for (num of arr) {
    if (Math.sign(num) === 1) {
      res.push(num);
    }
  }
  return res;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
