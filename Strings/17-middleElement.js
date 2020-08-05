/*
Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
Sample Testcase :
INPUT
hello
OUTPUT
he*lo
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
  let first = 0;
  let last = arr.length - 1;
  let mid = Math.round(first + (last - first) / 2);
  if (arr.length % 2 === 0) {
    arr[mid - 1] = "*";
    arr[mid] = "*";
  } else {
    arr[mid] = "*";
  }

  console.log(arr.join(""));
});
