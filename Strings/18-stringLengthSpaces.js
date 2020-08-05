/*
Given a string S, find its length(including the spaces)without using any pre-defined functions.
Sample Testcase :
INPUT
codekata
OUTPUT
8
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
  let arr = userInput[0].split("");
  let count = 0;

  for (var i = 0; i < arr.length; i++) {
    count++;
  }

  console.log(count);
});
