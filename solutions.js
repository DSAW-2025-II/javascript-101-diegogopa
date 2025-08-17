// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== "number" || typeof b !== "number") {
  console.log("Los datos de entrada no son adecuados");
  return;
}
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if(n<0){
    return undefined;
  }
  if(n==0){
    return 1;
  }
  else{
    let result=1;
    for(let rep=n;rep>=1;rep--){
      result=result*rep;
    }
    return result;
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
  }
  let max = arr[0]; // empezamos con el primer número
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // actualizamos si encontramos uno mayor
    }
  }
  return max;
  
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
   if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let count = 0;
  let vowels = "aeiouAEIOU"; // incluimos mayúsculas
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
   if (typeof n !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n <= 1) return false; // 0 y 1 no son primos
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // si tiene divisor, no es primo
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
