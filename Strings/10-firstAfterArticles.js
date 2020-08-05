/*
You are given a paragraph.Your task is to print the words that come just after articles.

Input Description:
You are given a string ‘s’

Output Description:
print the words that come just after articles and -1 if there are no articles

Sample Input :
The sun rises in the east

Sample Output :
sun east
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
  let arr = myVar.split(" ");
  let res = [];

  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] === "the" ||
      arr[i] === "The" ||
      arr[i] === "an" ||
      arr[i] === "An" ||
      arr[i] === "a" ||
      arr[i] === "A"
    ) {
      res.push(arr[i + 1]);
    }
  }

  console.log(res.join(" "));
});
