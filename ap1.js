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


/* SCORESSPECIAL
Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10,
such as 40 or 90. Return the sum of largest special score in A and the largest special score in B. To
practice decomposition, write a separate helper method which finds the largest special score in an array.
Write your helper method after your scoresSpecial() method in the JavaBat text area.
*/

function scoresSpecial(a,b){
  return getMaxSpecial(a) + getMaxSpecial(b);
}

function getMaxSpecial(arr) {
  let maxSpecial = 0;

  arr.forEach(num => {
    if (num % 10 === 0) {
      maxSpecial = Math.max(num, maxSpecial);
    }
  });

  return maxSpecial;
}
scoresSpecial([12, 10, 4], [2, 20, 30]) // → 40	40	✔	
scoresSpecial([20, 10, 4], [2, 20, 10]) // → 40	40	✔	
scoresSpecial([12, 11, 4], [2, 20, 31]) // → 20	20	✔	
scoresSpecial([1, 20, 2, 50], [3, 4, 5]) // → 50	50	✔	
scoresSpecial([3, 4, 5], [1, 50, 2, 20]) // → 50	50	✔	
scoresSpecial([10, 4, 20, 30], [20]) // → 50	50	✔	
scoresSpecial([10, 4, 20, 30], [20]) // → 50	50	✔	
scoresSpecial([10, 4, 20, 30], [3, 20, 99]) // → 50	50	✔	
scoresSpecial([10, 4, 20, 30], [30, 20, 99]) // → 60	60	✔	
scoresSpecial([], [2]) // → 0	0	✔	
scoresSpecial([], [20]) // → 20	20	✔	
scoresSpecial([14, 10, 4], [4, 20, 30]) // → 40	40	✔


/* SUMHEIGHTS
We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into
the array, return the sum of the changes for a walk beginning at the start index and ending at the end index.
For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6. The start end end
index will both be valid indexes into the array with start <= end.
*/

function sumHeights(heights,start,end){
  let altSum = 0;
  for (let i = start; i < end; i++) {
    const [curr, next] = [
      heights[i],
      heights[i + 1]
    ];
    altSum += Math.abs(curr - next);
  }

  return altSum;
}
sumHeights([5, 3, 6, 7, 2], 2, 4) // → 6	6	✔	
sumHeights([5, 3, 6, 7, 2], 0, 1) // → 2	2	✔	
sumHeights([5, 3, 6, 7, 2], 0, 4) // → 11	11	✔	
sumHeights([5, 3, 6, 7, 2], 1, 1) // → 0	0	✔	
sumHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3) // → 3	3	✔	
sumHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8) // → 11	11	✔	
sumHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8) // → 8	8	✔	
sumHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8) // → 0	0	✔	
sumHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2) // → 0	0	✔	
sumHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6) // → 3	3	✔	
sumHeights([10, 8, 7, 7, 7, 6, 7], 1, 4) // → 1	1	✔	
sumHeights([10, 8, 7, 7, 7, 6, 7], 1, 5) // → 2	2	✔


/* SUMHEIGHTS2
(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a
walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning
at the start index and ending at the end index, however increases in height count double. For example, with
the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1*2 + 5 = 7. The start end end index will
both be valid indexes into the array with start <= end.
*/

