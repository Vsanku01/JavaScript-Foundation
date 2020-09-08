var obj = { name: 'RajiniKanth', age: 33, hasPets: false };
function printAllKeys(obj) {
  let array = [];
  for (const property in obj) {
    array.push(`${property}`);
  }
  return array;
}

console.log(printAllKeys(obj));
