/*
You are given a large number made of only 0’s and 1’s.Your task is to find the max no of consecutive 1’s. If there are no 1’s print -1

Input Description:
A large number ‘n’

Output Description:
Print the max no of consecutive 1 in the number

Sample Input :
101011111
Sample Output :
5
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
  console.log(consecutiveSequence(userInput[0].split("")));
});

function consecutiveSequence(arr) {
  let count = 0;
  let result = 0;
  arr.forEach((ele) => {
    if (+ele != 1) {
      count = 0;
    } else {
      count++;
      result = Math.max(result, count);
    }
  });
  if (result !== 0) {
    return result;
  } else {
    return -1;
  }
}
