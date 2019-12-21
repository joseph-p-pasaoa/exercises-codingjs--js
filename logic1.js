// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// LOGIC-1 //

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