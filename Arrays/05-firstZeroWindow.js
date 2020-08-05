/*
Find the first 0 in window of size k. You  are given n numbers and window size ‘w’

Your task is to print the first index which has 0

Input Description:
You are given two numbers ‘n’ and ‘w’ n representing size of array and ‘w’ size of window

Output Description:
Print the index of first 0(1 basedindexing),if there is no index with 0 print -1

Sample Input :
7 2
1 0 6 7 4 0 9
Sample Output :
2 2 -1 -1 6 6
*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let data = userInput[0].split(" ");
  let size = data[0];
  let wind = data[1];

  let arr = userInput[1].split(" ");
  console.log(indexOfZero(arr, size, wind));
});

function indexOfZero(arr, size, wind) {
  var firstPointer = 0;
  var secondPointer = firstPointer + wind - 1;
  var res = [];
  while (firstPointer < arr.length && secondPointer < arr.length) {
    let temp = arr.slice(firstPointer, secondPointer + 1);

    for (var j = 0; j < temp.length; j++) {
      if (
        parseInt(temp[j]) == 0 &&
        parseInt(temp[j]) === parseInt(arr[firstPointer])
      ) {
        res.push(firstPointer + 1);
        break;
      } else if (
        parseInt(temp[j]) == 0 &&
        parseInt(temp[j]) === parseInt(arr[secondPointer])
      ) {
        res.push(secondPointer + 1);
        break;
      } else if (parseInt(j) == temp.length - 1) {
        res.push(-1);
        break;
      }
    }

    firstPointer += 1;
    secondPointer += 1;
  }

  return res.join(" ");
}
