// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// STRING-3
//



/* COUNTYZ
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in
"fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of
a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char)
tests if a char is an alphabetic letter.)
*/

function countYZ(str){
  let targetedWords = 0;

  for (let i = 1; i < str.length; i++) {
    const [prev, curr] = [
      str[i - 1].toLowerCase(),
      str[i].toLowerCase()
    ];
    const isCurrNotLetter = curr.toLowerCase() === curr.toUpperCase();
    const isPrevTarget = prev === 'y' || prev === 'z';
    if (isCurrNotLetter && isPrevTarget) {
      targetedWords++;
    }
  }
  const last = str[str.length - 1].toLowerCase();
  if (last === 'y' || last === 'z') {
    targetedWords++;
  }

  return targetedWords;
}
countYZ('fez day') // → 2	2	✔	
countYZ('day fez') // → 2	2	✔	
countYZ('day fyyyz') // → 2	2	✔	
countYZ('day yak') // → 1	1	✔	
countYZ('day:yak') // → 1	1	✔	
countYZ('!!day--yaz!!') // → 2	2	✔	
countYZ('yak zak') // → 0	0	✔	
countYZ('DAY abc XYZ') // → 2	2	✔	
countYZ('aaz yyz my') // → 3	3	✔	
countYZ('y2bz') // → 2	2	✔	
countYZ('zxyx') // → 0	0	✔


/* WITHOUTSTRING
Given two strings, base and remove, return a version of the base string where all instances of the remove
string have been removed (not case sensitive). You may assume that the remove string is length 1 or more.
Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".
*/

function withoutString(base,remove){
  let output = '';

  const remLen = remove.length;
  for (let i = 0; i < base.length; i++) {
    const currentSlice = base.slice(i, i + remLen);
    if (currentSlice.toLowerCase() !== remove.toLowerCase()) {
      output += base[i];
    } else {
      i += remLen - 1;
    }
  }

  return output;
}
withoutString('Hello there', 'llo') // → He there	He there	✔	
withoutString('Hello there', 'e') // → Hllo thr	Hllo thr	✔	
withoutString('Hello there', 'x') // → Hello there	Hello there	✔	
withoutString('This is a FISH', 'IS') // → Th a FH	Th a FH	✔	
withoutString('THIS is a FISH', 'is') // → TH a FH	TH a FH	✔	
withoutString('THIS is a FISH', 'iS') // → TH a FH	TH a FH	✔	
withoutString('abxxxxab', 'xx') // → abab	abab	✔	
withoutString('abxxxab', 'xx') // → abxab	abxab	✔	
withoutString('abxxxab', 'x') // → abab	abab	✔	
withoutString('xxx', 'x') // →		✔	
withoutString('xxx', 'xx') // → x	x	✔	
withoutString('xyzzy', 'Y') // → xzz	xzz	✔	
withoutString('', 'x') // →		✔	
withoutString('abcabc', 'b') // → acac	acac	✔	
withoutString('AA22bb', '2') // → AAbb	AAbb	✔	
withoutString('1111', '1') // →		✔	
withoutString('1111', '11') // →		✔	
withoutString('MkjtMkx', 'Mk') // → jtx	jtx	✔	
withoutString('Hi HoHo', 'Ho') // → Hi	Hi	✔


/* EQUALISNOT
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to
the number of appearances of "not" anywhere in the string (case sensitive).
*/

function equalIsNot(str){
  let balance = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === 'is') {
      balance++;
    } else if (str.slice(i, i + 3) === 'not') {
      balance--;
    }
  }

  return balance === 0;
}
equalIsNot('This is not') // → false	false	✔	
equalIsNot('This is notnot') // → true	true	✔	
equalIsNot('noisxxnotyynotxisi') // → true	true	✔	
equalIsNot('noisxxnotyynotxsi') // → false	false	✔	
equalIsNot('xxxyyyzzzintint') // → true	true	✔	
equalIsNot('') // → true	true	✔	
equalIsNot('isisnotnot') // → true	true	✔	
equalIsNot('isisnotno7Not') // → false	false	✔	
equalIsNot('isnotis') // → false	false	✔	
equalIsNot('mis3notpotbotis') // → false	false	✔


/* GHAPPY
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or
right. Return true if all the g's in the given string are happy.
*/

function gHappy(str){
  let i = 0;
  while (i < str.length) {
    const current = str[i];
    if (current === 'g') {

      const next = str[i + 1];
      if (next === undefined || next !== 'g') {
        return false;
      }
      while (str[i + 1] === 'g') {
        i++;
      }
    }
    i++;
  }

  return true;
}
gHappy('xxggxx') // → true	true	✔	
gHappy('xxgxx') // → false	false	✔	
gHappy('xxggyygxx') // → false	false	✔	
gHappy('g') // → false	false	✔	
gHappy('gg') // → true	true	✔	
gHappy('') // → true	true	✔	
gHappy('xxgggxyz') // → true	true	✔	
gHappy('xxgggxyg') // → false	false	✔	
gHappy('xxgggxygg') // → true	true	✔	
gHappy('mgm') // → false	false	✔	
gHappy('mggm') // → true	true	✔	
gHappy('yyygggxyy') // → true	true	✔


