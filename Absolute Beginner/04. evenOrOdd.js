var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    degreeToCelsius(userInput[0])
    
})

function degreeToCelsius(number){
    if (number === 0){
        console.log('Zero')
        
    }
    if ( Math.round(number) % 2 === 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
    
}