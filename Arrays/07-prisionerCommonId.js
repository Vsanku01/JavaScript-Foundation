/*
You are given an array of ids of prisoners. The jail authority found that there are some prisoners of same id. Your task is to help the authority in finding the common ids.

Input Description:
First line contains a number ‘n’ representing no of prisoners. Next line contains n space separated numbers.

Output Description:
Print the ids which are not unique. Print -1 if all ids are unique

Sample Input :
7
1 1 11 121 131 141 98
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
  console.log(duplicatePrisoners(arr, size));
});

function duplicatePrisoners(arr, size) {
  let map = {};
  let res = [];
  for (var num of arr) {
    if (!map[num]) {
      map[num] = 0;
    }

    map[num]++;
  }
  for (var ele of arr) {
    if (map[ele] > 1 && res.includes(ele) === false) {
      res.push(ele);
    }
  }

  return res.join(" ");
}
