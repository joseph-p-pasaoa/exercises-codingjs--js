/* 
Joseph P. Pasaoa
JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
WARMUP-1
*/



/* SLEEPIN
The parameter weekday is true if it is a weekday, and the parameter
vacation is true if we are on vacation. We sleep in if it is not a
weekday or we're on vacation. Return true if we sleep in.
*/

function sleepIn(weekday,vacation){
  return !weekday || vacation;
}
sleepIn(true, true); // → true	true	✔	
sleepIn(true, false); // → false	false	✔	
sleepIn(false, true); // → true	true	✔	
sleepIn(false, false); // → true	true	✔



/* MONKEYTROUBLE
We have two monkeys, a and b, and the parameters aSmile and bSmile 
indicate if each is smiling. We are in trouble if they are both smiling 
or if neither of them is smiling. Return true if we are in trouble.
*/

function monkeyTrouble(aSmile,bSmile){
  return aSmile === bSmile;
}
monkeyTrouble(true, true); // → true	true	✔	
monkeyTrouble(false, false); // → true	true	✔	
monkeyTrouble(true, false); // → false	false	✔	
monkeyTrouble(false, true); // → false	false	✔



/* SUMDOUBLE
Given two int values, return their sum. Unless the two values are the same, 
then return double their sum.
*/

function sumDouble(a,b){
  return (a === b
    ? a * 4
    : a + b
  );
}

sumDouble(1, 2); // → 3	3	✔	
sumDouble(3, 2); // → 5	5	✔	
sumDouble(2, 2); // → 8	8	✔	
sumDouble(-1, 0); // → -1	-1	✔	
sumDouble(3, 3); // → 12	12	✔	
sumDouble(0, 0); // → 0	0	✔	
sumDouble(0, 1); // → 1	1	✔	
sumDouble(3, 4); // → 7	7	✔



/* DIFF21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
*/

function diff21(n){
  let aDiff = Math.abs(21 - n);
  if (n > 21) {
    return aDiff * 2;
  }
  return aDiff;
}
diff21(19); // → 2	2	✔	
diff21(10); // → 11	11	✔	
diff21(21); // → 0	0	✔	
diff21(22); // → 2	2	✔	
diff21(25); // → 8	8	✔	
diff21(30); // → 18	18	✔	
diff21(0); // → 21	21	✔	
diff21(1); // → 20	20	✔	
diff21(2); // → 19	19	✔	
diff21(-1); // → 22	22	✔	
diff21(-2); // → 23	23	✔	
diff21(50); // → 58	58	✔



/* PARROTTROUBLE
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
*/

function parrotTrouble(talking,hour){
  if (talking) {
    return hour < 7 || 20 < hour;
  }
  return false;
}
parrotTrouble(true, 6); // → true	true	✔	
parrotTrouble(true, 7); // → false	false	✔	
parrotTrouble(false, 6); // → false	false	✔	
parrotTrouble(true, 21); // → true	true	✔	
parrotTrouble(false, 21); // → false	false	✔	
parrotTrouble(true, 23); // → true	true	✔	
parrotTrouble(false, 23); // → false	false	✔	
parrotTrouble(true, 20); // → false	false	✔	
parrotTrouble(false, 12); // → false	false	✔



/* MAKES10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
*/

function makes10(a,b){
  return a === 10 || b === 10 || a + b === 10;
}
makes10(9, 10); // → true	true	✔	
makes10(9, 9); // → false	false	✔	
makes10(1, 9); // → true	true	✔	
makes10(10, 1); // → true	true	✔	
makes10(10, 10); // → true	true	✔	
makes10(8, 2); // → true	true	✔	
makes10(8, 3); // → false	false	✔	
makes10(10, 42); // → true	true	✔	
makes10(12, -2); // → true	true	✔



/* NEARHUNDRED
Given an int n, return true if it is within 10 of 100 or 200. 
Note: Math.abs(num) computes the absolute value of a number.
*/

function nearHundred(n){
  let a = Math.abs(100 - n) <= 10;
  let b = Math.abs(200 - n) <= 10;
  return a || b;
}
nearHundred(93); // → true	true	✔	
nearHundred(90); // → true	true	✔	
nearHundred(89); // → false	false	✔	
nearHundred(110); // → true	true	✔	
nearHundred(111); // → false	false	✔	
nearHundred(121); // → false	false	✔	
nearHundred(0); // → false	false	✔	
nearHundred(5); // → false	false	✔	
nearHundred(191); // → true	true	✔	
nearHundred(189); // → false	false	✔



