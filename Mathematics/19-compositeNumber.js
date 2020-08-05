/*
Given a number N, print 'yes' if it is composite else print 'no'.
Sample Testcase :
INPUT
123
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
  var number = +userInput[0];
  var i = 1;
  var count = 0;
  while (i <= number) {
    if (number % i === 0) {
      count += 1;
    }
    i += 1;
  }

  if (count > 2) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
