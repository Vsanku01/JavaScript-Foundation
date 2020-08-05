/*
You are given an array of numbers. Print the least occurring element. If there is more than 1 element print all of them in decreasing order of their value.

Input Description:
You are given a number ‘n’ denoting size of array. Next line contains n space separated numbers.

Output Description:
Print the number as mentioned

Sample Input :
9
1 6 4 56 56 56 6 4 2
Sample Output :
2 1
*/
const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin,
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  var arr = userInput[1].split(" ");
  leastOcurring(arr);
});

function leastOcurring(arr) {
  map = {};
  for (var num of arr) {
    if (!map[num]) {
      map[num] = 0;
    }
    map[num]++;
  }

  const values = Object.values(map);
  const keys = Object.keys(map);

  const intValues = values.map((i) => Number(i));

  // { '1': 1, '2': 1, '4': 2, '6': 2, '56': 3 }
  var min = Number.MAX_VALUE;
  for (var n of intValues) {
    if (n < min) {
      min = n;
    }
  }

  var res = [];
  for (var numm of arr) {
    if (map[numm] == min) {
      res.push(+numm);
    }
  }

  console.log(res.sort().reverse().join(" "));
}
