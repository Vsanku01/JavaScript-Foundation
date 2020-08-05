/*
Given a string 'S' print the sum of weight of the String. A weight of character is defined as the ASCII value of corresponding character.

Input Description:
You are given a string ‘s’

Output Description:
Print weight

Sample Input :
abc
Sample Output :
294
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
  let sum = 0;

  for (var i = 0; i < myVar.length; i++) {
    sum += myVar.charCodeAt(i);
  }

  console.log(sum);
});
