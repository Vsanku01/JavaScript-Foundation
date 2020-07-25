var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    var radius = (userInput[0])
    console.log(circumference(radius))
    
})

function circumference(radius){
    if (radius < 0){
        return "Error" 
    }
    var circumferenceValue = 2 * Math.PI * radius ;
    return circumferenceValue.toFixed(2)
    
    
}