/*
You are given with a string which comprises of some numbers. Your task is to find the largest integer by converting the string to the corresponding integer.

Input Description:
First line contains n denoting number of Test Cases. The first and only Line of testcase has the string

Output Description:
Print the largest number

Sample Input :
 I was born on 12 october 1998.
Sample Output :
1998
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
  let arr = userInput[0].split(" ");
  let max = 0;
  arr.forEach((ele) => {
    if (Number.isInteger(+ele) && +ele > max) {
      max = +ele;
    }
  });

  console.log(max);
});
