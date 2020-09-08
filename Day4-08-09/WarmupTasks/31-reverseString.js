var s = reverseString('JavaScript');
console.log(s);
function reverseString(s) {
  return s.split('').reverse().join('');
}
