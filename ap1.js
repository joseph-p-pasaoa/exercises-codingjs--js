// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// AP-1
//



/* SCORESINCREASING
Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.
*/

function scoresIncreasing(scores){
  for (let i = 0; i <= scores.length - 2; i++) {
    if (scores[i + 1] - scores[i] < 0) {
      return false;
    }
  }
  return true;
}
scoresIncreasing([1, 3, 4]) // → true	true	✔	
scoresIncreasing([1, 3, 2]) // → false	false	✔	
scoresIncreasing([1, 1, 4]) // → true	true	✔	
scoresIncreasing([1, 1, 2, 4, 4, 7]) // → true	true	✔	
scoresIncreasing([1, 1, 2, 4, 3, 7]) // → false	false	✔


/* SCORES100
Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.
*/

function scores100(scores){
  for (let i = 0; i <= scores.length - 2; i++) {
    if (scores[i] === 100 && scores[i + 1] === 100) {
      return true;
    }
  }
  return false;
}
scores100([1, 100, 100]) // → true	true	✔	
scores100([1, 100, 99, 100]) // → false	false	✔	
scores100([100, 1, 100, 100]) // → true	true	✔	
scores100([100, 1, 100, 1]) // → false	false	✔	
scores100([1, 2, 3, 4, 5]) // → false	false	✔	
scores100([1, 2, 100, 4, 5]) // → false	false	✔


/* SCORESCLUMP
Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores
that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.
*/

function scoresClump(scores){
  for (let i = 0; i <= scores.length - 3; i++) {
    const x = scores[i];
    const y = scores[i + 1];
    const z = scores[i + 2];
    if (Math.abs(x - y) <= 2 && Math.abs(x - z) <= 2) {
      return true;
    }
  }
  return false;
}
scoresClump([3, 4, 5]) // → true	true	✔	
scoresClump([3, 4, 6]) // → false	false	✔	
scoresClump([1, 3, 5, 5]) // → true	true	✔	
scoresClump([2, 4, 5, 6]) // → true	true	✔	
scoresClump([2, 4, 5, 7]) // → false	false	✔	
scoresClump([2, 4, 4, 7]) // → true	true	✔	
scoresClump([3, 3, 6, 7, 9]) // → false	false	✔	
scoresClump([3, 3, 7, 7, 9]) // → true	true	✔	
scoresClump([4, 5, 8]) // → false	false	✔


/* SCORESAVERAGE
Given an array of scores, compute the int average of the first half and the second half, and return whichever
is larger. We'll say that the second half begins at index length/2. The array length will be at least 2. To
practice decomposition, write a separate helper method int average(int[] scores, int start, int end) { which
computes the average of the elements between indexes start..end. Call your helper method twice to implement
scoresAverage(). Write your helper method after your scoresAverage() method in the JavaBat text area. Normally
you would compute averages with doubles, but here we use ints so the expected results are exact.
*/

function scoresAverage(scores){
  function intAvg(arr, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += arr[i];
    }
    return sum / (end - start + 1);
  }

  const a = intAvg(scores, 0, parseInt(scores.length / 2) - 1);
  const b = intAvg(scores, parseInt(scores.length / 2), scores.length - 1);
  if (a > b) {
    return a;
  }
  return b;
}
scoresAverage([2, 2, 4, 4]) // → 4	4	✔	
scoresAverage([4, 4, 4, 2, 2, 2]) // → 4	4	✔	
scoresAverage([3, 4, 5, 1, 2, 3]) // → 4	4	✔	
scoresAverage([5, 6]) // → 6	6	✔	
scoresAverage([5, 4]) // → 5	5	✔	
scoresAverage([5, 4, 5, 6, 2, 1, 2, 3]) // → 5	5	✔


/* WORDSCOUNT
Given an array of strings, return the count of the number of strings with the given length.
*/

function wordsCount(words,len){
  let counter = 0;
  for (let word of words) {
    if (word.length === len) {
      counter += 1;
    }
  }
  return counter;
}
wordsCount(['a', 'bb', 'b', 'ccc'], 1) // → 2	2	✔	
wordsCount(['a', 'bb', 'b', 'ccc'], 3) // → 1	1	✔	
wordsCount(['a', 'bb', 'b', 'ccc'], 4) // → 0	0	✔	
wordsCount(['xx', 'yyy', 'x', 'yy', 'z'], 1) // → 2	2	✔	
wordsCount(['xx', 'yyy', 'x', 'yy', 'z'], 2) // → 2	2	✔


