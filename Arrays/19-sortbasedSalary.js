/*
You are a software engineer at an MNC. You are given the task of sorting the employees in your company based on their salary. Perform the task so that the employees, including yourself, will get a bonus from the management.

CONSTRAINT:

0<=salary<=1000000

 

Input Description:
Number of employees followed by their name and salary

Output Description:
Sorted list of employee names

Sample Input :
3
Karthik 23000 rohan 81734 varshini 12343
Sample Output :
varshini
Karthik
Rohan
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
  var arr = userInput[1].split(" ");
  difference(arr);
});

function difference(arr) {
  var obj = {};
  var data = [];
  function diff(arr) {
    for (var i = 0; i < arr.length; i += 2) {
      data.push({
        name: arr[i],
        salary: arr[i + 1],
      });
    }

    return obj;
  }

  obj = diff(arr);
  var finalArr = data.sort(function (a, b) {
    return a.salary - b.salary;
  });

  var res = [];
  for (var i = 0; i < data.length; i++) {
    var name = data[i].name;
    var salary = +data[i].salary;
    if (0 <= salary <= 1000000) {
      res.push(name);
    }
  }
  console.log(res.join("\n"));
}
