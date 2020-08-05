/*
Given a string S, print 'yes' if it has a vowel in it else print 'no'.
Sample Testcase :
INPUT
codekata
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
  var str = userInput[0].split("");
  if (
    str.includes("a") ||
    str.includes("e") ||
    str.includes("i") ||
    str.includes("o") ||
    str.includes("u")
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
