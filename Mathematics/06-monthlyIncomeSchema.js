/*
A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months

Input Description:
You will be given a number ‘n’->No. of months

Output Description:
Print the total savings at the end of ‘n’ months

Sample Input :
1
Sample Output :
2000
*/

var readline = require("readline");

var input = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

input.on("line", function (values) {
  userInput.push(values);
});

input.on("close", function () {
  console.log(monthSavings(parseFloat(userInput[0])));
});

function monthSavings(n) {
  if (n === 0) {
    return 1000;
  } else if (n === 1) {
    return 2000;
  } else {
    return monthSavings(n - 1) + n * 1000;
  }
}
//            1    2
// 1000 1000 2000 3000
