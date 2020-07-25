var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    num = parseInt(userInput)
    multiplesOfNumber(num)
    
})
// ¼(√3a2) 

function multiplesOfNumber(number){
    var s = []
    for (var i =1 ; i <=3 ; i ++){
        s.push(number * i)
    }
    
    console.log(s.join(' '))
    
}