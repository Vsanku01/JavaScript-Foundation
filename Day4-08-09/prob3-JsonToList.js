var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
 let array = [];
 for(const property in obj){
     array.push([`${property},${obj[property]}`])
 }
 return array;
}
console.log(convertListToObject(obj))