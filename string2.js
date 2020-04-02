// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// STRING-2 //

function doubleChar(str){
  if (str.length <= 1) {
    return str[0] + str[0] || '';
  }
  return str[0] + str[0] + doubleChar(str.slice(1));
}
doubleChar('The') // → TThhee	TThhee	✔	
doubleChar('AAbb') // → AAAAbbbb	AAAAbbbb	✔	
doubleChar('Hi-There') // → HHii--TThheerree	HHii--TThheerree	✔	
doubleChar('Word!') // → WWoorrdd!!	WWoorrdd!!	✔	
doubleChar('!!') // → !!!!	!!!!	✔	
doubleChar('') // →		✔	
doubleChar('a') // → aa	aa	✔	
doubleChar('.') // → ..	..	✔	
doubleChar('aa') // → aaaa	aaaa	✔


function countHi(str){
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.slice(i, i + 2) === 'hi') {
      count += 1;
    }
  }
  return count;
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


function catDog(str){
  let balance = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 3) === "cat") {
      balance += 1;
    } else if (str.slice(i, i + 3) === "dog") {
      balance -= 1;
    }
  }
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


function countCode(str){
  let counter = 0;
  for (let i = 0; i < str.length - 3; i++) {
    if (str.slice(i, i + 2) === "co" && str[i + 3] === "e") {
      counter += 1;
    }
  }
  return counter;
}
countCode('aaacodebbb') // → 1	1	✔	
countCode('codexxcode') // → 2	2	✔	
countCode('cozexxcope') // → 2	2	✔	
countCode('cozfxxcope') // → 1	1	✔	
countCode('xxcozeyycop') // → 1	1	✔	
countCode('cozcop') // → 0	0	✔	
countCode('abcxyz') // → 0	0	✔	
countCode('code') // → 1	1	✔	
countCode('ode') // → 0	0	✔	
countCode('c') // → 0	0	✔	
countCode('') // → 0	0	✔	
countCode('AAcodeBBcoleCCccoreDD') // → 3	3	✔	
countCode('AAcodeBBcoleCCccorfDD') // → 2	2	✔	
countCode('coAcodeBcoleccoreDD') // → 3	3	✔


function endOther(a,b){
  if (a.length < b.length) {
    return b.slice(-a.length).toLowerCase() === a.toLowerCase();
  } else {
    return a.slice(-b.length).toLowerCase() === b.toLowerCase();
  }
}
endOther('Hiabc', 'abc') // → true	true	✔	
endOther('AbC', 'HiaBc') // → true	true	✔	
endOther('abc', 'abXabc') // → true	true	✔	
endOther('Hiabc', 'abcd') // → false	false	✔	
endOther('Hiabc', 'bc') // → true	true	✔	
endOther('Hiabcx', 'bc') // → false	false	✔	
endOther('abc', 'abc') // → true	true	✔	
endOther('xyz', '12xyz') // → true	true	✔	
endOther('yz', '12xz') // → false	false	✔	
endOther('Z', '12xz') // → true	true	✔	
endOther('12', '12') // → true	true	✔	
endOther('abcXYZ', 'abcDEF') // → false	false	✔	
endOther('ab', 'ab12') // → false	false	✔	
endOther('ab', '12ab') // → true	true	✔


function xyzThere(str){
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 3) === "xyz" && str[i - 1] !== ".") {
      return true;
    }
  }
  return false;
}
xyzThere('abcxyz') // → true	true	✔	
xyzThere('abc.xyz') // → false	false	✔	
xyzThere('xyz.abc') // → true	true	✔	
xyzThere('abcxy') // → false	false	✔	
xyzThere('xyz') // → true	true	✔	
xyzThere('xy') // → false	false	✔	
xyzThere('x') // → false	false	✔	
xyzThere('') // → false	false	✔	
xyzThere('abc.xyzxyz') // → true	true	✔	
xyzThere('abc.xxyz') // → true	true	✔	
xyzThere('.xyz') // → false	false	✔	
xyzThere('12.xyz') // → false	false	✔	
xyzThere('12xyz') // → true	true	✔	
xyzThere('1.xyz.xyz2.xyz') // → false	false	✔


function bobThere(str){
  for (let i = 0; i < str.length - 2; i++ ) {
    if (str[i] === "b" && str[i + 2] === "b") {
      return true;
    }
  }
  return false;
}
bobThere('abcbob') // → true	true	✔	
bobThere('b9b') // → true	true	✔	
bobThere('bac') // → false	false	✔	
bobThere('bbb') // → true	true	✔	
bobThere('abcdefb') // → false	false	✔	
bobThere('123abcbcdbabxyz') // → true	true	✔	
bobThere('b12') // → false	false	✔	
bobThere('b1b') // → true	true	✔	
bobThere('b12b1b') // → true	true	✔	
bobThere('bbc') // → false	false	✔	
bobThere('bbb') // → true	true	✔	
bobThere('bb') // → false	false	✔	
bobThere('b') // → false	false	✔


