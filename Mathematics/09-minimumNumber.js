/*
Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9
OUTPUT
1
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
  var arr = userInput[0].split(" ");
  var intarr = [];
  arr.forEach((ele) => {
    intarr.push(+ele);
  });

  console.log(Math.min(...intarr));
});
