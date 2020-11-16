// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// LOGIC-1
//



/* CIGARPARTY
When squirrels get together for a party, they like to have cigars. A squirrel party is successful when
the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is
no upper bound on the number of cigars. Return true if the party with the given values is successful,
or false otherwise.
*/

function cigarParty(cigars, isWeekend){
  return !(cigars < 40 || (!isWeekend && cigars > 60))
}
cigarParty(30, false); // → false	false	✔	
cigarParty(50, false); // → true	true	✔	
cigarParty(70, true); // → true	true	✔	
cigarParty(30, true); // → false	false	✔	
cigarParty(50, true); // → true	true	✔	
cigarParty(60, false); // → true	true	✔	
cigarParty(61, false); // → false	false	✔	
cigarParty(40, false); // → true	true	✔	
cigarParty(39, false); // → false	false	✔	
cigarParty(40, true); // → true	true	✔	
cigarParty(39, true); // → false	false	✔


/* DATEFASHION
You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of
your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result
getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish,
8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less,
then the result is 0 (no). Otherwise the result is 1 (maybe).
*/

function dateFashion(you, date){
  if (you <= 2 || date <= 2) {
    return 0;
  }
  if (you >= 8 || date >= 8) {
    return 2;
  }
  return 1;
}
dateFashion(5, 10); // → 2	2	✔	
dateFashion(5, 2); // → 0	0	✔	
dateFashion(5, 5); // → 1	1	✔	
dateFashion(3, 3); // → 1	1	✔	
dateFashion(10, 2); // → 0	0	✔	
dateFashion(2, 9); // → 0	0	✔	
dateFashion(9, 9); // → 2	2	✔	
dateFashion(10, 5); // → 2	2	✔	
dateFashion(2, 2); // → 0	0	✔	
dateFashion(3, 7); // → 1	1	✔	
dateFashion(2, 7); // → 0	0	✔	
dateFashion(6, 2); // → 0	0	✔


/* SQUIRRELPLAY
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature
is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90.
Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.
*/

function squirrelPlay(temp, isSummer){
  return !(temp < 60 || (isSummer ? temp > 100 : temp > 90));
}
squirrelPlay(70, false); // → true	true	✔	
squirrelPlay(95, false); // → false	false	✔	
squirrelPlay(95, true); // → true	true	✔	
squirrelPlay(90, false); // → true	true	✔	
squirrelPlay(90, true); // → true	true	✔	
squirrelPlay(50, false); // → false	false	✔	
squirrelPlay(50, true); // → false	false	✔	
squirrelPlay(100, false); // → false	false	✔	
squirrelPlay(100, true); // → true	true	✔	
squirrelPlay(105, true); // → false	false	✔	
squirrelPlay(59, false); // → false	false	✔	
squirrelPlay(59, true); // → false	false	✔	
squirrelPlay(60, false); // → true	true	✔


/* CAUGHTSPEEDING
You are driving a little too fast, and a police officer stops you. Write code to compute the
result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or
less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81
or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher
in all cases.
*/

function caughtSpeeding(speed, isBirthday){
  let speedOfRecord = speed;
  if (isBirthday) {
    speedOfRecord -= 5;
  }
  if (speedOfRecord <= 60) {
    return 0;
  }
  if (speedOfRecord <= 80) {
    return 1;
  }
  return 2;
}
caughtSpeeding(60, false); // → 0	0	✔	
caughtSpeeding(65, false); // → 1	1	✔	
caughtSpeeding(65, true); // → 0	0	✔	
caughtSpeeding(80, false); // → 1	1	✔	
caughtSpeeding(85, false); // → 2	2	✔	
caughtSpeeding(85, true); // → 1	1	✔	
caughtSpeeding(70, false); // → 1	1	✔	
caughtSpeeding(75, false); // → 1	1	✔	
caughtSpeeding(75, true); // → 1	1	✔	
caughtSpeeding(40, false); // → 0	0	✔	
caughtSpeeding(40, true); // → 0	0	✔	
caughtSpeeding(90, false); // → 2	2	✔


/* SORTASUM
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive,
are forbidden, so in that case just return 20.
*/