/* COUNTTRIPLE
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the
given string. The triples may overlap.
*/

function countTriple(str){
  let count = 0;
  for (let i = 0; i < str.length - 2; i++) {
    const [first, second, third] = [
      str[i],
      str[i + 1],
      str[i + 2]
    ];
    if (first === second && first === third) {
      count++;
    }
  }

  return count;
}
countTriple('abcXXXabc') // → 1	1	✔	
countTriple('xxxabyyyycd') // → 3	3	✔	
countTriple('a') // → 0	0	✔	
countTriple('') // → 0	0	✔	
countTriple('XXXabc') // → 1	1	✔	
countTriple('XXXXabc') // → 2	2	✔	
countTriple('XXXXXabc') // → 3	3	✔	
countTriple('222abyyycdXXX') // → 3	3	✔	
countTriple('abYYYabXXXXXab') // → 4	4	✔	
countTriple('abYYXabXXYXXab') // → 0	0	✔	
countTriple('abYYXabXXYXXab') // → 0	0	✔	
countTriple('122abhhh2') // → 1	1	✔


/* SUMDIGITS
Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters.
Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the
chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)
*/

function sumDigits(str){
  const chars = str.split('');

  return chars.reduce((sum, char) => {

    return !isNaN(char)
      ? sum += parseInt(char)
      : sum;

  }, 0);
}
sumDigits('aa1bc2d3') // → 6	6	✔	
sumDigits('aa11b33') // → 8	8	✔	
sumDigits('Chocolate') // → 0	0	✔	
sumDigits('5hoco1a1e') // → 7	7	✔	
sumDigits('123abc123') // → 12	12	✔	
sumDigits('') // → 0	0	✔	
sumDigits('Hello') // → 0	0	✔	
sumDigits('X1z9b2') // → 12	12	✔	
sumDigits('5432a') // → 14	14	✔


/* SAMEENDS
Given a string, return the longest substring that appears at both the beginning and end of the string without
overlapping. For example, sameEnds("abXab") is "ab".
*/

function sameEnds(str){
  const halfLen = Math.floor(str.length / 2);
  const [front, back] = [
    str.slice(0, halfLen),
    str.slice(-halfLen)
  ];

  let frontLastIdx = 0;
  let nextBackRestartIdx = -1;
  for (let i = 0; i < back.length; i++) {

    const [currFrontChar, currBackChar] = [
      front[frontLastIdx],
      back[i]
    ];

    if (
      i > 0 &&
      nextBackRestartIdx === -1 &&
      currBackChar === currFrontChar[0]
    ) {
      nextBackRestartIdx = i;
    }

    if (currFrontChar === currBackChar) {
      frontLastIdx++;
    } else if (nextBackRestartIdx === -1) {
      frontLastIdx = 0;
    } else {
      i = nextBackRestartIdx - 1;
      nextBackRestartIdx = -1;
      frontLastIdx = 0;
    }
  }

  return str.slice(0, frontLastIdx);
}
sameEnds('abXYab') // → ab	✔	
sameEnds('xx') // → x	✔	
sameEnds('xxx') // → x	✔	
sameEnds('xxxx') // → xx	✔	
sameEnds('javaXYZjava') // → java	✔	
sameEnds('javajava') // → java	✔	
sameEnds('xavaXYZjava') // → 	✔	
sameEnds('Hello! and Hello!') // → Hello!	✔	
sameEnds('x') // → 	✔	
sameEnds('') // → 	✔	
sameEnds('abcb') // → 	✔	
sameEnds('mymmy') // → my	✔


/* MIRROREDENDS
Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string.
In other words, zero or more characters at the very begining of the given string, and at the very end of the
string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".
*/

function mirrorEnds(string){
  let mirroredEndIdx = 0;
  
  const reversed = string.split('')
    .reverse();
  for (let i = 0; i < string.length; i++) {
    const [frontChar, backChar] = [
      string[i],
      reversed[i]
    ];
    if (frontChar !== backChar) {
      break;
    } else {
      mirroredEndIdx++;
    }
  }

  return string.slice(0, mirroredEndIdx);
}
mirrorEnds('abXYZba') // → ab	ab	✔	
mirrorEnds('abca') // → a	a	✔	
mirrorEnds('aba') // → aba	aba	✔	
mirrorEnds('abab') // →		✔	
mirrorEnds('xxx') // → xxx	xxx	✔	
mirrorEnds('xxYxx') // → xxYxx	xxYxx	✔	
mirrorEnds('Hi and iH') // → Hi	Hi	✔	
mirrorEnds('x') // → x	x	✔	
mirrorEnds('') // →		✔	
mirrorEnds('123and then 321') // → 123	123	✔	
mirrorEnds('band andab') // → ba	ba	✔