/* WORDSFRONT
Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.
*/

function wordsFront(words,n){
  return words.slice(0, n);
}
wordsFront(['a', 'b', 'c', 'd'], 1) // → a	a	✔	
wordsFront(['a', 'b', 'c', 'd'], 2) // → a,b	a,b	✔	
wordsFront(['a', 'b', 'c', 'd'], 3) // → a,b,c	a,b,c	✔	
wordsFront(['a', 'b', 'c', 'd'], 4) // → a,b,c,d	a,b,c,d	✔	
wordsFront(['Hi', 'There'], 1) // → Hi	Hi	✔


/* WORDSWITHOUTLIST
Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length
are omitted. See wordsWithout() below which is more difficult because it uses arrays.
*/

function wordsWithoutList(words,len){
  return words.filter(word => word.length !== len);
}
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 1) // → bb,ccc	bb,ccc	✔	
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 3) // → a,bb,b	a,bb,b	✔	
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 4) // → a,bb,b,ccc	a,bb,b,ccc	✔	
wordsWithoutList(['xx', 'yyy', 'x', 'yy', 'z'], 1) // → xx,yyy,yy	xx,yyy,yy	✔


/* HASONE
Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and /
to discard the rightmost digit.
*/

function hasOne(n){
  let x = n;

  while (x >= 10) {
    const onesDigit = x % 10;
    if (onesDigit === 1) {
      return true;
    } else {
      x = Math.floor(x / 10);
    }
  }
  return x === 1;
}
hasOne(10) // → true	true	✔	
hasOne(22) // → false	false	✔	
hasOne(220) // → false	false	✔	
hasOne(212) // → true	true	✔	
hasOne(1) // → true	true	✔	
hasOne(9) // → false	false	✔	
hasOne(211112) // → true	true	✔	
hasOne(121121) // → true	true	✔	
hasOne(222222) // → false	false	✔	
hasOne(56156) // → true	true	✔	
hasOne(56556) // → false	false	✔


/* DIVIDESSELF
We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So
for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not
divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost
digit, and / to discard the rightmost digit.
*/

function dividesSelf(n){
  const digits = [];

  function buildDigits(num) {
    let rightDigit = num % 10;
    digits.push(rightDigit);
    if (num / 10 > 1) {
      return buildDigits(Math.floor(num / 10));
    }
  }

  buildDigits(n);
  for (let digit of digits) {
    if (n % digit !== 0) {
      return false;
    }
  }
  return true;
}
dividesSelf(128) // → true	true	✔	
dividesSelf(12) // → true	true	✔	
dividesSelf(120) // → false	false	✔	
dividesSelf(122) // → true	true	✔	
dividesSelf(13) // → false	false	✔	
dividesSelf(32) // → false	false	✔	
dividesSelf(22) // → true	true	✔	
dividesSelf(42) // → false	false	✔	
dividesSelf(212) // → true	true	✔	
dividesSelf(213) // → false	false	✔	
dividesSelf(162) // → true	true	✔


/* COPYEVENS
Given an array of positive ints, return a new array of length "count" containing the first even numbers
from the original array. The original array will contain at least "count" even numbers.
*/

function copyEvens(nums,count){
  const outputArr = [];
  for (let i = 0; outputArr.length < count; i++) {
    if (nums[i] % 2 === 0) {
      outputArr.push(nums[i]);
    }
  }
  return outputArr;
}
copyEvens([3, 2, 4, 5, 8], 2) // → 2,4	2,4	✔	
copyEvens([3, 2, 4, 5, 8], 3) // → 2,4,8	2,4,8	✔	
copyEvens([6, 1, 2, 4, 5, 8], 3) // → 6,2,4	6,2,4	✔	
copyEvens([6, 1, 2, 4, 5, 8], 4) // → 6,2,4,8	6,2,4,8	✔	
copyEvens([3, 1, 4, 1, 5], 1) // → 4	4	✔	
copyEvens([2], 1) // → 2	2	✔	
copyEvens([6, 2, 4, 8], 2) // → 6,2	6,2	✔	
copyEvens([6, 2, 4, 8], 3) // → 6,2,4	6,2,4	✔	
copyEvens([6, 2, 4, 8], 4) // → 6,2,4,8	6,2,4,8	✔	
copyEvens([1, 8, 4], 1) // → 8	8	✔	
copyEvens([1, 8, 4], 2) // → 8,4	8,4	✔	
copyEvens([2, 8, 4], 2) // → 2,8	2,8	✔


