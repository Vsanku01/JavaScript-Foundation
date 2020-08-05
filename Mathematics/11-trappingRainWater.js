/*
You are given an array of non-negative integers representing height of walls at index i as Ai and the width of each block is 1. Compute how much air can be encapsulated between the walls of chamber.

 

Input Description:
Each line contains an integer ‘N’ denoting the size of the array Next line contains N space separated numbers to be stored in array.

Output Description:
Output the total unit of Air encapsulated between the walls of chamber.

Sample Input :
3
7 4 9
Sample Output :
3
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
  let size = parseInt(userInput[0]);
  let arr = userInput[1].split(" ");
  console.log(tappingRainWater(arr, size));
});

function tappingRainWater(arr, size) {
  let maxLeft = 0;
  let maxRight = 0;
  var arr1 = [];
  var arr2 = [];

  arr.forEach(function (ele) {
    arr2.push(parseInt(ele));
  });

  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > maxLeft) {
      maxLeft = parseInt(arr[i]);
    }

    arr1.push(maxLeft);
  }

  for (var j = arr.length - 1; j >= 0; j--) {
    if (parseInt(arr[j]) > maxRight) {
      maxRight = parseInt(arr[j]);
    }

    arr2[j] = maxRight;
  }
  let counter = 0;
  let minValue = 0;
  for (var k = 0; k < arr.length; k++) {
    minValue = Math.min(arr1[k], arr2[k]) - parseInt(arr[k]);
    counter += minValue;
  }

  return counter;
}

// f
// 2 2 -1 -1 6 6
