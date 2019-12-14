// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// RECURSION-1 //

function factorial(n){
  if (n < 0) {
    return;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(1) // → 1	1	✔	
factorial(2) // → 2	2	✔	
factorial(3) // → 6	6	✔	
factorial(4) // → 24	24	✔	
factorial(5) // → 120	120	✔	
factorial(6) // → 720	720	✔	
factorial(7) // → 5040	5040	✔	
factorial(8) // → 40320	40320	✔	
factorial(12) // → 479001600	479001600	✔


function bunnyEars(bunnies){
  if (bunnies < 0) {
    return;
  }
  if (bunnies === 0) {
    return 0;
  }
  return 2 + bunnyEars(bunnies - 1);
}
bunnyEars(0) // → 0	0	✔	
bunnyEars(1) // → 2	2	✔	
bunnyEars(2) // → 4	4	✔	
bunnyEars(3) // → 6	6	✔	
bunnyEars(4) // → 8	8	✔	
bunnyEars(5) // → 10	10	✔	
bunnyEars(12) // → 24	24	✔	
bunnyEars(50) // → 100	100	✔	
bunnyEars(234) // → 468	468	✔


function fibonacci(n){
  if (n < 0) {
    return;
  }
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(0) // → 0	0	✔	
fibonacci(1) // → 1	1	✔	
fibonacci(2) // → 1	1	✔	
fibonacci(3) // → 2	2	✔	
fibonacci(4) // → 3	3	✔	
fibonacci(5) // → 5	5	✔	
fibonacci(6) // → 8	8	✔	
fibonacci(7) // → 13	13	✔


function bunnyEars2(bunnies){
  if (bunnies < 0) {
    return;
  }
  if (bunnies === 0) {
    return 0;
  }
  if (bunnies % 2) {
    return 2 + bunnyEars2(bunnies - 1);
  }
  return 3 + bunnyEars2(bunnies - 1);
}
bunnyEars2(0) // → 0	0	✔	
bunnyEars2(1) // → 2	2	✔	
bunnyEars2(2) // → 5	5	✔	
bunnyEars2(3) // → 7	7	✔	
bunnyEars2(4) // → 10	10	✔	
bunnyEars2(5) // → 12	12	✔	
bunnyEars2(6) // → 15	15	✔	
bunnyEars2(10) // → 25	25	✔


function triangle(rows){
  if (rows < 0) {
    return;
  }
  if (rows === 0) {
    return 0;
  }
  return rows + triangle(rows - 1);
}
triangle(0) // → 0	0	✔	
triangle(1) // → 1	1	✔	
triangle(2) // → 3	3	✔	
triangle(3) // → 6	6	✔	
triangle(4) // → 10	10	✔	
triangle(5) // → 15	15	✔	
triangle(6) // → 21	21	✔	
triangle(7) // → 28	28	✔


function sumDigits1(n){
  let next = Math.floor(n / 10);
  if (next < 0) {
    return;
  }
  if (next === 0) {
    return n;
  }
  return n % 10 + sumDigits1(next);
}
sumDigits1(126) // → 9	9	✔	
sumDigits1(49) // → 13	13	✔	
sumDigits1(12) // → 3	3	✔	
sumDigits1(10) // → 1	1	✔	
sumDigits1(1) // → 1	1	✔	
sumDigits1(0) // → 0	0	✔	
sumDigits1(730) // → 10	10	✔	
sumDigits1(1111) // → 4	4	✔	
sumDigits1(11111) // → 5	5	✔	
sumDigits1(10110) // → 3	3	✔	
sumDigits1(235) // → 10	10	✔


