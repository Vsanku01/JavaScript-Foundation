/*
Simi is learning about palindromic numbers. Her teacher gave him the task to count all palindromic numbers present in that range.Simi has told you about this and want your help. You design an algorithm in order to help simi.

Input Description:
You will be given a number ‘n’

Output Description:
Print the count of all palindromic numbers till ‘n’(inclusive)

Sample Input :
5
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
  num = parseInt(userInput[0]);
  var count = 0;
  for (var i = 1; i < num + 1; i++) {
    if (i.toString().split("").reverse().join("") == i) {
      count += 1;
    } else {
    }
  }

  console.log(count);
});
