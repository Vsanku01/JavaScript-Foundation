/*
Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
Sample Testcase :
INPUT
4 2
1 2 3 3
OUTPUT
yes
*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let data = userInput[0].split(" ");
  let arr = userInput[1].split(" ");
  let k = parseInt(data[1]);
  console.log(isExists(arr, k));
});

function isExists(arr, k) {
  let array = [];
  arr.forEach(function (ele) {
    array.push(parseInt(ele));
  });

  if (array.includes(k) === true) {
    return "yes";
  } else {
    return "no";
  }
}