/* COPYENDY
We'll say that a positive int n is "endy" if it is in the range 0..10 or 90..100 (inclusive). Given an array
of positive ints, return a new array of length "count" containing the first endy numbers from the original
array. Decompose out a separate isEndy(int n) method to test if a number is endy. The original array will
contain at least "count" endy numbers.
*/

function copyEndy(nums,count){
  function isEndy(n) {
    const a = (n >= 0 && n <= 10);
    const b = (n >= 90 && n <= 100);
    return a || b;
  }

  let outputArr = [];
  for (let i = 0; outputArr.length < count; i++) {
    if (isEndy(nums[i])) {
      outputArr.push(nums[i]);
    }
  }
  return outputArr;
}
copyEndy([9, 11, 90, 22, 6], 2) // → 9,90	9,90	✔	
copyEndy([9, 11, 90, 22, 6], 3) // → 9,90,6	9,90,6	✔	
copyEndy([12, 1, 1, 13, 0, 20], 2) // → 1,1	1,1	✔	
copyEndy([12, 1, 1, 13, 0, 20], 3) // → 1,1,0	1,1,0	✔	
copyEndy([0], 1) // → 0	0	✔	
copyEndy([10, 11, 90], 2) // → 10,90	10,90	✔	
copyEndy([90, 22, 100], 2) // → 90,100	90,100	✔	
copyEndy([12, 11, 10, 89, 101, 4], 1) // → 10	10	✔	
copyEndy([13, 2, 2, 0], 2) // → 2,2	2,2	✔	
copyEndy([13, 2, 2, 0], 3) // → 2,2,0	2,2,0	✔	
copyEndy([13, 2, 13, 2, 0, 30], 2) // → 2,2	2,2	✔	
copyEndy([13, 2, 13, 2, 0, 30], 3) // → 2,2,0	2,2,0	✔


/* SCOREUP
The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers"
array contains a student's answers, with "?" representing a question left blank. The two arrays are not empty
and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for
each incorrect answer, and +0 for each blank answer.
*/

function scoreUp(key,answers){
  let score = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] === answers[i]) {
      score += 4;
    } else if (answers[i] !== "?") {
      score -= 1;
    }
  }

  return score;
}
scoreUp(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'c']) // → 6	6	✔	
scoreUp(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'c']) // → 11	11	✔	
scoreUp(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'b']) // → 16	16	✔	
scoreUp(['a', 'a', 'b', 'b'], ['?', 'c', 'b', '?']) // → 3	3	✔	
scoreUp(['a', 'a', 'b', 'b'], ['?', 'c', '?', '?']) // → -1	-1	✔	
scoreUp(['a', 'a', 'b', 'b'], ['c', '?', 'b', 'b']) // → 7	7	✔	
scoreUp(['a', 'a', 'b', 'b'], ['c', '?', 'b', '?']) // → 3	3	✔	
scoreUp(['a', 'b', 'c'], ['a', 'c', 'b']) // → 2	2	✔	
scoreUp(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', 'a', 'c', 'a', 'c']) // → 4	4	✔	
scoreUp(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', '?', '?', 'a', 'c']) // → 6	6	✔	
scoreUp(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', '?', '?', 'c', 'c']) // → 11	11	✔	
scoreUp(['a', 'b', 'c'], ['a', 'b', 'c']) // → 12	12	✔


/* WORDSWITHOUT
Given an array of strings, return a new array without the strings that are equal to the target string.
One approach is to count the occurrences of the target string, make a new array of the correct length,
and then copy over the correct strings.
*/

function wordsWithout(words,target){
  return words.filter(str => str !== target);
}
wordsWithout(['a', 'b', 'c', 'a'], 'a') // → b,c	b,c	✔	
wordsWithout(['a', 'b', 'c', 'a'], 'b') // → a,c,a	a,c,a	✔	
wordsWithout(['a', 'b', 'c', 'a'], 'c') // → a,b,a	a,b,a	✔	
wordsWithout(['b', 'c', 'a', 'a'], 'b') // → c,a,a	c,a,a	✔	
wordsWithout(['xx', 'yyy', 'x', 'yy', 'x'], 'x') // → xx,yyy,yy	xx,yyy,yy	✔	
wordsWithout(['xx', 'yyy', 'x', 'yy', 'x'], 'yy') // → xx,yyy,x,x	xx,yyy,x,x	✔	
wordsWithout(['aa', 'ab', 'ac', 'aa'], 'aa') // → ab,ac	ab,ac	✔


