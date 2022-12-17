function printNumbers(from, to) {
   let current = from;
 
   let intervalId = setInterval(function() {
     console.log(current);
     if (current == to) {
       clearInterval(intervalId);
     }
     current++;
   }, 1000);
 }
 
 
 printNumbers(3, 7);