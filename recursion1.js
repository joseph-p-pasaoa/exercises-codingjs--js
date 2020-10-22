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


function catDog(input){
  function scan(str) {
    if (str.length < 3) return 0;

    const firstThree = str.slice(0, 3);

    if (firstThree === 'cat') {
      return -1 + scan(str.slice(3));
    }
    if (firstThree === 'dog') {
      return 1 + scan(str.slice(3));
    }
    return scan(str.slice(1));
  }
  
  const balance = scan(input);
  return balance === 0;
}

catDog('catdog') // → true	true	✔	
catDog('catcat') // → false	false	✔	
catDog('1cat1cadodog') // → true	true	✔	
catDog('catxxdogxxxdog') // → false	false	✔	
catDog('catxdogxdogxcat') // → true	true	✔	
catDog('catxdogxdogxca') // → false	false	✔	
catDog('dogdogcat') // → false	false	✔	
catDog('dogogcat') // → true	true	✔	
catDog('dog') // → false	false	✔	
catDog('cat') // → false	false	✔	
catDog('ca') // → true	true	✔	
catDog('c') // → true	true	✔	
catDog('') // → true	true	✔


function changeXY(str){
  if (str === '') return '';
  
  const char = str[0];
  const next = str.slice(1);
  if (char === 'x') {
    return 'y' + changeXY(next);
  } else {
    return char + changeXY(next);
  }
}
changeXY('codex') // → codey	codey	✔	
changeXY('xxhixx') // → yyhiyy	yyhiyy	✔	
changeXY('xhixhix') // → yhiyhiy	yhiyhiy	✔	
changeXY('hiy') // → hiy	hiy	✔	
changeXY('h') // → h	h	✔	
changeXY('x') // → y	y	✔	
changeXY('') // →		✔	
changeXY('xxx') // → yyy	yyy	✔	
changeXY('yyhxyi') // → yyhyyi	yyhyyi	✔	
changeXY('hihi') // → hihi	hihi	✔


function changePi(str){
  if (str.length < 2) return str;
  
  const firstTwo = str.slice(0, 2);
  if (firstTwo === 'pi') {
    return '3.14' + changePi(str.slice(2));
  } else {
    return str[0] + changePi(str.slice(1));
  }
}
changePi('xpix') // → x3.14x	x3.14x	✔	
changePi('pipi') // → 3.143.14	3.143.14	✔	
changePi('pip') // → 3.14p	3.14p	✔	
changePi('pi') // → 3.14	3.14	✔	
changePi('hip') // → hip	hip	✔	
changePi('p') // → p	p	✔	
changePi('x') // → x	x	✔	
changePi('') // →		✔	
changePi('pixx') // → 3.14xx	3.14xx	✔	
changePi('xyzzy') // → xyzzy	xyzzy	✔



// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function noX(str){
  if (str === '') return '';
  
  const [char, next] = [
    str[0],
    str.slice(1)
  ];
  if (char === 'x') {
    return noX(next);
  }
  return char + noX(next);
}
noX('xaxb') // → ab	ab	✔	
noX('abc') // → abc	abc	✔	
noX('xx') // →		✔	
noX('') // →		✔	
noX('axxbxx') // → ab	ab	✔	
noX('Hellox') // → Hello	Hello	✔



// Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering 
// only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 
// to move down the array. The initial call will pass in index as 0.
function array6(nums,i){
  const eval = nums[i];
  if (i > nums.length) {
    return false;
  }
  if (nums[i] === 6) {
    return true;
  }
  return array6(nums, i + 1);
}
array6([1, 6, 4], 0) // → true	true	✔	
array6([1, 4], 0) // → false	false	✔	
array6([6], 0) // → true	true	✔	
array6([], 0) // → false	false	✔	
array6([6, 2, 2], 0) // → true	true	✔	
array6([2, 5], 0) // → false	false	✔	
array6([1, 9, 4, 6, 6], 0) // → true	true	✔	
array6([2, 5, 6], 0) // → true	true	✔



// Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll 
// use the convention of considering only the part of the array that begins at the given index. In this way, a recursive 
// call can pass index+1 to move down the array. The initial call will pass in index as 0.
function array11(nums,i){
  if (i > nums.length) {
    return 0;
  }
  if (nums[i] === 11) {
    return 1 + array11(nums, i + 1);
  }
  return array11(nums, i + 1);
}
array11([1, 2, 11], 0) // → 1	1	✔	
array11([11, 11], 0) // → 2	2	✔	
array11([1, 2, 3, 4], 0) // → 0	0	✔	
array11([1, 11, 3, 11, 11], 0) // → 3	3	✔	
array11([11], 0) // → 1	1	✔	
array11([1], 0) // → 0	0	✔	
array11([], 0) // → 0	0	✔	
array11([11, 2, 3, 4, 11, 5], 0) // → 2	2	✔	
array11([11, 5, 11], 0) // → 2	2	✔



// Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that 
// value times 10. We'll use the convention of considering only the part of the array that begins at the given index. 
// In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
function array220(nums,i){
  if (i >= nums.length - 1) {
    return false;
  }

  const current = nums[i];
  const next = nums[i + 1];
  if (next / 10 === current) {
    return true;
  }

  return array220(nums, i + 1);
}
array220([1, 2, 20], 0) // → true	true	✔	
array220([3, 30], 0) // → true	true	✔	
array220([3], 0) // → false	false	✔	
array220([], 0) // → false	false	✔	
array220([3, 3, 30, 4], 0) // → true	true	✔	
array220([2, 19, 4], 0) // → false	false	✔	
array220([20, 2, 21], 0) // → false	false	✔	
array220([20, 2, 21, 210], 0) // → true	true	✔	
array220([2, 200, 2000], 0) // → true	true	✔	
array220([0, 0], 0) // → true	true	✔	
array220([1, 2, 3, 4, 5, 6], 0) // → false	false	✔	
array220([1, 2, 3, 4, 5, 50, 6], 0) // → true	true	✔	
array220([1, 2, 3, 4, 5, 51, 6], 0) // → false	false	✔	
array220([1, 2, 3, 4, 4, 50, 500, 6], 0) // → true	true	✔



// Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".
function allStar(str){
  if (str.length <= 1) return str;
  
  return str[0] + '*' + allStar(str.slice(1));
}
allStar('hello') // → h*e*l*l*o	h*e*l*l*o	✔	
allStar('abc') // → a*b*c	a*b*c	✔	
allStar('ab') // → a*b	a*b	✔	
allStar('a') // → a	a	✔	
allStar('') // →		✔	
allStar('3.14') // → 3*.*1*4	3*.*1*4	✔	
allStar('Chocolate') // → C*h*o*c*o*l*a*t*e	C*h*o*c*o*l*a*t*e	✔	
allStar('1234') // → 1*2*3*4	1*2*3*4	✔



// Given a string, compute recursively a new string where identical chars that are adjacent in the 
// original string are separated from each other by a "*"
function pairStar(str){
  if (str.length <= 1) return str;
  
  const [current, next] = [str[0], str[1]];
  if (current === next) {
    return current + '*' + pairStar(str.slice(1));
  }
  
  return current + pairStar(str.slice(1));
}
pairStar('hello') // → hel*lo	hel*lo	✔	
pairStar('xxyy') // → x*xy*y	x*xy*y	✔	
pairStar('aaaa') // → a*a*a*a	a*a*a*a	✔	
pairStar('aaab') // → a*a*ab	a*a*ab	✔	
pairStar('aa') // → a*a	a*a	✔	
pairStar('a') // → a	a	✔	
pairStar('') // →		✔	
pairStar('noadjacent') // → noadjacent	noadjacent	✔	
pairStar('abba') // → ab*ba	ab*ba	✔	
pairStar('abbba') // → ab*b*ba	ab*b*ba	✔



function endX(str){
  if (str === '') return '';
  
  const char = str[0];
  
  if (char === 'x') {
    return endX(str.slice(1)) + 'x';
  } else {
    return char + endX(str.slice(1));
  }
}

endX('xxre') // → rexx	rexx	✔	
endX('xxhixx') // → hixxxx	hixxxx	✔	
endX('xhixhix') // → hihixxx	hihixxx	✔	
endX('hiy') // → hiy	hiy	✔	
endX('h') // → h	h	✔	
endX('x') // → x	x	✔	
endX('xx') // → xx	xx	✔	
endX('') // →		✔	
endX('bxx') // → bxx	bxx	✔	
endX('bxax') // → baxx	baxx	✔	
endX('axaxax') // → aaaxxx	aaaxxx	✔	
endX('xxhxi') // → hixxx	hixxx	✔



function countPairs(str){
  if (str.length < 3) return 0;
  
  const [first, third] = [str[0], str[2]];
  
  if (first === third) {
    return 1 + countPairs(str.slice(1));
  } else {
    return countPairs(str.slice(1));
  }
}

