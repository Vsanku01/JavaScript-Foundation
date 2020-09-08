let arr = [1, 12, 15, 12, 26, 38];

var removeDuplicates = function (arr) {
  map = {};
  res = [];
  for (num of arr) {
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  for (num of arr) {
    if (map[num] > 1 && res.includes(num) == false) {
      res.push(num);
    }
  }
  return res;
};

console.log(removeDuplicates(arr));
