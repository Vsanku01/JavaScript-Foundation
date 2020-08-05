/*
Assume that you are ticket verifier at a club. Your club has decided to give a special discount to the person(s) who are satisfying the following condition

 

Condition:-

If ticket number is divisible by date of month. You are eligible for a discount.

Input Description:
First line contains input ‘n’.Next line contains n space separated numbers denoting ticket numbers .Next line contains ‘k’ date of the month.

Output Description:
Print 1 if the ticket is eligible for discount else 0

Sample Input :
6
112 139 165 175 262 130
22
Sample Output :
0 0 0 0 0 0
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
  var arr = userInput[1].split(" ");
  var date = +userInput[2];
  arr.forEach((ele, idx) => {
    if (ele % date === 0) {
      arr[idx] = "1";
    } else {
      arr[idx] = "0";
    }
  });

  console.log(arr.join(" "));
});
