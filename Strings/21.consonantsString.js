/*
You are given a string.Your task is to print only the consonants present in the string without affecting the sentence spacings if present. If no consonants are present print -1

Input Description:
You are given a string ‘s’.

Output Description:
Print only consonants.

Sample Input :
I am shrey 
Sample Output :
 m shry
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

  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() === "a" ||
      arr[i].toLowerCase() === "e" ||
      arr[i].toLowerCase() === "o" ||
      arr[i].toLowerCase() === "u" ||
      arr[i].toLowerCase() === "i"
    ) {
    } else {
      res.push(arr[i]);
    }
  }

  console.log(res.join(""));
});
