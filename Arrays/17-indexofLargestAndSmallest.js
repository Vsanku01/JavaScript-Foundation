/*
You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.All number are unique.

Input Description:
First line contains a number ‘n’. Then next line contains n space separated numbers.

Output Description:
Print the difference of indices of largest and smallest array

Sample Input :
5
1 6 4 0 3
Sample Output :
-2
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
  var data = userInput[1].split(" ");
  var arr = [];
  data.forEach((ele) => {
    arr.push(+ele);
  });
  var max = +Math.max(...arr);
  var min = +Math.min(...arr);
  console.log(arr.indexOf(max) - arr.indexOf(min));
});
