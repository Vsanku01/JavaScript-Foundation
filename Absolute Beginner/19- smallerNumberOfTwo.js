var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    numbers = (userInput)
    findSmallest(numbers)
    
})
// ¼(√3a2) 

function findSmallest(numbers)
{
    var data = numbers[0].split(' ')
    console.log(Math.min(data[0], data[1]))
}