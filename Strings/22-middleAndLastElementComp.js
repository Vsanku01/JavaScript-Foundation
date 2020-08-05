/*
You are given a string ‘s’. Your task is to tell whether string is beautiful or not.A beautiful string is a string in which String starts with ‘a’ or ‘A’ and middle element is either ‘m’ or ‘M’ and last element is ‘z’or ‘Z’

 

Input Description:
You are given a string ‘s’.

Output Description:
Print 1 if string is beautiful and 0 if it is not

Sample Input :
Amz
Sample Output :
1
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
  if (
    arr[first].toLowerCase() === "a" &&
    arr[mid].toLowerCase() === "m" &&
    arr[last].toLowerCase() === "z"
  ) {
    console.log(1);
  } else {
    console.log(0);
  }
});
