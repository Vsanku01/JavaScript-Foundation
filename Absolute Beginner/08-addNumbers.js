var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    var length = parseInt(userInput[0])
    var breadth = parseInt(userInput[1])
    console.log(area(length, breadth))
    
})

var totalArea = 0
function area(length, breadth){
    totalArea = length +  breadth;
    return totalArea
    
    
}