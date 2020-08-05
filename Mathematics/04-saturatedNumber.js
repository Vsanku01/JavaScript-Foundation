/*
You are provided with a number ’n’. Your task is to tell whether that number is saturated. A saturated number is a number which is made by exactly two digits.

Input Description:
You are given with a number n.

Output Description:
Print Saturated if it is saturated else it is Unsaturated

Sample Input :
121
Sample Output :
Saturated
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
  var arr = userInput[0].split("");
  var map = {};
  arr.forEach((ele) => {
    if (!map[+ele]) {
      map[ele] = 0;
    }
    map[ele]++;
  });

  const res = [];

  for (var val of Object.keys(map)) {
    if (res.includes(val) === false) {
      res.push(val);
    } else {
    }
  }

  if (res.length === 2) {
    console.log("Saturated");
  } else {
    console.log("Unsaturated");
  }
});
