/*
You are a passport issuer, but due to some problems in the system, there are redundant  passport numbers. Your task is to delete all the duplicate passport numbers. You are given a list of passport numbers.

Input Description:
You are given length of list.Second line,You are given with a list.

Output Description:
Print the list of passport numbers without duplicates.

Sample Input :
5
A23 B56 B56 C79 D16
Sample Output :
A23 B56 C79 D16

*/

var readline = require('readline')

var input = readline.createInterface({
  input: process.stdin
})

const userInput = [];

input.on('line', function(values) {
  userInput.push(values)
})

input.on('close', function() {
  console.log(redundantPassport(userInput[1].split(' ')))


})

function redundantPassport(arr) {
  let map = {}
  let res = []
  for (var num of arr) {
    if (!map[num]) {
      map[num] = 0
    }
    map[num]++;
  }

  for (var ele of arr) {
    if (map[ele] === 1) {
      res.push(ele)
    } else if (map[ele] > 1 && res.includes(ele) === false) {
      res.push(ele)

    }
  }

  return res.join(" ")


}
