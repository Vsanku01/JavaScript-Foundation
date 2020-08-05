/*
Given a number N, print yes if the number is a multiple of 7 else print no.
Sample Testcase :
INPUT
49
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
  if (+userInput % 7 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
