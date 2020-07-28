/*
You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.

Input Description:
You are given a number ‘n’. Then in next line n space separated numbers.

Output Description:
Print the array as mentioned

Sample Input :
4
1 1 3 2
Sample Output :
2 3 1
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
  console.log(sortArray(userInput[1].split(' ')))


})

function sortArray(arr) {
  var frequency = {};
  var res = [];
  arr.forEach(function(value) {
    frequency[value] = 0;
  });

  var unique = arr.filter(function(value) {
    return ++frequency[value] == 1;
  });
  res.push(unique.sort(function(a, b) {
    frequency[b] - frequency[a];
  }))

  return res[0].reverse().join(" ")




}
//   f     f
//.   1 -2 -3 -4 5 6 -7
