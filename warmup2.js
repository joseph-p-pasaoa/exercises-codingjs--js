// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// WARMUP-2
//



/* STRINGTIMES
Given a string and a non-negative int n, return a larger string that is n copies of the original string.
*/

function stringTimes(str,n){
  let outputStr = "";
  for (let i = n; i > 0; i--){
    outputStr += str;
  }
  return outputStr;
}
stringTimes('Hi', 2) // → HiHi	HiHi	✔	
stringTimes('Hi', 3) // → HiHiHi	HiHiHi	✔	
stringTimes('Hi', 1) // → Hi	Hi	✔	
stringTimes('Hi', 0) // →		✔	
stringTimes('Hi', 5) // → HiHiHiHiHi	HiHiHiHiHi	✔	
stringTimes('Oh Boy!', 2) // → Oh Boy!Oh Boy!	Oh Boy!Oh Boy!	✔	
stringTimes('x', 4) // → xxxx	xxxx	✔	
stringTimes('', 4) // →		✔	
stringTimes('code', 2) // → codecode	codecode	✔	
stringTimes('code', 3) // → codecodecode	codecodecode	✔


/* FRONTTIMES
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars,
or whatever is there if the string is less than length 3. Return n copies of the front.
*/

function frontTimes(str,n){
  let output = "";
  for (let i = n; i > 0; i--) {
    output += str.slice(0, 3);
  }
  return output;
}
frontTimes('Chocolate', 2) // → ChoCho	ChoCho	✔	
frontTimes('Chocolate', 3) // → ChoChoCho	ChoChoCho	✔	
frontTimes('Abc', 3) // → AbcAbcAbc	AbcAbcAbc	✔	
frontTimes('Ab', 4) // → AbAbAbAb	AbAbAbAb	✔	
frontTimes('A', 4) // → AAAA	AAAA	✔	
frontTimes('',4) // →		✔	
frontTimes('Abc', 0) // →		✔


/* COUNTXX
Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.
*/

function countXX(str){
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === "xx") {
      counter += 1;
    }
  }
  return counter;
}
countXX('abcxx') // → 1	1	✔	
countXX('xxx') // → 2	2	✔	
countXX('xxxx') // → 3	3	✔	
countXX('abc') // → 0	0	✔	
countXX('Hello There') // → 0	0	✔	
countXX('Hexxo Thxxe') // → 2	2	✔	
countXX('') // → 0	0	✔	
countXX('Kittens') // → 0	0	✔	
countXX('Kittensxxx') // → 2	2	✔


/* DOUBLEX
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".
*/

function doubleX(str){
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      return str[i + 1] === "x";
    }
  }
  return false;
}
doubleX('axxbb') // → true	true	✔	
doubleX('axaxax') // → false	false	✔	
doubleX('xxxxx') // → true	true	✔	
doubleX('xaxxx') // → false	false	✔	
doubleX('aaaax') // → false	false	✔	
doubleX('') // → false	false	✔	
doubleX('abc') // → false	false	✔	
doubleX('x') // → false	false	✔	
doubleX('xx') // → true	true	✔	
doubleX('xaxx') // → false	false	✔


/* STRINGBITS
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
*/

function stringBits(str){
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!(i % 2)) {
      outputStr += str[i];
    }
  }
  return outputStr;
}
stringBits('Hello') // → Hlo	Hlo	✔	
stringBits('Hi') // → H	H	✔	
stringBits('Heeololeo') // → Hello	Hello	✔	
stringBits('HiHiHi') // → HHH	HHH	✔	
stringBits('') // →		✔	
stringBits('Greetings') // → Getns	Getns	✔	
stringBits('Chocolate') // → Cooae	Cooae	✔	
stringBits('pi') // → p	p	✔	
stringBits('Hello Kitten') // → HloKte	HloKte	✔	
stringBits('hxaxpxpxy') // → happy	happy	✔


/* STRINGSPLOSION
Given a non-empty string like "Code" return a string like "CCoCodCodE".
*/

function stringSplosion(str){
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      outputStr += str[j];
    }
  }
  return outputStr;
}
stringSplosion("Code") // → CCoCodCode	✔	


/* LAST2
Given a string, return the count of the number of times that a substring length 2 appears in the
string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end
substring).
*/

function last2(str){
  const last2 = str.slice(-2);
  let counter = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 2) === last2) {
      counter += 1;
    }
  }
  return counter;
}
last2('hixxhi') // → 1	1	✔	
last2('xaxxaxaxx') // → 1	1	✔	
last2('axxaaxx') // → 1	1	✔	
last2('xxaxxaxxaxx') // → 3	3	✔	
last2('xaxaxaa') // → 0	0	✔	
last2('xxxx') // → 2	2	✔	
last2('13121312') // → 1	1	✔	
last2('11212') // → 1	1	✔	
last2('13121311') // → 0	0	✔	
last2('hi') // → 0	0	✔	
last2('h') // → 0	0	✔	
last2('') // → 0	0	✔


/* ARRAYCOUNT9
Given an array of ints, return the number of 9's in the array.
*/

function arrayCount9(nums){
  let counter = 0;
  for (let num of nums) {
    if (num === 9) {
      counter += 1;
    }
  }
  return counter;
}
arrayCount9([1,2,9]) // → 1	1	✔	
arrayCount9([1,9,9]) // → 2	2	✔	
arrayCount9([1,9,9,3,9]) // → 3	3	✔	
arrayCount9([1,2,3]) // → 0	0	✔	
arrayCount9([]) // → 0	0	✔	
arrayCount9([4,2,4,3,1]) // → 0	0	✔	
arrayCount9([9,2,4,3,1]) // → 1	1	✔


/* ARRAYFRONT9
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
*/

function arrayFront9(nums){
  for (let i = 0; i < 4; i++) {
    if (nums[i]) {
      if (nums[i] === 9) {
        return true;
      }
    }
  }
  return false;
}
arrayFront9([1,2,9,3,4]) // → true	true	✔	
arrayFront9([1,2,3,4,9]) // → false	false	✔	
arrayFront9([1,2,3,4,5]) // → false	false	✔	
arrayFront9([9,2,3]) // → true	true	✔	
arrayFront9([1,9,9]) // → true	true	✔	
arrayFront9([1,2,3]) // → false	false	✔	
arrayFront9([1,9]) // → true	true	✔	
arrayFront9([5,5]) // → false	false	✔	
arrayFront9([2]) // → false	false	✔	
arrayFront9([9]) // → true	true	✔	
arrayFront9([]) // → false	false	✔	
arrayFront9([3,9,2,3,3]) // → true	true	✔


/* ARRAY123
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
*/

function array123(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 1) {
      if (nums[i + 1] === 2) {
        if (nums[i + 2] === 3) {
          return true;
        }
      }
    }
  }
  return false;
}
array123([-1, -1, 0, 1, 2, 3, 4, 5, 0, 1, 2]); // → true	true	✔	
array123([-1, -2, -3, 1, 2, 0, 0, 1, 2, 3, 0, -1]); // → true	true	✔	
array123([0, 0, -1, 1, 2, 0, 3, 1, 2, 0, 1, -1, -2]); // → false	false	✔	


/* STRINGMATCH
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring.
So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place
in both strings.
*/

function stringMatch(a,b){
  let counter = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (!b[i + 1]) {
      return counter;
    }
    if (a[i] === b[i] && a[i + 1] === b[i + 1]) {
      counter += 1;
    }
  }
  return counter;
}
stringMatch('xxcaazz', 'xxbaaz') // → 3	3	✔	
stringMatch('abc', 'abc') // → 2	2	✔	
stringMatch('abc', 'axc') // → 0	0	✔	
stringMatch('hello', 'he') // → 1	1	✔	
stringMatch('he', 'hello') // → 1	1	✔	
stringMatch('', 'hello') // → 0	0	✔	
stringMatch('aabbccdd', 'abbbxxd') // → 1	1	✔	
stringMatch('aaxxaaxx', 'iaxxai') // → 3	3	✔	
stringMatch('iaxxai', 'aaxxaaxx') // → 3	3	✔


/* STRINGX
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.
*/

function stringX(str){
  const arrayed = str.split('');
  return arrayed.filter((char, i) => {
      return (i === 0 || i === str.length - 1 || char !== 'x');
  }).join('');
}
stringX('xxHxix') // → xHix	xHix	✔	
stringX('abxxxcd') // → abcd	abcd	✔	
stringX('xabxxxcdx') // → xabcdx	xabcdx	✔	
stringX('xKittenx') // → xKittenx	xKittenx	✔	
stringX('Hello') // → Hello	Hello	✔	
stringX('xx') // → xx	xx	✔	
stringX('') // →		✔


/* ALTPAIRS
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
*/

function altPairs(str){
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      outputStr += str[i];
    }
  }
  return outputStr;
}
altPairs('kitten') // → kien	kien	✔	
altPairs('Chocolate') // → Chole	Chole	✔	
altPairs('CodingHorror') // → Congrr	Congrr	✔	
altPairs('yak') // → ya	ya	✔	
altPairs('ya') // → ya	ya	✔	
altPairs('y') // → y	y	✔	
altPairs('') // →		✔	
altPairs('ThisThatTheOther') // → ThThThth	ThThThth	✔


function array667(nums){
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6) {
      if (nums[i + 1] === 6 || nums[i + 1] === 7) {
        counter += 1;
      }
    }
  }
  return counter;
}
array667([6,6,2]) // → 1	1	✔	
array667([6,6,2,6]) // → 1	1	✔	
array667([6,7,2,6]) // → 1	1	✔	
array667([6,6,2,7,6,7]) // → 2	2	✔	
array667([1,6,3]) // → 0	0	✔	
array667([6,1]) // → 0	0	✔	
array667([]) // → 0	0	✔	
array667([3,6,7,6]) // → 1	1	✔	
array667([3,6,6,7]) // → 2	2	✔	
array667([6,3,6,6]) // → 1	1	✔	
array667([6,7,6,6]) // → 2	2	✔	
array667([1,2,3,5,6]) // → 0	0	✔	
array667([1,2,3,6,6]) // → 1	1	✔


/* NOTRIPLES
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array.
Return true if the array does not contain any triples.
*/

function noTriples(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      return false;
    }
  }
  return true;
}
noTriples([1,1,2,2,1]) // → true	true	✔	
noTriples([1,1,2,2,2,1]) // → false	false	✔	
noTriples([1,1,2,2,2,1]) // → false	false	✔	
noTriples([1,2,1]) // → true	true	✔	
noTriples([1,1,1]) // → false	false	✔	
noTriples([1,1]) // → true	true	✔	
noTriples([1]) // → true	true	✔	
noTriples([1]) // → true	true	✔	
noTriples([]) // → true	true	✔


/* HAS271
Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value, followed by the
value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs
by 2 or less from the correct value.
*/

function has271(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i + 1] - nums[i] === 5) {
      if (Math.abs(nums[i] - 1 - nums[i + 2]) <= 2) {
        return true;
      }
    }
  }
  return false;
}
has271([1,2,7,1]) // → true	true	✔	
has271([1,2,8,1]) // → false	false	✔	
has271([2,7,1]) // → true	true	✔	
has271([3,8,2]) // → true	true	✔	
has271([2,7,3]) // → true	true	✔	
has271([2,7,4]) // → false	false	✔	
has271([2,7,-1]) // → true	true	✔	
has271([2,7,-2]) // → false	false	✔	
has271([4,5,3,8,0]) // → true	true	✔	
has271([2,7,5,10,4]) // → true	true	✔	
has271([2,7,-2,4,9,3]) // → true	true	✔	
has271([2,7,5,10,1]) // → false	false	✔	
has271([2,7,-2,10,2]) // → false	false	✔
