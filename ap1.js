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
scoresClump([3, 4, 5]) → true	true	✔	
scoresClump([3, 4, 6]) → false	false	✔	
scoresClump([1, 3, 5, 5]) → true	true	✔	
scoresClump([2, 4, 5, 6]) → true	true	✔	
scoresClump([2, 4, 5, 7]) → false	false	✔	
scoresClump([2, 4, 4, 7]) → true	true	✔	
scoresClump([3, 3, 6, 7, 9]) → false	false	✔	
scoresClump([3, 3, 7, 7, 9]) → true	true	✔	
scoresClump([4, 5, 8]) → false	false	✔


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
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 1) → bb,ccc	bb,ccc	✔	
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 3) → a,bb,b	a,bb,b	✔	
wordsWithoutList(['a', 'bb', 'b', 'ccc'], 4) → a,bb,b,ccc	a,bb,b,ccc	✔	
wordsWithoutList(['xx', 'yyy', 'x', 'yy', 'z'], 1) → xx,yyy,yy	xx,yyy,yy	✔

