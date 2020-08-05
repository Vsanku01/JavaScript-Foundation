/*
You are given a string ‘s’. Your task is to find whether string is beautiful or not. A string is said to be beautiful whenever string is made up of only three characters. All the three characters must be distinct. Print true if string is beautiful and false when it is not beautiful

Input Description:
You are given a string

Output Description:
Print ‘1’ when string is beautiful and ‘0’ when it is not

Sample Input :
Aab
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
    console.log("1");
  } else {
    console.log("0");
  }
});
