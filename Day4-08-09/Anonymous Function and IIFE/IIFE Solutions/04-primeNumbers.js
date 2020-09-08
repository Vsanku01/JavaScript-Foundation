arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function isPrime(arr) {
  let res = [];
  for (i = 0; i < arr.length; i++) {
    counter = 0;
    for (j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        counter = 1;
        break;
      }
    }
    if (counter == 0) {
      res.push(arr[i]);
    }
  }
  console.log(res);
})(arr);