function sortaSum(a, b){
  if (a + b >= 10 && a + b <= 19) {
    return 20;
  }
  return a + b;
}
sortaSum(3, 4); // → 7	7	✔	
sortaSum(9, 4); // → 20	20	✔	
sortaSum(10, 11); // → 21	21	✔	
sortaSum(12, -3); // → 9	9	✔	
sortaSum(-3, 12); // → 9	9	✔	
sortaSum(4, 5); // → 9	9	✔	
sortaSum(4, 6); // → 20	20	✔	
sortaSum(14, 7); // → 21	21	✔	
sortaSum(14, 6); // → 20	20	✔


/* ALARMCLOCK
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if
we are on vacation, return a string of the form "7:00" indicating when the alarm clock should
ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we
are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
*/

function alarmClock(day, vacation){
  if (!vacation && (day >=1 && day <= 5)) {
    return "7:00";
  }
  if (vacation && (day === 0 || day === 6)) {
    return "off";
  }
  return "10:00";
}
alarmClock(1, false); // → 7:00	7:00	✔	
alarmClock(5, false); // → 7:00	7:00	✔	
alarmClock(0, false); // → 10:00	10:00	✔	
alarmClock(6, false); // → 10:00	10:00	✔	
alarmClock(0, true); // → off	off	✔	
alarmClock(6, true); // → off	off	✔	
alarmClock(1, true); // → 10:00	10:00	✔	
alarmClock(3, true); // → 10:00	10:00	✔	
alarmClock(5, true); // → 10:00	10:00	✔


/* LOVE6
The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6.
Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of
a number.
*/

function love6(a, b){
  return (a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6);
}
love6(6, 4); // → true	true	✔	
love6(4, 5); // → false	false	✔	
love6(1, 5); // → true	true	✔	
love6(1, 6); // → true	true	✔	
love6(1, 8); // → false	false	✔	
love6(1, 7); // → true	true	✔	
love6(7, 5); // → false	false	✔	
love6(8, 2); // → true	true	✔	
love6(6, 6); // → true	true	✔	
love6(-6, 2); // → false	false	✔	
love6(-4, -10); // → true	true	✔	
love6(-7, 1); // → false	false	✔	
love6(7, -1); // → true	true	✔	
love6(-6, 12); // → true	true	✔	
love6(-2, -4); // → false	false	✔	
love6(7, 1); // → true	true	✔	
love6(0, 9); // → false	false	✔	
love6(8, 3); // → false	false	✔	
love6(3, 3); // → true	true	✔	
love6(3, 4); // → false	false	✔


/* IN1TO10
Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode"
is true, in which case return tru
*/

function in1To10(n, outsideMode){
  if (outsideMode) {
    return n <= 1 || n >= 10;
  }
  return n >= 1 && n <= 10;
}
in1To10(5, false); // → true	true	✔	
in1To10(11, false); // → false	false	✔	
in1To10(11, true); // → true	true	✔	
in1To10(10, false); // → true	true	✔	
in1To10(10, true); // → true	true	✔	
in1To10(9, false); // → true	true	✔	
in1To10(9, true); // → false	false	✔	
in1To10(1, false); // → true	true	✔	
in1To10(1, true); // → true	true	✔	
in1To10(0, false); // → false	false	✔	
in1To10(0, true); // → true	true	✔	
in1To10(-1, false); // → false	false	✔


/* SPECIALELEVEN
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple
of 11. Return true if the given non-negative number is special. Use the % "mod" operator.
*/

function specialEleven(n){
  return (n % 11 === 0 || n % 11 === 1);
}
specialEleven(22); // → true	true	✔	
specialEleven(23); // → true	true	✔	
specialEleven(24); // → false	false	✔	
specialEleven(21); // → false	false	✔	
specialEleven(11); // → true	true	✔	
specialEleven(12); // → true	true	✔	
specialEleven(10); // → false	false	✔	
specialEleven(9); // → false	false	✔	
specialEleven(8); // → false	false	✔	
specialEleven(0); // → true	true	✔	
specialEleven(1); // → true	true	✔	
specialEleven(2); // → false	false	✔	
specialEleven(121); // → true	true	✔	
specialEleven(122); // → true	true	✔	
specialEleven(123); // → false	false	✔	
specialEleven(46); // → false	false	✔	
specialEleven(49); // → false	false	✔	
specialEleven(52); // → false	false	✔	
specialEleven(54); // → false	false	✔	
specialEleven(55); // → true	true	✔


/* MORE20
Return true if the given non-negative number is 1 or 2 more than a multiple of 20.
*/

