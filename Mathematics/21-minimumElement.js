/*
Pk finds it difficult to judge the minimum element in the list of elements given to him. Your task is to develop the algorithm in order to find the minimum element.

 

Note:Don’t use sorting
 

Input Description:
You are given ‘n’ number of elements. Next line contains n space separated numbers.

Output Description:
Print the minimum element

Sample Input :
5
3 4 9 1 6
Sample Output :
1
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
  console.log(nextSmallestNumber(arr, size));
});

function nextSmallestNumber(arr, size) {
  let array = [];
  arr.forEach(function (ele) {
    array.push(parseInt(ele));
  });

  let min_ele = Number.MAX_VALUE;
  for (var num of array) {
    if (num < min_ele) {
      min_ele = num;
    }
  }

  return min_ele;
}

// 2 2 -1 -1 6 6