function xyBalance(str){
  let output = true;
  for (let char of str) {
    if (char === "x") {
      output = false;
    } else if (char ==="y") {
      output = true;
    }
  }
  return output;
}
xyBalance('aaxbby') // → true	true	✔	
xyBalance('aaxbb') // → false	false	✔	
xyBalance('yaaxbb') // → false	false	✔	
xyBalance('yaaxbby') // → true	true	✔	
xyBalance('xaxxbby') // → true	true	✔	
xyBalance('xaxxbbyx') // → false	false	✔	
xyBalance('xxbxy') // → true	true	✔	
xyBalance('xxbx') // → false	false	✔	
xyBalance('bbb') // → true	true	✔	
xyBalance('bxbb') // → false	false	✔	
xyBalance('bxyb') // → true	true	✔	
xyBalance('xy') // → true	true	✔	
xyBalance('y') // → true	true	✔	
xyBalance('x') // → false	false	✔	
xyBalance('') // → true	true	✔	
xyBalance('yxyxyxyx') // → false	false	✔	
xyBalance('yxyxyxyxy') // → true	true	✔	
xyBalance('12xabxxydxyxyzz') // → true	true	✔


function mixString(a,b){
  let output = "";
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    output += a.slice(i, i + 1) + b.slice(i, i + 1);
  }
  return output;
}
mixString('abc', 'xyz') // → axbycz	axbycz	✔	
mixString('Hi', 'There') // → HTihere	HTihere	✔	
mixString('xxxx', 'There') // → xTxhxexre	xTxhxexre	✔	
mixString('xxx', 'X') // → xXxx	xXxx	✔	
mixString('2/', '27 around') // → 22/7 around	22/7 around	✔	
mixString('', 'Hello') // → Hello	Hello	✔	
mixString('Abc', '') // → Abc	Abc	✔	
mixString('', '') // →		✔	
mixString('a', 'b') // → ab	ab	✔	
mixString('ax', 'b') // → abx	abx	✔	
mixString('a', 'bx') // → abx	abx	✔	
mixString('So', 'Long') // → SLoong	SLoong	✔	
mixString('Long', 'So') // → LSoong	LSoong	✔


function repeatEnd(str,n){
  let output = "";
  for (let i = 0; i < n; i++) {
    output += str.slice(-n);
  }
  return output;
}
repeatEnd('Hello', 3) // → llollollo	llollollo	✔	
repeatEnd('Hello', 2) // → lolo	lolo	✔	
repeatEnd('Hello', 1) // → o	o	✔	
repeatEnd('Hello', 0) // →		✔	
repeatEnd('abc', 3) // → abcabcabc	abcabcabc	✔	
repeatEnd('1234', 2) // → 3434	3434	✔	
repeatEnd('1234', 3) // → 234234234	234234234	✔	
repeatEnd('', 0) // →		✔


function repeatFront(str,n){
  let output = "";
  for (let i = 0; i < n; i++) {
    output += str.slice(0, n - i);
  }
  return output;
}
repeatFront('Chocolate', 4) // → ChocChoChC	ChocChoChC	✔	
repeatFront('Chocolate', 3) // → ChoChC	ChoChC	✔	
repeatFront('Ice Cream', 2) // → IcI	IcI	✔	
repeatFront('Ice Cream', 1) // → I	I	✔	
repeatFront('Ice Cream', 0) // →		✔	
repeatFront('xyz', 3) // → xyzxyx	xyzxyx	✔	
repeatFront('', 0) // →		✔	
repeatFront('Java', 4) // → JavaJavJaJ	JavaJavJaJ	✔	
repeatFront('Java', 1) // → J	J	✔


function repeatSeparator(word,sep,count){
  let outputArr = [];
  for (let i = 0; i < count; i++) {
    outputArr.push(word);
  }
  return outputArr.join(sep);
}
repeatSeparator('Word', 'X', 3) // → WordXWordXWord	WordXWordXWord	✔	
repeatSeparator('This', 'And', 2) // → ThisAndThis	ThisAndThis	✔	
repeatSeparator('This', 'And', 1) // → This	This	✔	
repeatSeparator('Hi', '-n-', 2) // → Hi-n-Hi	Hi-n-Hi	✔	
repeatSeparator('AAA', '', 1) // → AAA	AAA	✔	
repeatSeparator('AAA', '', 0) // →		✔	
repeatSeparator('A', 'B', 5) // → ABABABABA	ABABABABA	✔	
repeatSeparator('abc', 'XX', 3) // → abcXXabcXXabc	abcXXabcXXabc	✔	
repeatSeparator('abc', 'XX', 2) // → abcXXabc	abcXXabc	✔	
repeatSeparator('abc', 'XX', 1) // → abc	abc	✔	
repeatSeparator('XYZ', 'a', 2) // → XYZaXYZ	XYZaXYZ	✔