function more20(n){
  return (n % 20 === 1 || n % 20 === 2);
}
more20(20); // → false	false	✔	
more20(21); // → true	true	✔	
more20(22); // → true	true	✔	
more20(23); // → false	false	✔	
more20(25); // → false	false	✔	
more20(30); // → false	false	✔	
more20(31); // → false	false	✔	
more20(59); // → false	false	✔	
more20(60); // → false	false	✔	
more20(61); // → true	true	✔	
more20(62); // → true	true	✔	
more20(1020); // → false	false	✔	
more20(1021); // → true	true	✔	
more20(1000); // → false	false	✔	
more20(1001); // → true	true	✔	
more20(50); // → false	false	✔	
more20(55); // → false	false	✔	
more20(40); // → false	false	✔	
more20(41); // → true	true	✔	
more20(39); // → false	false	✔	
more20(42); // → true	true	✔


/* OLD35
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.
*/

function old35(n){
  if (!(n % 3) && !(n % 5)) {
    return false;
  }
  return (!(n % 3) || !(n % 5));
}
old35(3) // → true	true	✔	
old35(10) // → true	true	✔	
old35(15) // → false	false	✔	
old35(5) // → true	true	✔	
old35(9) // → true	true	✔	
old35(8) // → false	false	✔	
old35(7) // → false	false	✔	
old35(6) // → true	true	✔	
old35(17) // → false	false	✔	
old35(18) // → true	true	✔	
old35(29) // → false	false	✔	
old35(20) // → true	true	✔	
old35(21) // → true	true	✔	
old35(22) // → false	false	✔	
old35(45) // → false	false	✔	
old35(99) // → true	true	✔


/* LESS20
Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for
example 38 and 39 return true, but 40 returns false.
*/

function less20(n){
  return ((n + 1) % 20 === 0 || (n + 2) % 20 === 0);  
}
less20(18) // → true	true	✔	
less20(19) // → true	true	✔	
less20(20) // → false	false	✔	
less20(8) // → false	false	✔	
less20(17) // → false	false	✔	
less20(23) // → false	false	✔	
less20(25) // → false	false	✔	
less20(30) // → false	false	✔	
less20(31) // → false	false	✔	
less20(58) // → true	true	✔	
less20(59) // → true	true	✔	
less20(60) // → false	false	✔	
less20(61) // → false	false	✔	
less20(62) // → false	false	✔	
less20(1017) // → false	false	✔	
less20(1018) // → true	true	✔	
less20(1019) // → true	true	✔	
less20(1020) // → false	false	✔	
less20(1021) // → false	false	✔	
less20(1022) // → false	false	✔	
less20(1023) // → false	false	✔	
less20(37) // → false	false	✔


/* NEARTEN
Given a non-negative number "num", return true if num is within 2 of a multiple of 10.
Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
*/

function nearTen(num){
  return num % 10 <= 2 || num % 10 >= 8;
}
nearTen(12) // → true	true	✔	
nearTen(17) // → false	false	✔	
nearTen(19) // → true	true	✔	
nearTen(31) // → true	true	✔	
nearTen(6) // → false	false	✔	
nearTen(10) // → true	true	✔	
nearTen(11) // → true	true	✔	
nearTen(21) // → true	true	✔	
nearTen(22) // → true	true	✔	
nearTen(23) // → false	false	✔	
nearTen(54) // → false	false	✔	
nearTen(155) // → false	false	✔	
nearTen(158) // → true	true	✔	
nearTen(3) // → false	false	✔	
nearTen(1) // → true	true	✔


/* TEENSUM
Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive,
are extra lucky. So if either value is a teen, just return 19.
*/

function teenSum(a,b){
  if (a >= 13 && a <= 19 || b >= 13 && b <= 19) {
    return 19;
  }
  return a + b;
}
teenSum(3, 4) // → 7	7	✔	
teenSum(10, 13) // → 19	19	✔	
teenSum(13, 2) // → 19	19	✔	
teenSum(3, 19) // → 19	19	✔	
teenSum(13, 13) // → 19	19	✔	
teenSum(10, 10) // → 20	20	✔	
teenSum(6, 14) // → 19	19	✔	
teenSum(15, 2) // → 19	19	✔	
teenSum(19, 19) // → 19	19	✔	
teenSum(19, 20) // → 19	19	✔	
teenSum(2, 18) // → 19	19	✔	
teenSum(12, 4) // → 16	16	✔	
teenSum(2, 20) // → 22	22	✔	
teenSum(2, 17) // → 19	19	✔	
teenSum(2, 16) // → 19	19	✔	
teenSum(6, 7) // → 13	13	✔


