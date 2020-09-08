var obj = {
  mykey: 'value',
  mykey2: 'value',
};
function getProperty(obj, key) {
  if (key in obj) {
    return obj[key];
  }
  return;
}

console.log(getProperty(obj, 'mykey'));
console.log(getProperty(obj, 'dummykey'));
