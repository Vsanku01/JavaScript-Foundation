var arr = [1, 2, 3];
function hourToSeconds(arr) {
  result = [];
  for (num of arr) {
    result.push(num * 1200);
  }
  return result;
}
var data = hourToSeconds(arr);
console.log(data);
