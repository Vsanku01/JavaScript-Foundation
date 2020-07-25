var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    kmToMeters(userInput[0])
    
})

function kmToMeters(km){
    var meters = km * 1000
    var cm = meters * 100
    console.log(meters)
    console.log(cm)
    
}