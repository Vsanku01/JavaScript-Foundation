var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    var side = (userInput[0])
    console.log(areaOfEquilateral(side))
    
})
// ¼(√3a2) 

function areaOfEquilateral(side){
    if (side < 0){
        return "Error" 
    }
    var circumferenceValue = Math.sqrt(3) / 4 * Math.pow(side, 2)
    return circumferenceValue.toFixed(2)
    
    
}