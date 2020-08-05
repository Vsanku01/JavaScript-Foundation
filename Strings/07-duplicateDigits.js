/*
You are given a number with duplicate digits your task is to remove the immediate duplicate digits and print the result

Input Description:
You are given a long string of digits

Output Description:
Print the desired result print -1 if result length is 0

Sample Input :
1331
Sample Output :
11
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
  let myVar = userInput[0];
  let arr = myVar.split("");
  let stack = [];
  // [ '1', '3', '3', '1' ]
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] == arr[i] && j == i) {
      stack.splice(stack.length - 1, 1);
    } else {
      stack.push(arr[i]);
      j++;
    }
  }
  console.log(stack.join(""));
});