function prefixAgain(str,n){
  const snippet = str.slice(0, n);
  const scope = str.slice(n);
  return scope.includes(snippet);
}
prefixAgain('abXYabc', 1) // → true	true	✔	
prefixAgain('abXYabc', 2) // → true	true	✔	
prefixAgain('abXYabc', 3) // → false	false	✔	
prefixAgain('xyzxyxyxy', 2) // → true	true	✔	
prefixAgain('xyzxyxyxy', 3) // → false	false	✔	
prefixAgain('Hi12345Hi6789Hi10', 1) // → true	true	✔	
prefixAgain('Hi12345Hi6789Hi10', 2) // → true	true	✔	
prefixAgain('Hi12345Hi6789Hi10', 3) // → true	true	✔	
prefixAgain('Hi12345Hi6789Hi10', 4) // → false	false	✔	
prefixAgain('a', 1) // → false	false	✔	
prefixAgain('aa', 1) // → true	true	✔	
prefixAgain('ab', 1) // → false	false	✔


function xyzMiddle(str){
  if (str.length % 2 === 1) {
    const xIndex = Math.floor(str.length / 2) - 1;
    return str.slice(xIndex, xIndex + 3) === "xyz";
  } else {
    const xIndex = str.length / 2 - 2;
    for (let i = xIndex; i < xIndex + 2; i++) {
      if (str.slice(i, i + 3) === "xyz") {
        return true;
      }
    }
  }
  return false;
}
xyzMiddle('AAxyzBB') // → true	true	✔	
xyzMiddle('AxyzBB') // → true	true	✔	
xyzMiddle('AxyzBBB') // → false	false	✔	
xyzMiddle('AxyzBBBB') // → false	false	✔	
xyzMiddle('AAAxyzB') // → false	false	✔	
xyzMiddle('AAAxyzBB') // → true	true	✔	
xyzMiddle('AAAAxyzBB') // → false	false	✔	
xyzMiddle('AAAAAxyzBBB') // → false	false	✔	
xyzMiddle('1x345xyz12x4') // → true	true	✔	
xyzMiddle('xyzAxyzBBB') // → true	true	✔	
xyzMiddle('xyzAxyzBxyz') // → true	true	✔	
xyzMiddle('xyzxyzAxyzBxyzxyz') // → true	true	✔	
xyzMiddle('xyzxyzxyzBxyzxyz') // → true	true	✔	
xyzMiddle('xyzxyzAxyzxyzxyz') // → true	true	✔	
xyzMiddle('xyzxyzAxyzxyzxy') // → false	false	✔	
xyzMiddle('AxyzxyzBB') // → false	false	✔	
xyzMiddle('') // → false	false	✔	
xyzMiddle('x') // → false	false	✔	
xyzMiddle('xy') // → false	false	✔	
xyzMiddle('xyz') // → true	true	✔	
xyzMiddle('xyzz') // → true	true	✔


function getSandwich(str){
  const bread = "bread"; // variable so bread can be changed
  const breadStarts = [];
  for (let i = 0; i < str.length - 4; i++) {
    let canBeBread = true;
    for (let b = 0; b < bread.length; b++) {
      if (bread[b] !== str[i + b]) {
        canBeBread = false;
        break;
      }
    }
    if (canBeBread === true) {
      breadStarts.push(i);
    }
  }
  if (breadStarts.length >= 2) {
    const startOutput = breadStarts[0] + 5;
    const endOutput = breadStarts[breadStarts.length - 1];
    return str.slice(startOutput, endOutput);
  } else {
    return "";
  }
}
getSandwich('breadjambread') // → jam	jam	✔	
getSandwich('xxbreadjambreadyy') // → jam	jam	✔	
getSandwich('xxbreadyy') // →		✔	
getSandwich('xxbreadbreadjambreadyy') // → breadjam	breadjam	✔	
getSandwich('breadAbread') // → A	A	✔	
getSandwich('breadbread') // →		✔	
getSandwich('abcbreaz') // →		✔	
getSandwich('xyz') // →		✔	
getSandwich('') // →		✔	
getSandwich('breadbreaxbread') // → breax	breax	✔	
getSandwich('breaxbreadybread') // → y	y	✔	
getSandwich('breadbreadbreadbread') // → breadbread	breadbread	✔


