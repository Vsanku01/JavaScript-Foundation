/*
Given 3 numbers a,b,c print a*b mod c.
Sample Testcase :
INPUT
5 3 2
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
  console.log(parseInt(+arr[0] * +arr[1]) % +arr[2]);
});
