function isEven(num){
     if(num % 2 == 0){
         return true
     }else if(num % 2 !== 0){
         return false 
     }else{
         return '-1'
     }
   }
   var even = isEven(5)
   console.log(even)