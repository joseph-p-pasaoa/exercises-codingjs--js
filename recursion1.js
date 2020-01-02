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


function count7(n){
  let next = Math.floor(n / 10);
  if (next === 0) {
    return n === 7 ? 1 : 0;
  }
  return (n % 10 === 7 ? 1 : 0) + count7(next);
}
count7(717) // → 2	2	✔	
count7(7) // → 1	1	✔	
count7(123) // → 0	0	✔	
count7(77) // → 2	2	✔	
count7(7123) // → 1	1	✔	
count7(771237) // → 3	3	✔	
count7(771737) // → 4	4	✔	
count7(47571) // → 2	2	✔	
count7(777777) // → 6	6	✔	
count7(70701277) // → 4	4	✔	
count7(777576197) // → 5	5	✔	
count7(99999) // → 0	0	✔	
count7(99799) // → 1	1	✔


function count8(n){
  const next = Math.floor(n / 10);
  if (next === 0) {
    return n === 8 ? 1 : 0;
  }
  if (n % 100 === 88) {
    return 2 + count8(next);
  }
  return (n % 10 === 8 ? 1 : 0) + count8(next);
}
count8(8) // → 1	1	✔	
count8(818) // → 2	2	✔	
count8(8818) // → 4	4	✔	
count8(8088) // → 4	4	✔	
count8(123) // → 0	0	✔	
count8(81238) // → 2	2	✔	
count8(88788) // → 6	6	✔	
count8(8234) // → 1	1	✔	
count8(2348) // → 1	1	✔	
count8(23884) // → 3	3	✔	
count8(0) // → 0	0	✔	
count8(1818188) // → 5	5	✔	
count8(8818181) // → 5	5	✔	
count8(1080) // → 1	1	✔	
count8(188) // → 3	3	✔	
count8(88888) // → 9	9	✔	
count8(9898) // → 2	2	✔	
count8(78) // → 1	1	✔


function powerN(base,n){
  if (n < 1) {
    return;
  }
  if (n === 1) {
    return base;
  }
  return base * powerN(base, n - 1);
}
powerN(3, 1) // → 3	3	✔	
powerN(3, 2) // → 9	9	✔	
powerN(3, 3) // → 27	27	✔	
powerN(2, 1) // → 2	2	✔	
powerN(2, 2) // → 4	4	✔	
powerN(2, 3) // → 8	8	✔	
powerN(2, 4) // → 16	16	✔	
powerN(2, 5) // → 32	32	✔	
powerN(10, 1) // → 10	10	✔	
powerN(10, 2) // → 100	100	✔	
powerN(10, 3) // → 1000	1000	✔


function countX(str){
  if (str.length < 1) {
    return 0;
  }
  if (str.length === 1) {
    return str[0] === 'x' ? 1 : 0;
  }
  return (str[0] === 'x' ? 1 : 0) + countX(str.slice(1));
}
countX('xxhixx') // → 4	4	✔	
countX('xhixhix') // → 3	3	✔	
countX('hi') // → 0	0	✔	
countX('h') // → 0	0	✔	
countX('x') // → 1	1	✔	
countX('') // → 0	0	✔	
countX('hihi') // → 0	0	✔	
countX('hiAAhi12hi') // → 0	0	✔


function countHi(str){
  if (str.length < 2) {
    return 0;
  }
  if (str.length === 2) {
    return str === 'hi' ? 1 : 0;
  }
  return (str.slice(0, 2) === 'hi' ? 1 : 0) + countHi(str.slice(1));
}
countHi('abc hi ho') // → 1	1	✔	
countHi('ABChi hi') // → 2	2	✔	
countHi('hihi') // → 2	2	✔	
countHi('hiHIhi') // → 2	2	✔	
countHi('') // → 0	0	✔	
countHi('h') // → 0	0	✔	
countHi('hi') // → 1	1	✔	
countHi('Hi is no HI on ahI') // → 0	0	✔	
countHi('hiho not HOHIhi') // → 2	2	✔


function changeXY(str){
  if (str.length < 1) {
    return '';
  }
  if (str.length === 1) {
    return str === 'x' ? 'y' : str;
  }
  return (str[0] === 'x' ? 'y' : str[0]) + changeXY(str.slice(1));
}
changeXY('codex') // → codey	codey	✔	
changeXY('xxhixx') // → yyhiyy	yyhiyy	✔	
changeXY('xhixhix') // → yhiyhiy	yhiyhiy	✔	
changeXY('hiy') // → hiy	hiy	✔	
changeXY('h') // → h	h	✔	
changeXY('x') // → y	y	✔	
changeXY('') →		✔	
changeXY('xxx') // → yyy	yyy	✔	
changeXY('yyhxyi') // → yyhyyi	yyhyyi	✔	
changeXY('hihi') // → hihi	hihi	✔


