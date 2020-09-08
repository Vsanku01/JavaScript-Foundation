var arr= [
    [['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
    [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]
];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 for(let i =0; i< arr.length; i++){
     let temp = arr[i]
     let obj = {}
     for(let j =0 ; j < temp.length; j++){
         let key = temp[j][0]
         let value = temp[j][1]
         obj[key] = value
     }
     tranformEmployeeList.push(obj)
 }
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr))