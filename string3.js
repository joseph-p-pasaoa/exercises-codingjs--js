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