/* POSNEG
Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, then return true only if 
both are negative.
*/

function posNeg(a,b,negative){
  if (negative) {
    return a < 0 && b < 0;
  }
  return (a < 0 && b > 0) || (a > 0 && b < 0);
}
posNeg(1, -1, false); // → true	true	✔	
posNeg(-1, 1, false); // → true	true	✔	
posNeg(-4, -5, true); // → true	true	✔	
posNeg(-4, -5, false); // → false	false	✔	
posNeg(-4, 5, false); // → true	true	✔	
posNeg(-4, 5, true); // → false	false	✔	
posNeg(1, 1, false); // → false	false	✔	
posNeg(-1, -1, false); // → false	false	✔	
posNeg(1, -1, true); // → false	false	✔	
posNeg(-1, 1, true); // → false	false	✔	
posNeg(1, 1, true); // → false	false	✔	
posNeg(-1, -1, true); // → true	true	✔	
posNeg(5, -5, false); // → true	true	✔	
posNeg(-6, 6, false); // → true	true	✔	
posNeg(-5, -6, false); // → false	false	✔	
posNeg(-2, -1, false); // → false	false	✔	
posNeg(1, 2, false); // → false	false	✔	
posNeg(-5, 6, true); // → false	false	✔	
posNeg(-5, -5, true); // → true	true	✔



/* NOTSTRING
Given a string, return a new string where "not " has been added to the 
front. However, if the string already begins with "not", return the string 
unchanged.
*/

function notString(str){
  if (str.slice(0, 3) !== 'not') {
    return 'not ' + str;
  }
  return str;
}
notString('candy'); // → not candy	not candy	✔	
notString('x'); // → not x	not x	✔	
notString('not bad'); // → not bad	not bad	✔	
notString('bad'); // → not bad	not bad	✔	
notString('not'); // → not	not	✔	
notString('is not'); // → not is not	not is not	✔	
notString('no'); // → not no	not no	✔



/* MISSINGCHAR
Given a non-empty string and an int n, return a new string where the char at
index n has been removed. The value of n will be a valid index of a char in the
original string (i.e. n will be in the range 0..str.length()-1 inclusive).
*/

function missingChar(str,n){
  let arr = str.split('').splice(n, 1);
  return arr.join('');
}
missingChar('kitten', 1); // → ktten	ktten	✔	
missingChar('kitten', 0); // → itten	itten	✔	
missingChar('kitten', 4); // → kittn	kittn	✔	
missingChar('Hi', 0); // → i	i	✔	
missingChar('Hi', 1); // → H	H	✔	
missingChar('code', 0); // → ode	ode	✔	
missingChar('code', 1); // → cde	cde	✔	
missingChar('code', 2); // → coe	coe	✔	
missingChar('code', 3); // → cod	cod	✔	
missingChar('chocolate', 8); // → chocolat	chocolat	✔



/* FRONTBACK
Given a string, return a new string where the first and last chars have been
exchanged.
*/

function frontBack(str){
  const output = str.split('');
  [
    output[0],
    output[output.length - 1]
  ] = [
    output[output.length - 1],
    output[0]
  ];

  return output.join('');
}
frontBack('code') // → eodc	eodc	✔	
frontBack('a') // → a	a	✔	
frontBack('ab') // → ba	ba	✔	
frontBack('abc') // → cba	cba	✔	
frontBack('') // →		✔	
frontBack('Chocolate') // → ehocolatC	ehocolatC	✔	
frontBack('aavj') // → java	java	✔	
frontBack('hello') // → oellh	oellh	✔ 



/* FRONT3
Given a string, we'll say that the front is the first 3 chars of the string. If
the string length is less than 3, the front is whatever is there. Return a new
string which is 3 copies of the front.
*/

function front3(str){
  const firstThree = str.slice(0, 3);

  return firstThree + firstThree + firstThree;
}
front3('Java') // → JavJavJav	JavJavJav	✔	
front3('Chocolate') // → ChoChoCho	ChoChoCho	✔	
front3('abc') // → abcabcabc	abcabcabc	✔	
front3('abcXYZ') // → abcabcabc	abcabcabc	✔	
front3('ab') // → ababab	ababab	✔	
front3('a') // → aaa	aaa	✔	
front3('') // →		✔