function sumHeights2(heights,start,end){
  let altTally = 0;
  for (let i = start; i < end; i++) {
    const [curr, next] = [
      heights[i],
      heights[i + 1]
    ];
    altTally += next > curr
      ? Math.abs(next - curr) * 2
      : Math.abs(next - curr);
  }

  return altTally;
}
sumHeights2([5, 3, 6, 7, 2], 2, 4) // → 7	7	✔	
sumHeights2([5, 3, 6, 7, 2], 0, 1) // → 2	2	✔	
sumHeights2([5, 3, 6, 7, 2], 0, 4) // → 15	15	✔	
sumHeights2([5, 3, 6, 7, 2], 1, 1) // → 0	0	✔	
sumHeights2([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3) // → 6	6	✔	
sumHeights2([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8) // → 19	19	✔	
sumHeights2([1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8) // → 16	16	✔	
sumHeights2([1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8) // → 0	0	✔	
sumHeights2([1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2) // → 0	0	✔	
sumHeights2([1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6) // → 4	4	✔	
sumHeights2([10, 8, 7, 7, 7, 6, 7], 1, 4) // → 1	1	✔	
sumHeights2([10, 8, 7, 7, 7, 6, 7], 1, 5) // → 2	2	✔


/* BIGHEIGHTS
(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a
walking trail. Given start/end indexes into the array, return the number of "big" steps for a walk starting
at the start index and ending at the end index. We'll say that step is big if it is 5 or more up or down.
The start end end index will both be valid indexes into the array with start <= end.
*/

function bigHeights(heights,start,end){
  let bigSteps = 0;
  for (let i = start; i < end; i++) {
    const [curr, next] = [
      heights[i],
      heights[i + 1]
    ];
    const diff = Math.abs(curr - next);
    if (diff >= 5) bigSteps++;
  }

  return bigSteps;
}
bigHeights([5, 3, 6, 7, 2], 2, 4) // → 1	1	✔	
bigHeights([5, 3, 6, 7, 2], 0, 1) // → 0	0	✔	
bigHeights([5, 3, 6, 7, 2], 0, 4) // → 1	1	✔	
bigHeights([5, 3, 6, 7, 3], 0, 4) // → 0	0	✔	
bigHeights([5, 3, 6, 7, 2], 1, 1) // → 0	0	✔	
bigHeights([5, 13, 6, 7, 2], 1, 2) // → 1	1	✔	
bigHeights([5, 13, 6, 7, 2], 0, 2) // → 2	2	✔	
bigHeights([5, 13, 6, 7, 2], 1, 4) // → 2	2	✔	
bigHeights([5, 13, 6, 7, 2], 0, 4) // → 3	3	✔	
bigHeights([5, 13, 6, 7, 2], 0, 3) // → 2	2	✔	
bigHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3) // → 0	0	✔	
bigHeights([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8) // → 1	1	✔	
bigHeights([1, 2, 3, 14, 5, 4, 3, 2, 10], 0, 3) // → 1	1	✔	
bigHeights([1, 2, 3, 14, 5, 4, 3, 2, 10], 7, 8) // → 1	1	✔	
bigHeights([1, 2, 3, 14, 5, 4, 3, 2, 10], 3, 8) // → 2	2	✔	
bigHeights([1, 2, 3, 14, 5, 4, 3, 2, 10], 2, 8) // → 3	3	✔


/* USERCOMPARE
We have data for two users, A and B, each with a String name and an int id. The goal is to order the users
such as for sorting. Return -1 if A comes before B, 1 if A comes after B, and 0 if they are the same. Order
first by the string names, and then by the id numbers if the names are the same. Note: with Strings
str1.compareTo(str2) returns an int value which is negative/0/positive to indicate how str1 is ordered to
str2 (the value is not limited to -1/0/1). (On the AP, there would be two User objects, but here the code
simply takes the two strings and two ints directly. The code logic is the same.)
*/

function userCompare(aName,aId,bName,bId){
  if (aName !== bName) {
    const sorted = [aName, bName].sort();
    return sorted[0] === aName
      ? -1
      : 1;
  }

  if (aId === bId) return 0;
  return aId < bId
    ? -1
    : 1;
}
userCompare('bb', 1, 'zz', 2) // → -1	-1	✔	
userCompare('bb', 1, 'aa', 2) // → 1	1	✔	
userCompare('bb', 1, 'bb', 1) // → 0	0	✔	
userCompare('bb', 5, 'bb', 1) // → 1	1	✔	
userCompare('bb', 5, 'bb', 10) // → -1	-1	✔	
userCompare('adam', 1, 'bob', 2) // → -1	-1	✔	
userCompare('bob', 1, 'bob', 2) // → -1	-1	✔	
userCompare('bzb', 1, 'bob', 2) // → 1	1	✔


/* MERGETWO
Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates.
Return a new array containing the first N elements from the two arrays. The result array should be in
alphabetical order and without duplicates. A and B will both have a length which is N or more. The best
"linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical
order, copying elements directly to the new array.
*/

function mergeTwo(a,b,n){
  const merged = [];
  let [aIdx, bIdx] = [0, 0];
  let last = '';
  while (merged.length < n) {

    while (a[aIdx] <= last) {
      aIdx++;
    }
    while (b[bIdx] <= last) {
      bIdx++;
    }

    const currentAdd = a[aIdx] <= b[bIdx]
      ? a[aIdx]
      : b[bIdx];
    merged.push(currentAdd);
    last = currentAdd;
  }

  return merged;
}
mergeTwo(['a', 'c', 'z'], ['b', 'f', 'z'], 3) // → a,b,c	a,b,c	✔	
mergeTwo(['a', 'c', 'z'], ['c', 'f', 'z'], 3) // → a,c,f	a,c,f	✔	
mergeTwo(['f', 'g', 'z'], ['c', 'f', 'g'], 3) // → c,f,g	c,f,g	✔	
mergeTwo(['a', 'c', 'z'], ['a', 'c', 'z'], 3) // → a,c,z	a,c,z	✔	
mergeTwo(['a', 'b', 'c', 'z'], ['a', 'c', 'z'], 3) // → a,b,c	a,b,c	✔	
mergeTwo(['a', 'c', 'z'], ['a', 'b', 'c', 'z'], 3) // → a,b,c	a,b,c	✔	
mergeTwo(['a', 'c', 'z'], ['a', 'c', 'z'], 2) // → a,c	a,c	✔	
mergeTwo(['a', 'c', 'z'], ['a', 'c', 'y', 'z'], 3) // → a,c,y	a,c,y	✔	
mergeTwo(['x', 'y', 'z'], ['a', 'b', 'z'], 3) // → a,b,x	a,b,x	✔


/* COMMONTWO
Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return
the count of the number of strings which appear in both arrays. The best "linear" solution makes a single
pass over both arrays, taking advantage of the fact that they are in alphabetical order.
*/

function commonTwo(a,b){
  let commons = 0;
  let [aIdx, bIdx] = [0, 0];
  let last = '';

  while (aIdx < a.length && bIdx < b.length) {

    if (a[aIdx] < b[bIdx] || a[aIdx] <= last) {
      aIdx++;
      continue;
    }
    if (b[bIdx] < a[aIdx] || b[bIdx] <= last) {
      bIdx++;
      continue;
    }

    commons++;
    last = a[aIdx];

  }

  return commons;
}
commonTwo(['a', 'c', 'x'], ['b', 'c', 'd', 'x']) // → 2	2	✔	
commonTwo(['a', 'c', 'x'], ['a', 'b', 'c', 'x', 'z']) // → 3	3	✔	
commonTwo(['a', 'b', 'c'], ['a', 'b', 'c']) // → 3	3	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'c']) // → 3	3	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'b', 'b', 'c']) // → 3	3	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'b', 'c', 'c']) // → 3	3	✔	
commonTwo(['b', 'b', 'b', 'b', 'c'], ['a', 'b', 'b', 'b', 'c']) // → 2	2	✔	
commonTwo(['a', 'b', 'c', 'c', 'd'], ['a', 'b', 'b', 'c', 'd', 'd']) // → 4	4	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['b', 'b', 'b']) // → 1	1	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['c', 'c']) // → 1	1	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['b', 'b', 'b', 'x']) // → 1	1	✔	
commonTwo(['a', 'a', 'b', 'b', 'c'], ['b', 'b']) // → 1	1	✔	
commonTwo(['a'], ['a', 'b']) // → 1	1	✔	
commonTwo(['a'], ['b']) // → 0	0	✔	
commonTwo(['a', 'a'], ['b', 'b']) // → 0	0	✔	
commonTwo(['a', 'b'], ['a', 'b']) // → 2	2	✔
