console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s) {
  let num = s.split(',');
  res = 0;
  for (n of num) {
    res += +n;
  }
  return res;
}