/* BACKAROUND
Given a string, take the last char and return a new string with the last char
added at the front and back, so 'cat' yields 'tcatt' The original string will
be length 1 or more.
*/

function backAround(str){
  const lastChar = str[str.length - 1];

  return lastChar + str + lastChar;
}
backAround('cat') // → tcatt	tcatt	✔	
backAround('Hello') // → oHelloo	oHelloo	✔	
backAround('a') // → aaa	aaa	✔	
backAround('abc') // → cabcc	cabcc	✔	
backAround('read') // → dreadd	dreadd	✔	
backAround('boo') // → obooo	obooo	✔



/* OR35
Return true if the given non-negative number is a multiple of 3 or a multiple
of 5. (Hint: Use the % 'mod' operator)
*/

function or35(n){
  return n % 3 === 0 || n % 5 === 0;
}
or35(3) // → true	true	✔	
or35(10) // → true	true	✔	
or35(8) // → false	false	✔	
or35(15) // → true	true	✔	
or35(5) // → true	true	✔	
or35(4) // → false	false	✔	
or35(9) // → true	true	✔	
or35(4) // → false	false	✔	
or35(7) // → false	false	✔	
or35(6) // → true	true	✔	
or35(17) // → false	false	✔	
or35(18) // → true	true	✔	
or35(29) // → false	false	✔	
or35(20) // → true	true	✔	
or35(21) // → true	true	✔	
or35(22) // → false	false	✔	
or35(45) // → true	true	✔	
or35(99) // → true	true	✔	
or35(100) // → true	true	✔	
or35(101) // → false	false	✔	
or35(121) // → false	false	✔	
or35(122) // → false	false	✔	
or35(123) // → true	true	✔



/* FRONT22
Given a string, take the first 2 chars and return the string with the 2 chars
added at both the front and back, so 'kitten' yields 'kikittenki' chars are
there.
*/

function front22(str){
  const firstTwo = str.slice(0, 2);

  return firstTwo + str + firstTwo;
}
front22('kitten') // → kikittenki	kikittenki	✔	
front22('Ha') // → HaHaHa	HaHaHa	✔	
front22('abc') // → ababcab	ababcab	✔	
front22('ab') // → ababab	ababab	✔	
front22('a') // → aaa	aaa	✔	
front22('') // →		✔	
front22('Logic') // → LoLogicLo	LoLogicLo	✔



/* STARTHI
Given a string, return true if the string starts with 'hi'and false otherwise.
*/

function startHi(str){
  return str.slice(0, 2) === "hi";
}
startHi('hi there') // → true	true	✔	
startHi('hi') // → true	true	✔	
startHi('hello hi') // → false	false	✔	
startHi('he') // → false	false	✔	
startHi('h') // → false	false	✔	
startHi('') // → false	false	✔	
startHi('ho hi') // → false	false	✔	
startHi('hi ho') // → true	true	✔



/* ICYHOT
Given two temperatures, return true if one is less than 0 and the other is greater than 100.
*/

function icyHot(temp1,temp2){
  if (temp1 < 0) {
    return temp2 > 100;
  }
  if (temp1 > 100) {
    return temp2 < 0;
  }
  return false;
}
icyHot(120, -1) // → true	true	✔	
icyHot(-1, 120) // → true	true	✔	
icyHot(2, 120) // → false	false	✔	
icyHot(-1, 100) // → false	false	✔	
icyHot(-2, 120) // → true	true	✔	
icyHot(120, 120) // → false	false	✔



/* IN1020
Given 2 int values, return true if either of them is in the range 10..20 inclusive.
*/

function in1020(a,b){
  return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
}
in1020(12, 99) // → true	true	✔	
in1020(21, 12) // → true	true	✔	
in1020(8, 99) // → false	false	✔	
in1020(99, 10) // → true	true	✔	
in1020(20, 20) // → true	true	✔	
in1020(21, 21) // → false	false	✔	
in1020(9, 9) // → false	false	✔



/* HASTEEN
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.
*/

