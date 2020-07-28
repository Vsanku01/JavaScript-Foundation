/*
Assume you are a student studying in school.You are given a task to find first negative integer for each and every window of size k.

Input Description:
First line contains an integer n denoting the size of the array. The next line contains n space separated integers forming the array. The last line contains the window size k.

Output Description:
Print the first negative integer in that window.If all the numbers are positive print 0

Sample Input :
7
1 -2 -3 -4 5 6 -7
3
Sample Output :
-2 -2 -3 -4 -7
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
  let size = parseInt(userInput[0])
  let arr = userInput[1].split(" ")
  let wind = parseInt(userInput[2])
  console.log(negativeInteger(size, arr, wind))


})

function negativeInteger(size, arr, wind) {
  var firstPointer = 0
  var secondPointer = firstPointer + 2
  var res = []
  while (firstPointer < arr.length && secondPointer < arr.length) {
    let temp = arr.slice(firstPointer, secondPointer + 1)

    for (var j = 0; j < temp.length; j++) {
      if (temp[j] < 0) {
        res.push(temp[j]);
        break
      } else if (j === temp.length - 1) {
        res.push('0')
        break
      }
    }

    firstPointer += 1
    secondPointer += 1
  }

  return res.join(" ")

}
//   f     f
//.   1 -2 -3 -4 5 6 -7