countPairs('axa') // → 1	1	✔	
countPairs('axax') // → 2	2	✔	
countPairs('axbx') // → 1	1	✔	
countPairs('hi') // → 0	0	✔	
countPairs('hihih') // → 3	3	✔	
countPairs('ihihhh') // → 3	3	✔	
countPairs('ihjxhh') // → 0	0	✔	
countPairs('') // → 0	0	✔	
countPairs('a') // → 0	0	✔	
countPairs('aa') // → 0	0	✔	
countPairs('aaa') // → 1	1	✔


function countAbc(str){
  if (str.length < 3) return 0;
  
  const firstThree = str.slice(0, 3);
  if (firstThree === 'abc') {
    return 1 + countAbc(str.slice(3));
  }
  if (firstThree === 'aba') {
    return 1 + countAbc(str.slice(2));
  }
  
  return countAbc(str.slice(1));
}

countAbc('abc') // → 1	1	✔	
countAbc('abcxxabc') // → 2	2	✔	
countAbc('abaxxaba') // → 2	2	✔	
countAbc('ababc') // → 2	2	✔	
countAbc('abxbc') // → 0	0	✔	
countAbc('aaabc') // → 1	1	✔	
countAbc('hello') // → 0	0	✔	
countAbc('') // → 0	0	✔	
countAbc('ab') // → 0	0	✔	
countAbc('aba') // → 1	1	✔	
countAbc('aca') // → 0	0	✔	
countAbc('aaa') // → 0	0	✔


function count11(str){
  if (str.length < 2) return 0;
  
  const firstTwo = str.slice(0, 2);
  if (firstTwo === '11') {
    return 1 + count11(str.slice(2));
  }
  
  return count11(str.slice(1));
}

count11('11abc11') // → 2	2	✔	
count11('abc11x11x11') // → 3	3	✔	
count11('111') // → 1	1	✔	
count11('1111') // → 2	2	✔	
count11('1') // → 0	0	✔	
count11('') // → 0	0	✔	
count11('hi') // → 0	0	✔	
count11('11x111x1111') // → 4	4	✔	
count11('1x111') // → 1	1	✔	
count11('1Hello1') // → 0	0	✔	
count11('Hello') // → 0	0	✔


function stringClean(str){
  if (str.length < 2) return str;
  
  const [current, next] = [str[0], str[1]];
  return current === next
    ? stringClean(str.slice(1))
    : current + stringClean(str.slice(1));
}

stringClean('yyzzza') // → yza	yza	✔	
stringClean('abbbcdd') // → abcd	abcd	✔	
stringClean('Hello') // → Helo	Helo	✔	
stringClean('XXabcYY') // → XabcY	XabcY	✔	
stringClean('112ab445') // → 12ab45	12ab45	✔	
stringClean('Hello Bookkeeper') // → Helo Bokeper	Helo Bokeper	✔


function countHi2(str){
  if (str.length < 2) return 0;

  if (str[0] === 'x' && str.slice(1, 3) === 'hi') {
    return countHi2(str.slice(3));
  }
  
  if (str.slice(0, 2) === 'hi') {
    return 1 + countHi2(str.slice(2));
  }
  
  return countHi2(str.slice(1));
}

countHi2('ahixhi') // → 1	1	✔	
countHi2('ahibhi') // → 2	2	✔	
countHi2('xhixhi') // → 0	0	✔	
countHi2('hixhi') // → 1	1	✔	
countHi2('hixhhi') // → 2	2	✔	
countHi2('hihihi') // → 3	3	✔	
countHi2('hihihix') // → 3	3	✔	
countHi2('xhihihix') // → 2	2	✔	
countHi2('xxhi') // → 0	0	✔	
countHi2('hixxhi') // → 1	1	✔	
countHi2('hi') // → 1	1	✔	
countHi2('xxxx') // → 0	0	✔	
countHi2('h') // → 0	0	✔	
countHi2('x') // → 0	0	✔	
countHi2('') // → 0	0	✔	
countHi2('Hellohi') // → 1	1	✔


function starBit(str){
  if (str.length <= 2) return str;

  const mode = str.slice(-2);
  const firstTwo = str.slice(0, 2);

  if (mode === '**') {
    if (firstTwo === ' -') {
      return str.slice(1, -1); // FINAL RETURN
    } else {
      return starBit(str.slice(1)); // REMOVES POST-PHRASE CHARACTERS
    }

  } else if (mode === '--') { // ADDING TO RETURN
    if (str[0] === '*') {
      return starBit(str.slice(1, -2) + '**');
    } else {
      return starBit(str.slice(1, -2) + str[0] + '--');
    }

  } else {
    if (str[0] === '-') {
      return starBit(str.slice(1) + ' ---');
    } else {
      return starBit(str.slice(1)); // REMOVE PRE-PHRASE CHARACTERS
    }
  }
}

