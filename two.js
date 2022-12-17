function isPrimeNumber(num){
   for (let i = 2; i < num; i++)
   
   if ((num < 2) || (num > 1000)) {
       return "is not correct!";
   } 
   for (let i = 2; i < num; i++)
        if (num % i === 0) {
               return "не простое число";
           }
           else {return "простое число";}}

let randomNum = Math.floor(Math.random() * 1100);
let result = isPrimeNumber(randomNum);
console.log("Число " + randomNum + ' = ' + result);