var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    console.log(factorial(userInput[0]))
    
})

function factorial(N){
    if ( N === 0){
        return 1 
    }
    
    return N * factorial(N-1);
    
}