/* ANSWERCELL
Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning
you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.
*/

function answerCell(isMorning,isMom,isAsleep){
  if (isAsleep || isMorning && !isMom) {
    return false;
  }
  return true;
}
answerCell(false, false, false) // → true	true	✔	
answerCell(false, false, true) // → false	false	✔	
answerCell(true, false, false) // → false	false	✔	
answerCell(true, true, false) // → true	true	✔	
answerCell(false, true, false) // → true	true	✔	
answerCell(true, true, true) // → false	false	✔


/* TEAPARTY
We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as
0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either
tea or candy is at least double the amount of the other one, the party is great (2). However, in all
cases, if either tea or candy is less than 5, the party is always bad (0).
*/

function teaParty(tea,candy){
  if (tea < 5 || candy < 5) {
    return 0;
  }
  if (tea / candy <= 0.5 || tea /candy >= 2) {
    return 2;
  }
  return 1;
}
teaParty(6, 8) // → 1	1	✔	
teaParty(3, 8) // → 0	0	✔	
teaParty(20, 6) // → 2	2	✔	
teaParty(12, 6) // → 2	2	✔	
teaParty(11, 6) // → 1	1	✔	
teaParty(11, 4) // → 0	0	✔	
teaParty(4, 5) // → 0	0	✔	
teaParty(5, 5) // → 1	1	✔	
teaParty(6, 6) // → 1	1	✔	
teaParty(5, 10) // → 2	2	✔	
teaParty(5, 9) // → 1	1	✔	
teaParty(10, 4) // → 0	0	✔	
teaParty(10, 20) // → 2	2	✔


/* FIZZSTRING
Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return
"Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return
the string unchanged.
*/

function fizzString(str){
  if (str[0] === 'f' && str[str.length - 1] === 'b') {
    return 'FizzBuzz';
  }
  if (str[0] === 'f') {
    return 'Fizz';
  }
  if (str[str.length - 1] === 'b') {
    return 'Buzz';
  }
  return str;
}
fizzString('fig') // → Fizz	Fizz	✔	
fizzString('dib') // → Buzz	Buzz	✔	
fizzString('fib') // → FizzBuzz	FizzBuzz	✔	
fizzString('abc') // → abc	abc	✔	
fizzString('fooo') // → Fizz	Fizz	✔	
fizzString('booo') // → booo	booo	✔	
fizzString('ooob') // → Buzz	Buzz	✔	
fizzString('fooob') // → FizzBuzz	FizzBuzz	✔	
fizzString('f') // → Fizz	Fizz	✔	
fizzString('b') // → Buzz	Buzz	✔	
fizzString('abcb') // → Buzz	Buzz	✔	
fizzString('Hello') // → Hello	Hello	✔	
fizzString('Hellob') // → Buzz	Buzz	✔	
fizzString('af') // → af	af	✔	
fizzString('bf') // → bf	bf	✔	
fizzString('fb') // → FizzBuzz	FizzBuzz	✔


/* FIZZSTRING2
Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except
if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5
use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the
remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides
evenly into another?
*/

function fizzString2(n){
  if (!(n % 3) && !(n % 5)) {
    return 'FizzBuzz!';
  }
  if (!(n % 3)) {
    return 'Fizz!';
  }
  if (!(n % 5)) {
    return 'Buzz!';
  }
  return n + '!';
}
fizzString2(1) // → 1!	1!	✔	
fizzString2(2) // → 2!	2!	✔	
fizzString2(3) // → Fizz!	Fizz!	✔	
fizzString2(4) // → 4!	4!	✔	
fizzString2(5) // → Buzz!	Buzz!	✔	
fizzString2(6) // → Fizz!	Fizz!	✔	
fizzString2(7) // → 7!	7!	✔	
fizzString2(8) // → 8!	8!	✔	
fizzString2(9) // → Fizz!	Fizz!	✔	
fizzString2(15) // → FizzBuzz!	FizzBuzz!	✔	
fizzString2(16) // → 16!	16!	✔	
fizzString2(18) // → Fizz!	Fizz!	✔	
fizzString2(19) // → 19!	19!	✔	
fizzString2(21) // → Fizz!	Fizz!	✔	
fizzString2(44) // → 44!	44!	✔	
fizzString2(45) // → FizzBuzz!	FizzBuzz!	✔	
fizzString2(100) // → Buzz!	Buzz!	✔


