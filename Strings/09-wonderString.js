/*
 You are given a string. You have to print “Wonder” if the string is wonderful and -1 if it is not. A wonderful string is a string,which is made up of exactly 3 different characters.

Input Description:
You are given a string

Output Description:
Print “Wonder” if it is wonderful and -1 if it is not

Sample Input :
aabbcc
Sample Output :
Wonder
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
  let map = {};
  arr.forEach((ele) => {
    map[ele] = 0;
  });

  var unique = arr.filter(function (value) {
    return ++map[value] == 1;
  });

  if (unique.length === 3) {
    console.log("Wonder");
  } else {
    console.log("-1");
  }
});
