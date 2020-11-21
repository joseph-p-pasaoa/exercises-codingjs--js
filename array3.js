// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// ARRAY-3
//



/* MAXSPAN
Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is
the number of elements between the two inclusive. A single value has a span of 1. Returns the largest
span found in the given array. (Efficiency is not a priority.)
*/

function maxSpan(nums){
  let maxSpan = 0;

  const spans = {};
  nums.forEach((num, i) => {
    let span = 1;
    if (spans[num] === undefined) {
      spans[num] = i;
    } else {
      const firstIndex = spans[num];
      span = i - firstIndex + 1;
    }
    maxSpan = Math.max(maxSpan, span);
  });

  return maxSpan;
}
maxSpan([1, 2, 1, 1, 3]) // → 4	4	✔	
maxSpan([1, 4, 2, 1, 4, 1, 4]) // → 6	6	✔	
maxSpan([1, 4, 2, 1, 4, 4, 4]) // → 6	6	✔	
maxSpan([3, 3, 3]) // → 3	3	✔	
maxSpan([3, 9, 3]) // → 3	3	✔	
maxSpan([3, 9, 9]) // → 2	2	✔	
maxSpan([3, 9]) // → 1	1	✔	
maxSpan([3, 3]) // → 2	2	✔	
maxSpan([]) // → 0	0	✔	
maxSpan([1]) // → 1	1	✔


/* FIX34
Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is
immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same
number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.
*/

function fix34(nums){
  let no34s = [];
  nums.forEach(num => {
    if (num === 3 || num === 4) return;

    no34s.push(num);
  });
  no34s.reverse();

  let output = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 3) {
      output = output.concat([3, 4]);
      i++;
    } else {
      output.push(no34s.pop());
    }
  }

  return output;
}
fix34([1, 3, 1, 4]) // → 1,3,4,1	1,3,4,1	✔	
fix34([1, 3, 1, 4, 4, 3, 1]) // → 1,3,4,1,1,3,4	1,3,4,1,1,3,4	✔	
fix34([3, 2, 2, 4]) // → 3,4,2,2	3,4,2,2	✔	
fix34([3, 2, 3, 2, 4, 4]) // → 3,4,3,4,2,2	3,4,3,4,2,2	✔	
fix34([2, 3, 2, 3, 2, 4, 4]) // → 2,3,4,3,4,2,2	2,3,4,3,4,2,2	✔	
fix34([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5]) // → 5,3,4,5,5,5,5,5,3,4,3,4	5,3,4,5,5,5,5,5,3,4,3,4	✔	
fix34([3, 1, 4]) // → 3,4,1	3,4,1	✔	
fix34([3, 4, 1]) // → 3,4,1	3,4,1	✔	
fix34([1, 1, 1]) // → 1,1,1	1,1,1	✔	
fix34([1]) // → 1	1	✔	
fix34([]) // →		✔	
fix34([7, 3, 7, 7, 4]) // → 7,3,4,7,7	7,3,4,7,7	✔	
fix34([3, 1, 4, 3, 1, 4]) // → 3,4,1,3,4,1	3,4,1,3,4,1	✔	
fix34([3, 1, 1, 3, 4, 4]) // → 3,4,1,3,4,1	3,4,1,3,4,1	✔


/* FIX45
(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers
as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every
other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that
is not a 4. In this version, 5's may appear anywhere in the original array.
*/

function fix45(nums){
  const no45s = [];
  nums.forEach(num => {
    if (num === 4 || num === 5) return;

    no45s.push(num);
  });
  no45s.reverse();

  let output = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 4) {
      output = output.concat([4, 5]);
      i++;
    } else {
      output.push(no45s.pop());
    }
  }

  return output;
}
fix45([5, 4, 9, 4, 9, 5]) // → 9,4,5,4,5,9	9,4,5,4,5,9	✔	
fix45([1, 4, 1, 5]) // → 1,4,5,1	1,4,5,1	✔	
fix45([1, 4, 1, 5, 5, 4, 1]) // → 1,4,5,1,1,4,5	1,4,5,1,1,4,5	✔	
fix45([4, 9, 4, 9, 5, 5, 4, 9, 5]) // → 4,5,4,5,9,9,4,5,9	4,5,4,5,9,9,4,5,9	✔	
fix45([5, 5, 4, 1, 4, 1]) // → 1,1,4,5,4,5	1,1,4,5,4,5	✔	
fix45([4, 2, 2, 5]) // → 4,5,2,2	4,5,2,2	✔	
fix45([4, 2, 4, 2, 5, 5]) // → 4,5,4,5,2,2	4,5,4,5,2,2	✔	
fix45([4, 2, 4, 5, 5]) // → 4,5,4,5,2	4,5,4,5,2	✔	
fix45([1, 1, 1]) // → 1,1,1	1,1,1	✔	
fix45([4, 5]) // → 4,5	4,5	✔	
fix45([5, 4, 1]) // → 1,4,5	1,4,5	✔	
fix45([]) // →		✔	
fix45([5, 4, 5, 4, 1]) // → 1,4,5,4,5	1,4,5,4,5	✔	
fix45([4, 5, 4, 1, 5]) // → 4,5,4,5,1	4,5,4,5,1	✔	
fix45([3, 4, 5]) // → 3,4,5	3,4,5	✔	
fix45([4, 1, 5]) // → 4,5,1	4,5,1	✔	
fix45([5, 4, 1]) // → 1,4,5	1,4,5	✔	
fix45([2, 4, 2, 5]) // → 2,4,5,2	2,4,5,2	✔


