// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// AP-1 //

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


function wordsFront(words,n){
  return words.slice(0, n);
}
wordsFront(['a', 'b', 'c', 'd'], 1) // → a	a	✔	
wordsFront(['a', 'b', 'c', 'd'], 2) // → a,b	a,b	✔	
wordsFront(['a', 'b', 'c', 'd'], 3) // → a,b,c	a,b,c	✔	
wordsFront(['a', 'b', 'c', 'd'], 4) // → a,b,c,d	a,b,c,d	✔	
wordsFront(['Hi', 'There'], 1) // → Hi	Hi	✔


function wordsWithoutList(words,len){
  return words.filter(word => word.length !== len);
}
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 1) // → bb,ccc	bb,ccc	✔	
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 3) // → a,bb,b	a,bb,b	✔	
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 4) // → a,bb,b,ccc	a,bb,b,ccc	✔	
wordsWithoutList(['xx', 'yyy', 'x', 'yy', 'z'], 1) // → xx,yyy,yy	xx,yyy,yy	✔


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


function matchUp(a,b){
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = Math.abs(a[i] - b[i]);
    if (diff <= 2 && diff >= 1) {
      count += 1;
    }
  }
  return count;
}
matchUp([1, 2, 3], [2, 3, 10]) // → 2	2	✔	
matchUp([1, 2, 3], [2, 3, 5]) // → 3	3	✔	
matchUp([1, 2, 3], [2, 3, 3]) // → 2	2	✔	
matchUp([5, 3], [5, 5]) // → 1	1	✔	
matchUp([5, 3], [4, 4]) // → 2	2	✔	
matchUp([5, 3], [3, 3]) // → 1	1	✔	
matchUp([5, 3], [2, 2]) // → 1	1	✔	
matchUp([5, 3], [1, 1]) // → 1	1	✔	
matchUp([5, 3], [0, 0]) // → 0	0	✔	
matchUp([4], [4]) // → 0	0	✔	
matchUp([4], [5]) // → 1	1 ✔	


function has77(nums){
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 7) {
      if (nums[i + 1] === 7 || nums[i + 2] === 7) {
        return true;
      }
    }
  }
  return false;
}
has77([1, 7, 7]) // → true	true	✔	
has77([1, 7, 1, 7]) // → true	true	✔	
has77([1, 7, 1, 1, 7]) // → false	false	✔	
has77([7, 7, 1, 1, 7]) // → true	true	✔	
has77([2, 7, 2, 2, 7, 2]) // → false	false	✔	
has77([2, 7, 2, 2, 7, 7]) // → true	true	✔	
has77([7, 2, 7, 2, 2, 7]) // → true	true	✔	
has77([7, 2, 6, 2, 2, 7]) // → false	false	✔	
has77([7, 7, 7]) // → true	true	✔	
has77([7, 1, 7]) // → true	true	✔	
has77([7, 1, 1]) // → false	false	✔	
has77([1, 2]) // → false	false	✔	
has77([1, 7]) // → false	false	✔	
has77([7]) // → false	false	✔


