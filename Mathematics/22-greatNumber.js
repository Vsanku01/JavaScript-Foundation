/*
You are given a number ‘n’. You have to tell whether a number is great or not. A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back

m+j=n

 

Input Description:
You are given a number n;

Output Description:
Print Great if a number is great else print the no

Sample Input :
59
Sample Output :
Great

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
  var arr = userInput[0].split("");
  var sum = 0;
  var prod = 1;
  arr.forEach((ele) => {
    sum += +ele;
    prod *= +ele;
  });

  if (sum + prod === +userInput[0]) {
    console.log("Great");
  } else {
    console.log("no");
  }
});