/* TWOASONE
Given three ints, a b c, return true if it is possible to add two of the ints to get the third.
*/

function twoAsOne(a,b,c){
  return a + b === c || a - b === c || b - a === c;
}
twoAsOne(1, 2, 3) // → true	true	✔	
twoAsOne(3, 1, 2) // → true	true	✔	
twoAsOne(3, 2, 2) // → false	false	✔	
twoAsOne(2, 3, 1) // → true	true	✔	
twoAsOne(5, 3, -2) // → true	true	✔	
twoAsOne(5, 3, -3) // → false	false	✔	
twoAsOne(2, 5, 3) // → true	true	✔	
twoAsOne(9, 5, 5) // → false	false	✔	
twoAsOne(9, 4, 5) // → true	true	✔	
twoAsOne(5, 4, 9) // → true	true	✔	
twoAsOne(3, 3, 0) // → true	true	✔	
twoAsOne(3, 3, 2) // → false	false	✔


/* INORDER
Given three ints, a b c, return true if b is greater than a, and c is greater than b. However,
with the exception that if "bOk" is true, b does not need to be greater than a.
*/

function inOrder(a,b,c,bOk){
  if (c > b) {
    return b > a || bOk;
  }
  return false;
}
inOrder(1, 2, 4, false) // → true	true	✔	
inOrder(1, 2, 1, false) // → false	false	✔	
inOrder(1, 1, 2, true) // → true	true	✔	
inOrder(3, 2, 4, false) // → false	false	✔	
inOrder(2, 3, 4, false) // → true	true	✔	
inOrder(3, 2, 4, true) // → true	true	✔	
inOrder(4, 2, 2, true) // → false	false	✔	
inOrder(4, 5, 2, true) // → false	false	✔	
inOrder(2, 4, 6, true) // → true	true	✔	
inOrder(7, 9, 10, false) // → true	true	✔	
inOrder(7, 5, 6, true) // → true	true	✔	
inOrder(7, 5, 4, true) // → false	false	✔


/* INORDEREQUAL
Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7,
but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed,
such as 5 5 7 or 5 5 5.
*/

function inOrderEqual(a,b,c,equalOk){
  if (equalOk) {
    return a <= b && b <= c;
  }
  return a < b && b < c;
}
inOrderEqual(2, 5, 11, false) // → true	true	✔	
inOrderEqual(5, 7, 6, false) // → false	false	✔	
inOrderEqual(5, 5, 7, true) // → true	true	✔	
inOrderEqual(5, 5, 7, false) // → false	false	✔	
inOrderEqual(2, 5, 4, false) // → false	false	✔	
inOrderEqual(3, 4, 3, false) // → false	false	✔	
inOrderEqual(3, 4, 4, false) // → false	false	✔	
inOrderEqual(3, 4, 3, true) // → false	false	✔	
inOrderEqual(3, 4, 4, true) // → true	true	✔	
inOrderEqual(1, 5, 5, true) // → true	true	✔	
inOrderEqual(5, 5, 5, true) // → true	true	✔	
inOrderEqual(2, 2, 1, true) // → false	false	✔	
inOrderEqual(9, 2, 2, true) // → false	false	✔	
inOrderEqual(0, 1, 0, true) // → false	false	✔


/* LASTDIGITOFTHREE
Given three ints, a b c, return true if two or more of them have the same rightmost digit. The
ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.
*/

function lastDigitOfThree(a,b,c){
  const aDigit = a % 10;
  const bDigit = b % 10;
  const cDigit = c % 10;
  return aDigit === bDigit || bDigit === cDigit || cDigit === aDigit;
}
lastDigitOfThree(23, 19, 13) // → true	true	✖	
lastDigitOfThree(23, 19, 12) // → false	false	✔	
lastDigitOfThree(23, 19, 3) // → true	true	✔	
lastDigitOfThree(23, 19, 39) // → true	true	✔	
lastDigitOfThree(1, 2, 3) // → false	false	✔	
lastDigitOfThree(1, 1, 2) // → true	true	✔	
lastDigitOfThree(1, 2, 2) // → true	true	✔	
lastDigitOfThree(14, 25, 43) // → false	false	✔	
lastDigitOfThree(14, 25, 45) // → true	true	✔	
lastDigitOfThree(248, 106, 1002) // → false	false	✔	
lastDigitOfThree(248, 106, 1008) // → true	true	✖	
lastDigitOfThree(10, 11, 20) // → true	true	✖	
lastDigitOfThree(0, 11, 0) // → true	true	✔


