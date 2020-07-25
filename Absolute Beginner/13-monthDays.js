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
    if (num <= 12){
        numOfDays(num)
    }
    else {
        console.log('Error')
    }
    
})
// ¼(√3a2) 

function numOfDays(month){
    if (month === 2) {
        console.log('28')
    }
    
    if (month === 0){
        console.log("Error")
    }
    
   else if (month !== 2 && month % 2 === 0){
        console.log('31')
    }
    else if (month !== 2 && month % 2 !== 0) {
        console.log('30')
    }
    
    
}