function hasTeen(a,b,c){
  return
    (a >= 13 && a <= 19) ||
    (b >= 13 && b <= 19) ||
    (c >= 13 && c <= 19);
}
hasTeen(13, 20, 10) // → true	true	✔	
hasTeen(20, 19, 10) // → true	true	✔	
hasTeen(20, 10, 13) // → true	true	✔	
hasTeen(1, 20, 12) // → false	false	✔	
hasTeen(19, 20, 12) // → true	true	✔	
hasTeen(12, 20, 19) // → true	true	✔	
hasTeen(12, 9, 20) // → false	false	✔	
hasTeen(12, 18, 20) // → true	true	✔	
hasTeen(14, 2, 20) // → true	true	✔	
hasTeen(4, 2, 20) // → false	false	✔	
hasTeen(11, 22, 22) // → false	false	✔



/* LONETEEN
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values,
return true if one or the other is teen, but not both.
*/

function loneTeen(a,b){
  const yesA = a >= 13 && a <= 19;
  const yesB = b >= 13 && b <= 19;
  if (yesA) {
    return !yesB;
  }
  if (yesB) {
    return !yesA;
  }
  return false;
}
loneTeen(13, 99) // → true	true	✔	
loneTeen(21, 19) // → true	true	✔	
loneTeen(13, 13) // → false	false	✔	
loneTeen(14, 20) // → true	true	✔	
loneTeen(20, 15) // → true	true	✔	
loneTeen(16, 17) // → false	false	✔	
loneTeen(16, 9) // → true	true	✔	
loneTeen(16, 18) // → false	false	✔	
loneTeen(13, 19) // → false	false	✔	
loneTeen(13, 20) // → true	true	✔	
loneTeen(6, 18) // → true	true	✔	
loneTeen(99, 13) // → true	true	✔	
loneTeen(99, 99) // → false	false	✔



/*
*/

function delDel(str){
  if (str.slice(1, 4) === "del") {
    return str[0] + str.slice(4);
  }
  return str;
}
delDel('adelbc') // → abc	abc	✔	
delDel('adelHello') // → aHello	aHello	✔	
delDel('abcdel') // → abcdel	abcdel	✔	
delDel('add') // → add	add	✔	
delDel('ad') // → ad	ad	✔	
delDel('a') // → a	a	✔	
delDel('') // →		✔	
delDel('del') // → del	del	✔	
delDel('adel') // → a	a	✔	
delDel('aadelbb') // → aadelbb	aadelbb	✔



/*
*/

function mixStart(str){
  return str.slice(1, 3) === "ix";
}
mixStart('mix snacks') // → true	true	✔	
mixStart('pix snacks') // → true	true	✔	
mixStart('piz snacks') // → false	false	✔	
mixStart('nix') // → true	true	✔	
mixStart('ni') // → false	false	✔	
mixStart('n') // → false	false	✔



/*
*/

function startOz(str){
  return (str[0] === "o" ? "o" : "") + (str[1] === "z" ? "z" : "");
}
startOz('ozymandias') // → oz	oz	✔	
startOz('bzoo') // → z	z	✔	
startOz('oxx') // → o	o	✔	
startOz('ounce') // → o	o	✔	
startOz('o') // → o	o	✔	
startOz('abc') // →		✔	
startOz('') // →		✔	
startOz('zoo') // →		✔	
startOz('aztec') // → z	z	✔	
startOz('zzzz') // → z	z	✔	
startOz('oznic') // → oz	oz	✔



/*
*/

function intMax(a,b,c){
  if (a > b) {
    return a > c ? a : c;
  }
  return b > c ? b : c;
}
intMax(1, 2, 3) // → 3	3	✔	
intMax(1, 3, 2) // → 3	3	✔	
intMax(3, 2, 1) // → 3	3	✔	
intMax(9, 3, 3) // → 9	9	✔	
intMax(3, 9, 3) // → 9	9	✔	
intMax(3, 3, 9) // → 9	9	✔	
intMax(8, 2, 3) // → 8	8	✔	
intMax(-3, -1, -2) // → -1	-1	✔	
intMax(6, 2, 5) // → 6	6	✔	
intMax(5, 6, 2) // → 6	6	✔	
intMax(5, 2, 6) // → 6	6	✔



/*
*/

