var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    console.log(interest(userInput))
    
})


function interest(data){
    var num = data[0].split(" ")
    var finalInterest = (num[0]) * (num[1]) * (num[2])  / 100
    return finalInterest.toFixed(2)
    
}