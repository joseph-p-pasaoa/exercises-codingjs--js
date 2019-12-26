// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// Warmup-1 //

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


function hasTeen(a,b,c){
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
    return true;
  }
  return c >= 13 && c <= 19;
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


function mixStart(str){
  return str.slice(1, 3) === "ix";
}
      mixStart('mix snacks') // → true	true	✔	
      mixStart('pix snacks') // → true	true	✔	
      mixStart('piz snacks') // → false	false	✔	
      mixStart('nix') // → true	true	✔	
      mixStart('ni') // → false	false	✔	
      mixStart('n') // → false	false	✔


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


function endUp(str){
  return str.slice(0, -3) + str.slice(-3).toUpperCase();
}
endUp('Hello') // → HeLLO	HeLLO	✔	
endUp('hi there') // → hi thERE	hi thERE	✔	
endUp('hi') // → HI	HI	✔	
endUp('woo hoo') // → woo HOO	woo HOO	✔	
endUp('xyz12') // → xyZ12	xyZ12	✔	
endUp('x') // → X	X	✔	
endUp('') →		✔


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
