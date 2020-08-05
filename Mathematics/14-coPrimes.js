/*
Assume your brother studies in class 2. He has to  complete his homework on co-primes. As an elder sibling help him in finding whether the given two numbers is co-prime or not.

Input Description:
You will be given two numbers ‘n’ and ‘m’

Output Description:
Your task is to tell whether numbers is co prime or not. If it is a co-prime print 1 else 0

Sample Input :
3 5
Sample Output :
1
*/
const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin,
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  var data = userInput[0].split(" ");
  var a = +data[0];
  var b = +data[1];
  coprime(a, b);
});

function coprime(a, b) {
  if (gcd(a, b) === 1) {
    console.log(1);
  } else {
    console.log(0);
  }
}

function gcd(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  if (a == b) {
    return a;
  }

  if (a > b) {
    return gcd(a - b, b);
  }

  return gcd(a, b - a);
}