/* LESSBY10
Given three ints, a b c, return true if one of them is 10 or more less than one of the others.
*/

function lessBy10(a,b,c){
  const aDist = Math.abs(a - b);
  const bDist = Math.abs(b - c);
  const cDist = Math.abs(c - a);
  return aDist >= 10 || bDist >= 10 || cDist >= 10;
}
lessBy10(1, 7, 11) // → true	true	✔	
lessBy10(1, 7, 10) // → false	false	✔	
lessBy10(11, 1, 7) // → true	true	✔	
lessBy10(10, 7, 1) // → false	false	✔	
lessBy10(-10, 2, 2) // → true	true	✔	
lessBy10(2, 11, 11) // → false	false	✔	
lessBy10(3, 3, 30) // → true	true	✔	
lessBy10(3, 3, 3) // → false	false	✔	
lessBy10(10, 1, 11) // → true	true	✔	
lessBy10(10, 11, 1) // → true	true	✔	
lessBy10(10, 11, 2) // → false	false	✔	
lessBy10(3, 30, 3) // → true	true	✔	
lessBy10(2, 2, -8) // → true	true	✔	
lessBy10(2, 8, 12) // → true	true	✔


/* WITHOUTDOUBLES
Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true,
if the two dice show the same value, increment one die to the next value, wrapping around to 1
if its value was 6.
*/

function withoutDoubles(die1,die2,noDoubles){
  if (die1 === die2 && noDoubles) {  
    return die1 + die2 + (die1 === 6 ? -5 : 1);
  }
  return die1 + die2;
}
withoutDoubles(2, 3, true) // → 5	5	✔	
withoutDoubles(3, 3, true) // → 7	7	✔	
withoutDoubles(3, 3, false) // → 6	6	✔	
withoutDoubles(2, 3, false) // → 5	5	✔	
withoutDoubles(5, 4, true) // → 9	9	✔	
withoutDoubles(5, 4, false) // → 9	9	✔	
withoutDoubles(5, 5, true) // → 11	11	✔	
withoutDoubles(5, 5, false) // → 10	10	✔	
withoutDoubles(6, 6, true) // → 7	7	✔	
withoutDoubles(6, 6, false) // → 12	12	✔	
withoutDoubles(1, 6, true) // → 7	7	✔	
withoutDoubles(6, 1, false) // → 7	7	✔


/* MAXMOD5
Given two int values, return whichever value is larger. However if the two values have the same
remainder when divided by 5, then the return the smaller value. However, in all cases, if the
two values are the same, return 0. Note: the % "mod" operator computes the remainder,
e.g. 7 % 5 is 2.
*/

function maxMod5(a, b) {
  if (a === b) {
    return 0;
  } else if (a % 5 === b % 5) {
    return (a < b ? a : b);
  }
  return (a > b ? a : b);
}
console.log(
  'maxMod5: ',
  maxMod5(2, 3), // → 3
  maxMod5(6, 2), // → 6
  maxMod5(3, 2), // → 3
  maxMod5(2, 3), // → 3
  maxMod5(6, 2), // → 6
  maxMod5(3, 2), // → 3
  maxMod5(8, 12), // → 12
  maxMod5(7, 12), // → 7
  maxMod5(11, 6), // → 6
  maxMod5(2, 7), // → 2
  maxMod5(7, 7), // → 0
  maxMod5(9, 1), // → 9
  maxMod5(9, 14), // → 9
  maxMod5(1, 2) // → 2
)


/* REDTICKET
You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are
all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise
so long as both b and c are different from a, the result is 1. Otherwise the result is 0.
*/

function redTicket(a,b,c){
  if (a + b + c === 6) {
    return 10;
  }
  if (a + b + c === 0 || a * b * c === 1) {
    return 5;
  }
  return (a !== b && a !== c) ? 1 : 0;
}
redTicket(2, 2, 2) // → 10	10	✔	
redTicket(2, 2, 1) // → 0	0	✔	
redTicket(0, 0, 0) // → 5	5	✔	
redTicket(2, 0, 0) // → 1	1	✔	
redTicket(1, 1, 1) // → 5	5	✔	
redTicket(1, 2, 1) // → 0	0	✔	
redTicket(1, 2, 0) // → 1	1	✔	
redTicket(0, 2, 2) // → 1	1	✔	
redTicket(1, 2, 2) // → 1	1	✔	
redTicket(0, 2, 0) // → 0	0	✔	
redTicket(1, 1, 2) // → 0	0	✔


