/*
 You are given a ‘true’ string. String is called true if weight of string is multiple of 8. Your task is to tell whether a string can be declared True or Not. Weight of string is the sum of ASCII value of Vowel character(s) present in the string.

Input Description:
You are given as string ‘s’ in lower cases

Output Description:
Print 1 for true and 0 for false

Sample Input :
raja
Sample Output :
0
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
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      sum += myVar.charCodeAt(i);
    }
  }

  if (+sum % 8 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
});