function close10(a,b){
  if ((a + b) / 2 === 10) {
    return 0;
  }
  return Math.abs(10 - a) < Math.abs(10 - b) ? a : b;
}
close10(8, 13) // → 8	8	✔	
close10(13, 8) // → 8	8	✔	
close10(13, 7) // → 0	0	✔	
close10(7, 13) // → 0	0	✔	
close10(9, 13) // → 9	9	✔	
close10(13, 8) // → 8	8	✔	
close10(10, 12) // → 10	10	✔	
close10(11, 10) // → 10	10	✔	
close10(5, 21) // → 5	5	✔	
close10(0, 20) // → 0	0	✔	
close10(0, 20) // → 0	0	✔	
close10(10, 10) // → 0	0	✔



/*
*/

function in3050(a,b){
  if (a === 40) {
    return b >= 30 && b <= 50;
  }
  if (a < 40 && a >= 30) {
    return b >= 30 && b <= 40;
  }
  if (a > 40 && a <= 50) {
    return b >= 40 && b <= 50;
  }
  return false;
}
in3050(30, 31) // → true	true	✔	
in3050(30, 41) // → false	false	✔	
in3050(40, 50) // → true	true	✔	
in3050(40, 51) // → false	false	✔	
in3050(39, 50) // → false	false	✔	
in3050(50, 39) // → false	false	✔	
in3050(40, 39) // → true	true	✔	
in3050(49, 48) // → true	true	✔	
in3050(50, 40) // → true	true	✔	
in3050(50, 51) // → false	false	✔	
in3050(35, 36) // → true	true	✔	
in3050(35, 45) // → false	false	✔



/*
*/

function max1020(a,b){
  if (a >= 10 && a <= 20) {
    if (b >= 10 && b <= 20) {
      return a > b ? a : b;
    }
    return a;
  }
  if (b >= 10 && b <= 20) {
    return b;
  }
  return 0;
}
max1020(11, 19) // → 19	19	✔	
max1020(19, 11) // → 19	19	✔	
max1020(11, 9) // → 11	11	✔	
max1020(9, 21) // → 0	0	✔	
max1020(10, 21) // → 10	10	✔	
max1020(21, 10) // → 10	10	✔	
max1020(9, 11) // → 11	11	✔	
max1020(23, 10) // → 10	10	✔	
max1020(20, 10) // → 20	20	✔	
max1020(7, 20) // → 20	20	✔	
max1020(17, 16) // → 17	17	✔



/*
*/

function stringE(str){
  let counter = 3;
  for (let char of str) {
    if (char === 'e') {
      counter -= 1;
    }
    if (counter < 0) {
      return false;
    }
  }
  return counter === 3 ? false : true;
}
stringE('Hello') // → true	true	✔	
stringE('Heelle') // → true	true	✔	
stringE('Heelele') // → false	false	✔	
stringE('HII') // → false	false	✔	
stringE('e') // → true	true	✔	
stringE('') // → false	false	✔



/*
*/

function lastDigit(a,b){
  return a % 10 === b % 10;
}
lastDigit(7, 17) // → true	true	✔	
lastDigit(6, 17) // → false	false	✔	
lastDigit(3, 113) // → true	true	✔	
lastDigit(114, 113) // → false	false	✔	
lastDigit(114, 4) // → true	true	✔	
lastDigit(10, 0) // → true	true	✔	
lastDigit(11, 0) // → false	false	✔



/*
*/

function endUp(str){
  return str.slice(0, -3) + str.slice(-3).toUpperCase();
}
endUp('Hello') // → HeLLO	HeLLO	✔	
endUp('hi there') // → hi thERE	hi thERE	✔	
endUp('hi') // → HI	HI	✔	
endUp('woo hoo') // → woo HOO	woo HOO	✔	
endUp('xyz12') // → xyZ12	xyZ12	✔	
endUp('x') // → X	X	✔	
endUp('') // →		✔



/*
*/

function everyNth(str,n){
  let output = "";
  for (let i = 0; i < str.length; i += n) {
    output += str[i];
  }
  return output;
}
everyNth('Miracle', 2) // → Mrce	Mrce	✔	
everyNth('abcdefg', 2) // → aceg	aceg	✔	
everyNth('abcdefg', 3) // → adg	adg	✔	
everyNth('Chocolate', 3) // → Cca	Cca	✔	
everyNth('Chocolates', 3) // → Ccas	Ccas	✔	
everyNth('Chocolates', 4) // → Coe	Coe	✔	
everyNth('Chocolates', 100) // → C	C	✔
