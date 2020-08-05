/*
You are given with an circular array .Your task is calculate the difference between two consecutive number. And if difference is greater than ‘k’, print 1 else print 0

Input Description:
You are given two numbers ‘n’, ’m’. Next line contains n space separated integers.

Output Description:
Print 1 if the difference is greater than ‘m’.

Sample Input :
5 15
50 65 85 98 35
Sample Output :
0 1 0 1 0
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
  var data = userInput[0].split(" ");
  var arr = userInput[1].split(" ");
  var k = data[1];
  console.log(difference(k, arr));
});

function difference(k, arr) {
  var firstPointer = 0;
  var secondPointer = firstPointer + 1;
  var res = [];
  while (firstPointer < arr.length && secondPointer < arr.length) {
    if (Math.abs(+arr[secondPointer] - +arr[firstPointer]) > +k) {
      res.push(1);
    } else {
      res.push(0);
    }
    firstPointer += 1;
    secondPointer += 1;
  }
  var first = +Math.abs(+arr[arr.length - 1] - +arr[0]);
  if (first > parseInt(k)) {
    res.push(1);
  } else {
    res.push(0);
  }
  return res.join(" ");
}
