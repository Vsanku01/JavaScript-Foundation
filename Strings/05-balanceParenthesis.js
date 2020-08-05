/*
you are given a string made up of parenthesis only.Your task is to check whether parenthesis are balanced or not.If they are balanced print 1 else print 0

Input Description:
You are given a string ‘s’

Output Description:
Print 1 for balanced and 0 for imbalanced

Sample Input :
{({})}
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
  console.log(bracket(arr));
});

function bracket(arr) {
  var stack = [];
  for (var c of arr) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else if (
      c === ")" &&
      stack.length !== 0 &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop();
    } else if (
      c === "]" &&
      stack.length !== 0 &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop();
    } else if (
      c === "}" &&
      stack.length !== 0 &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop();
    } else {
      return "0";
    }
  }
  return "1";
}