/* CANBALANCE
Given a non-empty array, return true if there is a place to split the array so that the sum of the
numbers on one side is equal to the sum of the numbers on the other side.
*/

function canBalance(nums){
  const total = nums.reduce((sum, curr) => sum + curr);

  let currSum = 0;

  const halfTotal = total / 2;
  if (halfTotal % 1 !== 0) return false;

  for (let num of nums) {
    currSum += num;
    if (currSum === halfTotal) {
      return true;
    }

    if (currSum > halfTotal) break;
  }
  return false;
}
canBalance([1, 1, 1, 2, 1]) // → true	true	✔	
canBalance([2, 1, 1, 2, 1]) // → false	false	✔	
canBalance([10, 10]) // → true	true	✔	
canBalance([10, 0, 1, -1, 10]) // → true	true	✔	
canBalance([1, 1, 1, 1, 4]) // → true	true	✔	
canBalance([2, 1, 1, 1, 4]) // → false	false	✔	
canBalance([2, 3, 4, 1, 2]) // → false	false	✔	
canBalance([1, 2, 3, 1, 0, 2, 3]) // → true	true	✔	
canBalance([1, 2, 3, 1, 0, 1, 3]) // → false	false	✔	
canBalance([1]) // → false	false	✔	
canBalance([1, 1, 1, 2, 1]) // → true	true	✔


/* LINEARIN
Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers
in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking
advantage of the fact that both arrays are already in sorted order.
*/

function linearIn(outer,inner){
  let outerIdx = 0;
  for (let innerIdx = 0; innerIdx < inner.length; innerIdx++) {
    const currentInner = inner[innerIdx];
    while (outer[outerIdx] < currentInner) {
      outerIdx++;
    }

    if (outer[outerIdx] === currentInner) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}
linearIn([1, 2, 4, 6], [2, 4]) // → true	true	✔	
linearIn([1, 2, 4, 6], [2, 3, 4]) // → false	false	✔	
linearIn([1, 2, 4, 4, 6], [2, 4]) // → true	true	✔	
linearIn([2, 2, 4, 4, 6, 6], [2, 4]) // → true	true	✔	
linearIn([2, 2, 2, 2, 2], [2, 2]) // → true	true	✔	
linearIn([2, 2, 2, 2, 2], [2, 4]) // → false	false	✔	
linearIn([2, 2, 2, 2, 4], [2, 4]) // → true	true	✔	
linearIn([1, 2, 3], [2]) // → true	true	✔	
linearIn([1, 2, 3], [-1]) // → false	false	✔	
linearIn([1, 2, 3], []) // → true	true	✔	
linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]) // → true	true	✔	
linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]) // → false	false	✔	
linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]) // → false	false	✔


/* SQUAREUP
Given n>=0, create an array length n*n with the following pattern, shown here for n=3 :
{0, 0, 1, 0, 2, 1, 3, 2, 1} (spaces added to show the 3 groups).
*/

function squareUp(n){
  let output = [];

  for (let round = n; round > 0; round--) {
    const segment = new Array(n).fill(0);

    for (let i = 0; i < round; i++) {
      const value = i + 1;
      segment[i] = value;
    }

    output = output.concat(segment);
  }
  output.reverse();

  return output;
}
squareUp(3) // → 0,0,1,0,2,1,3,2,1	0,0,1,0,2,1,3,2,1	✔	
squareUp(2) // → 0,1,2,1	0,1,2,1	✔	
squareUp(4) // → 0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1	0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1	✔	
squareUp(1) // → 1	1	✔	
squareUp(0) // →		✔


