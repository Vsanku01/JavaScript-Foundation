var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    string = (userInput)
    processString(string)
    
})


function processString(str){
    str = str.toString().replace(/\s+/g,'');
    console.log(str.length)
}