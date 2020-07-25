var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    console.log(degreeToCelsius(userInput[0]))
    
})

function degreeToCelsius(celsius){
    var far = celsius * 9 / 5 + 32
    return far.toFixed(2)
    
}