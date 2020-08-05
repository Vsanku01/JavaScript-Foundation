/*
Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
Sample Testcase :
INPUT
5 5
OUTPUT
yes
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
  var data = userInput[0].split(" ");
  var a = +data[0];
  var b = +data[1];
  var num = a * b;
  if (Math.sqrt(num) - Math.floor(Math.sqrt(num)) === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
