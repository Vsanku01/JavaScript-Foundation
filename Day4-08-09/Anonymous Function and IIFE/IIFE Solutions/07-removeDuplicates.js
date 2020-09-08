let arr = [1, 12, 15, 12, 26, 38];

(function (arr) {
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
  console.log(res);
})(arr);
