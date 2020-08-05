/*
You are provided with an array in which all elements are repeated thrice except one which is repeated twice.Your task is to print that number.

 

O(n) time and O(1) extra space

Input Description:
First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers

Output Description:
Print the number which is repeated twice

Sample Input :
5
13 12 13 12 13
Sample Output :
12
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
  console.log(twiceNumber(arr, size));
});

function twiceNumber(arr, size) {
  let map = {};
  let res = [];
  for (var num of arr) {
    if (!map[num]) {
      map[num] = 0;
    }

    map[num]++;
  }
  for (var ele of arr) {
    if (map[ele] === 2 && res.includes(ele) === false) {
      res.push(ele);
    }
  }

  return res.join(" ");
}

// 2 2 -1 -1 6 6
