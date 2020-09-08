var obj = { name: 'RajiniKanth', age: 33, hasPets: false };
function printAllValues(obj) {
  let array = [];
  for (const property in obj) {
    array.push(`${obj[property]}`);
  }
  return array;
}

console.log(printAllValues(obj));
