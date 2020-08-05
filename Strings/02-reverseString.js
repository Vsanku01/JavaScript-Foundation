/*
 Jennyfer is fond of strings. She wants to read the character from right to left (reverse the string), so she wants you to design a suitable algorithm which satisfy her desire.

Input Description:
Enter the string ‘s’

Output Description:
Print the string from characters right to left.

Sample Input :
jennyfer
Sample Output :
Refynnej
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
  var str = userInput[0].split("").reverse().join("");
  console.log(str[0].toUpperCase() + str.slice(1));
});
