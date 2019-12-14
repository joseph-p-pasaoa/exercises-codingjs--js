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


