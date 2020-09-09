let arr = ['abba', 'geeks'];

var res = (arr) => {
  res = [];
  for (str of arr) {
    if (str == str.split('').reverse().join('')) {
      res.push(str);
    }
  }
  return res;
};

console.log('Palindromic String in the given array: ', res(arr));
