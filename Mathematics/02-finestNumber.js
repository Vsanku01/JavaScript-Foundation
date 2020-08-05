/*
You are given a set of numbers, out of which you have to tell which of them are finest. A finest number ‘n’ is a number which is formed by a number ‘t’ such that

n=t^3+(t+1)^3

 

t is a natural number

Input Description:
You are given a number ‘z’ representing total numbers in an array, Next line contains z space separated numbers.

Output Description:
Print the numbers which are finest in ascending order if there are no such numbers print -1.

Sample Input :
2
1729 189
Sample Output :

189 1729
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
  var data = userInput[1].split(" ");
  var res = [];
  function diff(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var t = 1; t < Number.MAX_SAFE_INTEGER; t++) {
        if (Math.pow(t, 3) > arr[i]) {
          break;
        }
        if (Math.pow(t, 3) + Math.pow(t + 1, 3) == arr[i]) {
          res.push(+arr[i]);
          break;
        } else {
        }
      }
    }
  }

  diff(data);

  if (res.length !== 0) {
    console.log(
      res
        .sort((a, b) => {
          return a - b;
        })
        .join(" ")
    );
  } else {
    console.log(-1);
  }
});
