var num = -5;
function getOpposite(num) {
   let sign = Math.sign(num)
   if (sign == 1){
       return -Math.abs(num)
   }
   else{
       return Math.abs(num)
   }
}
var result = getOpposite(num)
console.log(result)