let arr = [2, 3, 4, null, "96", undefined, 0];

function countEvenOdd (){
let zeroСount = 0;
let numberСount = 0;
let evenСount = 0;
let oddСount = 0;
let otherСount = 0;
for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === "number") {
  numberСount += 1;
} if (arr[i] === 0) {
  zeroСount += 1;  
}  if (typeof(arr[i]) != 'number') {
   otherСount += 1;
 } else if (arr[i] % 2 === 0) {
   evenСount += 1;
 } else {
   oddСount += 1;
   
}} console.log(`В массиве: ${numberСount} цифры, из них: ${zeroСount} нулей, ${evenСount} чётных цифр, ${oddСount} нечётных цифр, и ${otherСount} других элемента!`);
}

countEvenOdd ()


// вариант 2

let arr1 = [2, 3, 4, null, "96", undefined, 0];

function countEvenOdd (){
let zeroСount = 0;
let numberСount = 0;
let evenСount = 0;
let oddСount = 0;
let otherСount = 0;
for (let i = 0; i < arr1.length; i++) {
if (typeof arr1[i] === "number") {
  numberСount += 1;
} if (arr1[i] === 0) {
  zeroСount += 1;  
}  if (typeof(arr1[i]) != 'number') {
   otherСount += 1;
 } else if (arr1[i] % 2 === 0) {
   evenСount += 1;
 } else {
   oddСount += 1;
   
}} return [numberСount, zeroСount, evenСount, oddСount, otherСount];
}

let result = countEvenOdd();

 console.log("Чисел " + result[0]);
 console.log("Нулей " + result[1]);
 console.log("Четных " + result[2]);
 console.log("Нечетных " + result[3]);
 console.log("Других " + result[4]);