/* GREENTICKET
You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from
each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the
numbers are the same, the result is 10.
*/

function greenTicket(a,b,c){
  if (a === b && a === c) {
      return 20;
    }
  if (a === b || b === c || a === c) {
    return 10;
  }
  return 0;
}
greenTicket(1, 2, 3) // → 0	0	✔	
greenTicket(2, 2, 2) // → 20	20	✔	
greenTicket(1, 1, 2) // → 10	10	✔	
greenTicket(2, 1, 1) // → 10	10	✔	
greenTicket(1, 2, 1) // → 10	10	✔	
greenTicket(3, 2, 1) // → 0	0	✔	
greenTicket(0, 0, 0) // → 20	20	✔	
greenTicket(2, 0, 0) // → 10	10	✔	
greenTicket(0, 9, 10) // → 0	0	✔	
greenTicket(0, 10, 0) // → 10	10	✔	
greenTicket(9, 9, 9) // → 20	20	✔	
greenTicket(9, 0, 9) // → 10	10	✔


/* BLUETICKET
You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll
call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10,
the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result
is 5. Otherwise the result is 0.
*/

function blueTicket(a,b,c){
  const ab = a + b;
  const bc = b + c;
  const ac = a + c;
  if (ab === 10 || bc === 10 || ac === 10) {
    return 10;
  }
  if (ab - 10 === bc || ab - 10 === ac) {
    return 5;
  }
  return 0;
}
blueTicket(9, 1, 0) // → 10	10	✔	
blueTicket(9, 2, 0) // → 0	0	✔	
blueTicket(6, 1, 4) // → 10	10	✔	
blueTicket(6, 1, 5) // → 0	0	✔	
blueTicket(10, 0, 0) // → 10	10	✔	
blueTicket(15, 0, 5) // → 5	5	✔	
blueTicket(5, 15, 5) // → 10	10	✔	
blueTicket(4, 11, 1) // → 5	5	✔	
blueTicket(13, 2, 3) // → 5	5	✔	
blueTicket(8, 4, 3) // → 0	0	✔	
blueTicket(8, 4, 2) // → 10	10	✔	
blueTicket(8, 4, 1) // → 0	0	✔


/* SHAREDIGIT
Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers,
such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10
gives the right digit.)
*/

function shareDigit(a,b){
  let present = {};
  present[a % 10] = true;
  present[Math.floor(a / 10)] = true;
  return !!(present[b % 10] || present[Math.floor(b / 10)]);
}
shareDigit(12, 23) // → true	true	✔	
shareDigit(12, 43) // → false	false	✔	
shareDigit(12, 44) // → false	false	✔	
shareDigit(23, 12) // → true	true	✔	
shareDigit(23, 39) // → true	true	✔	
shareDigit(23, 19) // → false	false	✔	
shareDigit(30, 90) // → true	true	✔	
shareDigit(30, 91) // → false	false	✔	
shareDigit(55, 55) // → true	true	✔	
shareDigit(55, 44) // → false	false	✔


/* SUMLIMIT
Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of
digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute
the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n)
and then check the length of the string.)
*/

function sumLimit(a,b){
  const sum = a + b;
  if ((a + '').length < (sum + '').length) {
    return a;
  }
  return sum;
}
sumLimit(2, 3) // → 5	5	✔	
sumLimit(8, 3) // → 8	8	✔	
sumLimit(8, 1) // → 9	9	✔	
sumLimit(11, 39) // → 50	50	✔	
sumLimit(11, 99) // → 11	11	✔	
sumLimit(0, 0) // → 0	0	✔	
sumLimit(99, 0) // → 99	99	✔	
sumLimit(99, 1) // → 99	99	✔	
sumLimit(123, 1) // → 124	124	✔	
sumLimit(1, 123) // → 1	1	✔	
sumLimit(23, 60) // → 83	83	✔	
sumLimit(23, 80) // → 23	23	✔	
sumLimit(9000, 1) // → 9001	9001	✔	
sumLimit(90000000, 1) // → 90000001	90000001	✔	
sumLimit(9000, 1000) // → 9000	9000	✔
