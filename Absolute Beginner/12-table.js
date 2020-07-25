var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    interest(userInput)
    
})
// ¼(√3a2) 

function interest(number){
    var s = []
    for (var i = 1; i <= number ; i ++){
        s.push(9 * i )
    }
    console.log(s.join(' '));
    
}