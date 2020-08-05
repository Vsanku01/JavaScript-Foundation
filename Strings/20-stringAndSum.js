/*
You are given a string ‘s’.Your task is to print the string in the order they are present and then sum of digits.

Input Description:
You are given a string ‘s’.

Output Description:
Print the string and then at last sum of all the digits

Sample Input :
AC30BD40
Sample Output :
ACBD7
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
  let res = [];
  let sum = 0;
  arr.forEach((ele) => {
    if (Number.isInteger(+ele)) {
      sum += +ele;
    } else {
      res.push(ele);
    }
  });

  res.push(sum);
  console.log(res.join(""));
});
