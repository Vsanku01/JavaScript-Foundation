printPrimes(100, 50);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes, startAt) {
  var n = 0;
  var i = startAt;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, ' → ', i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  let flag = 0;
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      flag = 1;
      return false;
    }
  }
  if (flag == 0) {
    return true;
  }
}
