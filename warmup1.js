function sleepIn(weekday,vacation){
  return !weekday || vacation;
}
sleepIn(true, true); // → true	true	✔	
sleepIn(true, false); // → false	false	✔	
sleepIn(false, true); // → true	true	✔	
sleepIn(false, false); // → true	true	✔


function monkeyTrouble(aSmile,bSmile){
  return aSmile && bSmile || !aSmile && !bSmile;
}
monkeyTrouble(true, true); // → true	true	✔	
monkeyTrouble(false, false); // → true	true	✔	
monkeyTrouble(true, false); // → false	false	✔	
monkeyTrouble(false, true); // → false	false	✔


function sumDouble(a,b){
  return (a === b ? a * 4 : a + b);
}

sumDouble(1, 2); // → 3	3	✔	
sumDouble(3, 2); // → 5	5	✔	
sumDouble(2, 2); // → 8	8	✔	
sumDouble(-1, 0); // → -1	-1	✔	
sumDouble(3, 3); // → 12	12	✔	
sumDouble(0, 0); // → 0	0	✔	
sumDouble(0, 1); // → 1	1	✔	
sumDouble(3, 4); // → 7	7	✔


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


function parrotTrouble(talking,hour){
  return talking && hour < 7 || talking && hour > 20;
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


function posNeg(a,b,negative){
  if (negative) {
    return a < 0 && b < 0;
  }
  return a < 0 && b > 0 || a > 0 && b < 0;
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


function missingChar(str,n){
  let arr = str.split('');
  let no = arr.splice(n, 1);
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


function frontBack(str){
  let output = str.split('');
  let temp = output.shift();
  output.unshift(output.pop());
  output.push(temp);
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


function front3(str){
  return str.slice(0,3) + str.slice(0,3) + str.slice(0,3);
}
      front3('Java') // → JavJavJav	JavJavJav	✔	
      front3('Chocolate') // → ChoChoCho	ChoChoCho	✔	
      front3('abc') // → abcabcabc	abcabcabc	✔	
      front3('abcXYZ') // → abcabcabc	abcabcabc	✔	
      front3('ab') // → ababab	ababab	✔	
      front3('a') // → aaa	aaa	✔	
      front3('') // →		✔


function backAround(str){
  return str[str.length -1] + str + str[str.length -1];
}
      backAround('cat') // → tcatt	tcatt	✔	
      backAround('Hello') // → oHelloo	oHelloo	✔	
      backAround('a') // → aaa	aaa	✔	
      backAround('abc') // → cabcc	cabcc	✔	
      backAround('read') // → dreadd	dreadd	✔	
      backAround('boo') // → obooo	obooo	✔


function or35(n){
  return !(n % 3) || !(n % 5);
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


function front22(str){
  return str.slice(0,2) + str + str.slice(0,2);
}
      front22('kitten') // → kikittenki	kikittenki	✔	
      front22('Ha') // → HaHaHa	HaHaHa	✔	
      front22('abc') // → ababcab	ababcab	✔	
      front22('ab') // → ababab	ababab	✔	
      front22('a') // → aaa	aaa	✔	
      front22('') // →		✔	
      front22('Logic') // → LoLogicLo	LoLogicLo	✔


function startHi(str){
  return str.slice(0,2) === "hi";
}
      startHi('hi there') // → true	true	✔	
      startHi('hi') // → true	true	✔	
      startHi('hello hi') // → false	false	✔	
      startHi('he') // → false	false	✔	
      startHi('h') // → false	false	✔	
      startHi('') // → false	false	✔	
      startHi('ho hi') // → false	false	✔	
      startHi('hi ho') // → true	true	✔


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


      