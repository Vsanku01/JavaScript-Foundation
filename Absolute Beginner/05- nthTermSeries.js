var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    nTermOfSeries(userInput[0])
    
})

function nTermOfSeries(N){
    console.log (N * N)
    
}