let arr = ['abba', 'geeks'];

var palindromeStrings = (arr) => {
  res = [];
  for (str of arr) {
    if (str == str.split('').reverse().join('')) {
      res.push(str);
    }
  }
  return res;
};

console.log('Palindromic String in the given array: ', palindromeStrings(arr));
