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

function findSmallest(numbers)
{
    var values = numbers
    var max = 0
    for (var i = 0; i< values.length; i ++){
        values[i] = parseInt(values[i])
        if ( values[i] > max){
            max = values[i]
        }
    }
    
    console.log(max)
}