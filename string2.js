// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// STRING-2
//



/* DOUBLECHAR
Given a string, return a string where for every char in the original, there are two chars.
*/

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


/* COUNTHI
Return the number of times that the string "hi" appears anywhere in the given string.
*/

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


/* CATDOG
Return true if the string "cat" and "dog" appear the same number of times in the given string.
*/

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


/* COUNTCODE
Return the number of times that the string "code" appears anywhere in the given string, except
we'll accept any letter for the 'd', so "cope" and "cooe" count.
*/

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


/* ENDOTHER
Given two strings, return true if either of the strings appears at the very end of the other string,
ignoring upper/lower case differences (in other words, the computation should not be "case sensitive").
Note: str.toLowerCase() returns the lowercase version of a string.
*/

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


/* XYZTHERE
Return true if the given string contains an appearance of "xyz" where the xyz is not directly
preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.
*/

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


/* BOBTHERE
Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.
*/

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


/* XYBALANCE
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y'
char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance
multiple 'x's. Return true if the given string is xy-balanced.
*/

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


/* MIXSTRING
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b,
the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.
*/

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


/* REPEATEND
Given a string and an int n, return a string made of n repetitions of the last n characters of the
string. You may assume that n is between 0 and the length of the string, inclusive.
*/

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


/* REPEATFRONT
Given a string and an int n, return a string made of the first n characters of the string, followed
by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the
length of the string, inclusive (i.e. n >= 0 and n <= str.length()).
*/

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


/* REPEATSEPARATOR
Given two strings, word and a separator sep, return a big string made of count occurrences
of the word, separated by the separator string.
*/

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


/* PREFIXAGAIN
Given a string, consider the prefix string made of the first N chars of the string. Does that prefix
string appear somewhere else in the string? Assume that the string is not empty and that N is in
the range 1..str.length().
*/

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


/* XYZMIDDLE
Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the
number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder
than it looks.
*/

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


/* GETSANDWICH
A sandwich is two pieces of bread with something in between. Return the string that is between the first
and last appearance of "bread" in the given string, or return the empty string "" if there are not two
pieces of bread.
*/

function getSandwich(str){
  const bread = "bread"; // variable so bread can be changed
  const breadStarts = [];
  for (let i = 0; i < str.length - (bread.length - 1); i++) {
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


/* SAMESTARCHAR
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after
the star, they are the same.
*/

function sameStarChar(str){
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] === "*") {
      if (str[i - 1] !== str[i + 1]) {
        return false;
      }
    }
  }
  return true;
}
sameStarChar('xy*yzz') // → true	true	✔	
sameStarChar('xy*zzz') // → false	false	✔	
sameStarChar('*xa*az') // → true	true	✔	
sameStarChar('*xa*bz') // → false	false	✔	
sameStarChar('*xa*a*') // → true	true	✔	
sameStarChar('') // → true	true	✔	
sameStarChar('*xa*a*a') // → true	true	✔	
sameStarChar('*xa*a*b') // → false	false	✔	
sameStarChar('*12*2*2') // → true	true	✔	
sameStarChar('12*2*3*') // → false	false	✔	
sameStarChar('abcDEF') // → true	true	✔	
sameStarChar('XY*YYYY*Z*') // → false	false	✔	
sameStarChar('XY*YYYY*Y*') // → true	true	✔	
sameStarChar('12*2*3*') // → false	false	✔	
sameStarChar('*') // → true	true	✔	
sameStarChar('**') // → true	true	✔


/* ONETWO
Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields
"bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group
of fewer than 3 chars at the end.
*/

function oneTwo(str){
  let output = "";
  let currIndex = 0;
  let remaining = str.length;
  while (remaining - currIndex >= 3) {
    output += str[currIndex + 1] + str[currIndex + 2];
    output += str[currIndex];
    currIndex += 3;
  }
  return output;
}
oneTwo('abc') // → bca	bca	✔	
oneTwo('tca') // → cat	cat	✔	
oneTwo('tcagdo') // → catdog	catdog	✔	
oneTwo('chocolate') // → hocolctea	hocolctea	✔	
oneTwo('1234567890') // → 231564897	231564897	✔	
oneTwo('xabxabxabxabxabxabxab') // → abxabxabxabxabxabxabx	abxabxabxabxabxabxabx	✔	
oneTwo('abcdefx') // → bcaefd	bcaefd	✔	
oneTwo('abcdefxy') // → bcaefd	bcaefd	✔	
oneTwo('abcdefxyz') // → bcaefdyzx	bcaefdyzx	✔	
oneTwo('') // →		✔	
oneTwo('x') // →		✔	
oneTwo('xy') // →		✔	
oneTwo('xyz') // → yzx	yzx	✔	
oneTwo('abcdefghijklkmnopqrstuvwxyz1234567890') // → bcaefdhigkljmnkpqostrvwuyzx231564897	bcaefdhigkljmnkpqostrvwuyzx231564897	✔	
oneTwo('abcdefghijklkmnopqrstuvwxyz123456789') // → bcaefdhigkljmnkpqostrvwuyzx231564897	bcaefdhigkljmnkpqostrvwuyzx231564897	✔	
oneTwo('abcdefghijklkmnopqrstuvwxyz12345678') // → bcaefdhigkljmnkpqostrvwuyzx231564	bcaefdhigkljmnkpqostrvwuyzx231564	✔


/* ZIPZAP
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'.
Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".
*/

function zipZap(str){
  if (str.length < 3) return str;

  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (i >= str.length - 2) {
      output += str[i];
    } else if (str[i] === 'z' && str[i + 2] === 'p') {
      output += 'zp';
      i += 2;
    } else {
      output += str[i];
    }
  }
  return output;
}
zipZap('zipXzap') // → zpXzp	zpXzp	✔	
zipZap('zopzop') // → zpzp	zpzp	✔	
zipZap('zzzopzop') // → zzzpzp	zzzpzp	✔	
zipZap('zibzap') // → zibzp	zibzp	✔	
zipZap('zip') // → zp	zp	✔	
zipZap('zi') // → zi	zi	✔	
zipZap('z') // → z	z	✔	
zipZap('') // →		✔	
zipZap('zzp') // → zp	zp	✔	
zipZap('abcppp') // → abcppp	abcppp	✔	
zipZap('azbcppp') // → azbcppp	azbcppp	✔	
zipZap('azbcpzpp') // → azbcpzp	azbcpzp	✔


