function arithmetic(operationIdx,operationArray) {
    var param1 = 100;
    var param2 = 20;
    return operationArray[operationIdx](param1, param2)
}

function add(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
}

let operationArray = [add, subtract, multiply, divide]

for (operation in operationArray){
    console.log(arithmetic(operation,operationArray))
}