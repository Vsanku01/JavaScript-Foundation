var readline = require('readline')

var input = readline.createInterface({
    input: process.stdin
})

const userInput = [];

input.on('line', function(values){
    userInput.push(values)
})

input.on('close', function(){
    year = (userInput)
    leapyear(year)
    
})
// ¼(√3a2) 

function leapyear(year)
{
if ( (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0) ){
    console.log('Y')
}
else {
    console.log('N')
}
}