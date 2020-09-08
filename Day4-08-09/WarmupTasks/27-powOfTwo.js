function powersOfTwo(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  console.log(res);
}

powersOfTwo(2);