starBit('xyz,-abc*123') // → -abc*	-abc*	✔	
starBit('x,-hello*') // → -hello*	-hello*	✔	
starBit(',-xy*1') // → -xy*	-xy*	✔	
starBit('not really ,-possible*') // → -possible*	-possible*	✔	
starBit(',-abc*') // → -abc*	-abc*	✔	
starBit(',-abc*xyz') // → -abc*	-abc*	✔	
starBit(',-abc*x') // → -abc*	-abc*	✔	
starBit(',-x*') // → -x*	-x*	✔	
starBit(',-)*') // → -)*	-)*	✔	
starBit('res ,-ipsa* loquitor') // → -ipsa*	-ipsa*	✔	
starBit('hello,-not really*there') // → -not really*	-not really*	✔	
starBit('ab,-ab*ab') // → -ab*	-ab*	✔


function nestParen(str){
  const [first, last] = [
    str[0],
    str[str.length - 1]
  ];

  if (str.length <= 0) return true;
  
  if (first === '(' && last === ')') {
    return nestParen(str.slice(1, -1));
  }
  
  return false;
}

nestParen('(())') // → true	true	✔	
nestParen('((()))') // → true	true	✔	
nestParen('(((x))') // → false	false	✔	
nestParen('((())') // → false	false	✔	
nestParen('((()()') // → false	false	✔	
nestParen('()') // → true	true	✔	
nestParen('') // → true	true	✔	
nestParen('(yy)') // → false	false	✔	
nestParen('(())') // → true	true	✔	
nestParen('(((y))') // → false	false	✔	
nestParen('((y)))') // → false	false	✔	
nestParen('((()))') // → true	true	✔	
nestParen('(())))') // → false	false	✔	
nestParen('((yy())))') // → false	false	✔	
nestParen('(((())))') // → true	true	✔


function strCount(str,sub){
  const subLen = sub.length;
  
  if (str.length < subLen) return 0;
  
  const frag = str.slice(0, subLen);
  if (frag === sub) {
    return 1 + strCount(str.slice(subLen), sub);
  }
  
  return strCount(str.slice(1), sub);
}

strCount('catcowcat', 'cat') // → 2	2	✔	
strCount('catcowcat', 'cow') // → 1	1	✔	
strCount('catcowcat', 'dog') // → 0	0	✔	
strCount('cacatcowcat', 'cat') // → 2	2	✔	
strCount('xyx', 'x') // → 2	2	✔	
strCount('iiiijj', 'i') // → 4	4	✔	
strCount('iiiijj', 'ii') // → 2	2	✔	
strCount('iiiijj', 'iii') // → 1	1	✔	
strCount('iiiijj', 'j') // → 2	2	✔	
strCount('iiiijj', 'jj') // → 1	1	✔	
strCount('aaabababab', 'ab') // → 4	4	✔	
strCount('aaabababab', 'aa') // → 1	1	✔	
strCount('aaabababab', 'a') // → 6	6	✔	
strCount('aaabababab', 'b') // → 4	4	✔


function strCopies(str,sub,n){
  if (n <= 0) return true;
  if (str.length <= 0) return false;
  
  const frag = str.slice(0, sub.length);
  return frag === sub
    ? strCopies(str.slice(1), sub, n - 1)
    : strCopies(str.slice(1), sub, n);
}

strCopies('catcowcat', 'cat', 2) // → true	true	✔	
strCopies('catcowcat', 'cow', 2) // → false	false	✔	
strCopies('catcowcat', 'cow', 1) // → true	true	✔	
strCopies('iiijjj', 'i', 3) // → true	true	✔	
strCopies('iiijjj', 'i', 4) // → false	false	✔	
strCopies('iiijjj', 'ii', 2) // → true	true	✔	
strCopies('iiijjj', 'ii', 3) // → false	false	✔	
strCopies('iiijjj', 'x', 3) // → false	false	✔	
strCopies('iiijjj', 'x', 0) // → true	true	✔	
strCopies('iiiiij', 'iii', 3) // → true	true	✔	
strCopies('iiiiij', 'iii', 4) // → false	false	✔	
strCopies('ijiiiiij', 'iiii', 2) // → true	true	✔	
strCopies('ijiiiiij', 'iiii', 3) // → false	false	✔	
strCopies('dogcatdogcat', 'dog', 2) // → true	true	✔



