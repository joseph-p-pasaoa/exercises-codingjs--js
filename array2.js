// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// ARRAY-2
//



/* FINDLOWESTINDEX
Return the index of the minimum value in an array. The input array will have at least one element in it.
*/

function findLowestIndex(nums){
  let min = Infinity;
  let minIndex = null;
  for (let [i, num] of nums.entries()) {
    if (num < min) {
      minIndex = i;
      min = num;
    }
  }
  return minIndex;
}
findLowestIndex([99, 98, 97, 96, 95]) // → 4	4	✔	
findLowestIndex([2, 2, 0]) // → 2	2	✔	
findLowestIndex([1, 3, 5]) // → 0	0	✔	
findLowestIndex([5]) // → 0	0	✔	
findLowestIndex([11, 9, 0, 1]) // → 2	2	✔	
findLowestIndex([2, 11, 9, 0]) // → 3	3	✔	
findLowestIndex([2]) // → 0	0	✔	
findLowestIndex([2, 5, -12]) // → 2	2	✔


/* COUNTEVENS
Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
*/

function countEvens(nums){
  let counter = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      counter += 1;
    }
  }
  return counter;
}
countEvens([2, 1, 2, 3, 4]) // → 3	3	✔	
countEvens([2, 2, 0]) // → 3	3	✔	
countEvens([1, 3, 5]) // → 0	0	✔	
countEvens([]) // → 0	0	✔	
countEvens([11, 9, 0, 1]) // → 1	1	✔	
countEvens([2, 11, 9, 0]) // → 2	2	✔	
countEvens([2]) // → 1	1	✔	
countEvens([2, 5, 12]) // → 2	2	✔


/* BIGDIFF
Given an array length 1 or more of ints, return the difference between the largest and smallest values in the
array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.
*/

function bigDiff(nums){
  const workArr = [nums[0]];
  for (let i = 1; i <= nums.length; i++) {
    if (Math.max(nums[i], workArr[workArr.length - 1]) === nums[i]) {
      workArr.push(nums[i]);
    } else if (Math.min(nums[i], workArr[0]) === nums[i]) {
      workArr.unshift(nums[i]);
    }
  }
  return workArr[workArr.length - 1] - workArr[0];
}
bigDiff([10, 3, 5, 6]) // → 7	7	✔	
bigDiff([7, 2, 10, 9]) // → 8	8	✔	
bigDiff([2, 10, 7, 2]) // → 8	8	✔	
bigDiff([2, 10]) // → 8	8	✔	
bigDiff([10, 2]) // → 8	8	✔	
bigDiff([10, 0]) // → 10	10	✔	
bigDiff([2, 3]) // → 1	1	✔	
bigDiff([2, 2]) // → 0	0	✔	
bigDiff([2]) // → 0	0	✔	
bigDiff([5, 1, 6, 1, 9, 9]) // → 8	8	✔	
bigDiff([7, 6, 8, 5]) // → 3	3	✔	
bigDiff([7, 7, 6, 8, 5, 5, 6]) // → 3	3	✔


/* CENTEREDAVERAGE
Return the "centered" average of an array of ints, which we'll say is the mean average of the values,
except ignoring the largest and smallest values in the array. If there are multiple copies of the
smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce
the final average. You may assume that the array is length 3 or more.
*/

function centeredAverage(nums){
  let sum = nums[0] + nums[1];
  let min = Math.min(nums[0], nums[1]);
  let max = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  return (sum - (min + max)) / (nums.length - 2);
}
centeredAverage([1, 2, 3, 4, 100]) // → 3	3	✔	
centeredAverage([1, 1, 5, 5, 10, 8, 7]) // → 5.2	5.2	✔	
centeredAverage([-10, -4, -2, -4, -2, 0]) // → -3	-3	✔	
centeredAverage([5, 3, 4, 6, 2]) // → 4	4	✔	
centeredAverage([5, 3, 4, 0, 100]) // → 4	4	✔	
centeredAverage([100, 0, 5, 3, 4]) // → 4	4	✔	
centeredAverage([4, 0, 100]) // → 4	4	✔	
centeredAverage([0, 2, 3, 4, 100]) // → 3	3	✔	
centeredAverage([1, 1, 100]) // → 1	1	✔	
centeredAverage([7, 7, 7]) // → 7	7	✔	
centeredAverage([1, 7, 8]) // → 7	7	✔	
centeredAverage([1, 1, 99, 99]) // → 50	50	✔	
centeredAverage([1000, 0, 1, 99]) // → 50	50	✔	
centeredAverage([4, 4, 4, 4, 5]) // → 4	4	✔	
centeredAverage([4, 4, 4, 1, 5]) // → 4	4	✔	
centeredAverage([6, 4, 8, 12, 3]) // → 6	6	✔


/* SUM13
Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very
unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
*/

function sum13(nums){
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      i += 1;
    } else {
      sum += nums[i];
    }
  }
  return sum;
}
sum13([1, 2, 2, 1]) // → 6	6	✔	
sum13([1, 1]) // → 2	2	✔	
sum13([1, 2, 2, 1, 13]) // → 6	6	✔	
sum13([1, 2, 13, 2, 1, 13]) // → 4	4	✔	
sum13([13, 1, 2, 13, 2, 1, 13]) // → 3	3	✔	
sum13([]) // → 0	0	✔	
sum13([13]) // → 0	0	✔	
sum13([13, 13]) // → 0	0	✔	
sum13([13, 0, 13]) // → 0	0	✔	
sum13([13, 1, 13]) // → 0	0	✔	
sum13([5, 7, 2]) // → 14	14	✔	
sum13([5, 13, 2]) // → 5	5	✔	
sum13([0]) // → 0	0	✔	
sum13([13, 0]) // → 0	0	✔


/* SUM67
Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and
extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
*/

function sum67(nums){
  let amAdding = true;
  let sum = 0;
  for (let num of nums) {
    if (amAdding) {
      if (num.toString()[0] === "6") {
        amAdding = false;
      } else {
        sum += num;
      }
    } else {
      if (num.toString().includes("7")) {
        amAdding = true;
      }
    }
  }
  return sum;
}
sum67([1, 2, 2]) // → 5	5	✔	
sum67([1, 2, 2, 6, 99, 99, 7]) // → 5	5	✔	
sum67([1, 1, 6, 7, 2]) // → 4	4	✔	
sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7]) // → 2	2	✔	
sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7]) // → 2	2	✔	
sum67([2, 7, 6, 2, 6, 7, 2, 7]) // → 18	18	✔	
sum67([2, 7, 6, 2, 6, 2, 7]) // → 9	9	✔	
sum67([1, 6, 7, 7]) // → 8	8	✔	
sum67([6, 7, 1, 6, 7, 7]) // → 8	8	✔	
sum67([6, 8, 1, 6, 7]) // → 0	0	✔	
sum67([]) // → 0	0	✔	
sum67([6, 7, 11]) // → 11	11	✔	
sum67([11, 6, 7, 11]) // → 22	22	✔	
sum67([2, 2, 6, 7, 7]) // → 11	11	✔


/* HAS22
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.
*/

function has22(nums){
  for (let [i, num] of nums.entries()) {
    if (num === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;
}
has22([1, 2, 2]) // → true	true	✔	
has22([1, 2, 1, 2]) // → false	false	✔	
has22([2, 1, 2]) // → false	false	✔	
has22([2, 2, 1, 2]) // → true	true	✔	
has22([1, 3, 2]) // → false	false	✔	
has22([1, 3, 2, 2]) // → true	true	✔	
has22([2, 3, 2, 2]) // → true	true	✔	
has22([4, 2, 4, 2, 2, 5]) // → true	true	✔	
has22([1, 2]) // → false	false	✔	
has22([2, 2]) // → true	true	✔	
has22([2]) // → false	false	✔	
has22([]) // → false	false	✔	
has22([3, 3, 2, 2]) // → true	true	✔	
has22([5, 2, 5, 2]) // → false	false	✔


/* LUCKY13
Given an array of ints, return true if the array contains no 1's and no 3's.
*/

function lucky13(nums){
  return nums.every(num => num !== 1 && num !== 3);
}
lucky13([0, 2, 4]) // → true	true	✔	
lucky13([1, 2, 3]) // → false	false	✔	
lucky13([1, 2, 4]) // → false	false	✔	
lucky13([2, 7, 2, 8]) // → true	true	✔	
lucky13([2, 7, 1, 8]) // → false	false	✔	
lucky13([3, 7, 2, 8]) // → false	false	✔	
lucky13([2, 7, 2, 1]) // → false	false	✔	
lucky13([1, 2]) // → false	false	✔	
lucky13([2, 2]) // → true	true	✔	
lucky13([2]) // → true	true	✔	
lucky13([3]) // → false	false	✔	
lucky13([]) // → true	true	✔


/* SUM28
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.
*/

function sum28(nums){
  return !nums.reduce((strikes, curr) => {
    if (curr === 2) {
      return strikes -= 1;
    }
    return strikes;
  }, 4);
}
sum28([2, 3, 2, 2, 4, 2]) // → true	true	✔	
sum28([2, 3, 2, 2, 4, 2, 2]) // → false	false	✔	
sum28([1, 2, 3, 4]) // → false	false	✔	
sum28([2, 2, 2, 2]) // → true	true	✔	
sum28([1, 2, 2, 2, 2, 4]) // → true	true	✔	
sum28([]) // → false	false	✔	
sum28([2]) // → false	false	✔	
sum28([8]) // → false	false	✔	
sum28([2, 2, 2]) // → false	false	✔	
sum28([2, 2, 2, 2, 2]) // → false	false	✔	
sum28([1, 2, 2, 1, 2, 2]) // → true	true	✔	
sum28([5, 2, 2, 2, 4, 2]) // → true	true	✔


/* MORE14
Given an array of ints, return true if the number of 1's is greater than the number of 4's
*/

function more14(nums){
  let favor1s = 0;
  for (let num of nums) {
    if (num === 1) {
      favor1s += 1;
    }
    if (num === 4) {
      favor1s -= 1;
    }
  }
  return favor1s > 0;
}
more14([1, 4, 1]) // → true	true	✔	
more14([1, 4, 1, 4]) // → false	false	✔	
more14([1, 1]) // → true	true	✔	
more14([1, 6, 6]) // → true	true	✔	
more14([1]) // → true	true	✔	
more14([1, 4]) // → false	false	✔	
more14([6, 1, 1]) // → true	true	✔	
more14([1, 6, 4]) // → false	false	✔	
more14([1, 1, 4, 4, 1]) // → true	true	✔	
more14([1, 1, 6, 4, 4, 1]) // → true	true	✔	
more14([]) // → false	false	✔	
more14([4, 1, 4, 6]) // → false	false	✔	
more14([4, 1, 4, 6, 1]) // → false	false	✔	
more14([1, 4, 1, 4, 1, 6]) // → true	true	✔


/* PREPENDSUM
Return a modified version of the input array (nums), where the first two items have been removed and one
item – the sum of those two items - is added to the start of the array.
*/

function prependSum(nums){
  return [nums[0] + nums[1]].concat(nums.slice(2));
}
prependSum([1, 2, 4, 4]) // → 3,4,4	3,4,4	✔	
prependSum([3, 3, 0]) // → 6,0	6,0	✔	
prependSum([1, 1, 1, 1, 1]) // → 2,1,1,1	2,1,1,1	✔	
prependSum([5, 7]) // → 12	12	✔	
prependSum([0, 0, 0, 0]) // → 0,0,0	0,0,0	✔	
prependSum([12, 13, 19, 20]) // → 25,19,20	25,19,20	✔	
prependSum([-2, 2, -2, 2]) // → 0,-2,2	0,-2,2	✔	
prependSum([5, 4, 3, 2, 1, 0]) // → 9,3,2,1,0	9,3,2,1,0	✔


/* FIZZARRAY
Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1.
The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement
for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The
syntax to make a new array is let myArray = [];
*/

function fizzArray(n){
  let myArray = [];
  for (let i = 0; i < n; i++) {
    myArray.push(i);
  }
  return myArray;
}
fizzArray(4) // → 0,1,2,3	0,1,2,3	✔	
fizzArray(1) // → 0	0	✔	
fizzArray(10) // → 0,1,2,3,4,5,6,7,8,9	0,1,2,3,4,5,6,7,8,9	✔	
fizzArray(0) // →		✔	
fizzArray(2) // → 0,1	0,1	✔	
fizzArray(7) // → 0,1,2,3,4,5,6	0,1,2,3,4,5,6	✔


/* ONLY14
Given an array of ints, return true if every element is a 1 or a 4.
*/

function only14(nums){
  return nums.every(num => num === 1 || num === 4);
}
only14([1, 4, 1, 4]) // → true	true	✔	
only14([1, 4, 2, 4]) // → false	false	✔	
only14([1, 1]) // → true	true	✔	
only14([4, 1]) // → true	true	✔	
only14([2]) // → false	false	✔	
only14([]) // → true	true	✔	
only14([1, 4, 1, 3]) // → false	false	✔	
only14([3, 1, 3]) // → false	false	✔	
only14([1]) // → true	true	✔	
only14([4]) // → true	true	✔	
only14([3, 4]) // → false	false	✔	
only14([1, 3, 4]) // → false	false	✔	
only14([1, 1, 1]) // → true	true	✔	
only14([1, 1, 1, 5]) // → false	false	✔	
only14([4, 1, 4, 1]) // → true	true	✔


/* FIZZARRAY2
Given a number n, create and return a new string array of length n, containing the strings "0", "1",
"2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make
the String form of most types.
*/

function fizzArray2(n){
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(String(i));
  }
  return output;
}
fizzArray2(4) // → 0,1,2,3	0,1,2,3	✔	
fizzArray2(10) // → 0,1,2,3,4,5,6,7,8,9	0,1,2,3,4,5,6,7,8,9	✔	
fizzArray2(2) // → 0,1	0,1	✔	
fizzArray2(1) // → 0	0	✔	
fizzArray2(0) // →		✔	
fizzArray2(7) // → 0,1,2,3,4,5,6	0,1,2,3,4,5,6	✔	
fizzArray2(9) // → 0,1,2,3,4,5,6,7,8	0,1,2,3,4,5,6,7,8	✔	
fizzArray2(11) // → 0,1,2,3,4,5,6,7,8,9,10	0,1,2,3,4,5,6,7,8,9,10	✔


/* NO14
Given an array of ints, return true if it contains no 1's or it contains no 4's.
*/

function no14(nums){
  let seen = null;
  for (let num of nums) {
    if (num === 1 || num === 4) {
      if (!seen) {
        seen = num;
      } else {
        if (num !== seen) {
          return false;
        }
      }
    } 
  }
  return true;
}
no14([1, 2, 3]) // → true	true	✔	
no14([1, 2, 3, 4]) // → false	false	✔	
no14([2, 3, 4]) // → true	true	✔	
no14([1, 1, 4, 4]) // → false	false	✔	
no14([2, 2, 4, 4]) // → true	true	✔	
no14([2, 3, 4, 1]) // → false	false	✔	
no14([2, 1, 1]) // → true	true	✔	
no14([1, 4]) // → false	false	✔	
no14([2]) // → true	true	✔	
no14([2, 1]) // → true	true	✔	
no14([1]) // → true	true	✔	
no14([4]) // → true	true	✔	
no14([]) // → true	true	✔	
no14([1, 1, 1, 1]) // → true	true	✔	
no14([9, 4, 4, 1]) // → false	false	✔	
no14([4, 2, 3, 1]) // → false	false	✔	
no14([4, 2, 3, 5]) // → true	true	✔	
no14([4, 4, 2]) // → true	true	✔	
no14([1, 4, 4]) // → false	false	✔


/* ISEVERYWHERE
We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array,
at least one of the pair is that value. Return true if the given value is everywhere in the array.
*/

function isEverywhere(nums,val){
  let valGap = 0;
  for (let num of nums) {
    if (num === val) {
      valGap = 0;
    } else {
      valGap += 1;
      if (valGap > 1) return false;
    }
  }

  return true;
}
isEverywhere([1, 2, 1, 3], 1) // → true	true	✔	
isEverywhere([1, 2, 1, 3], 2) // → false	false	✔	
isEverywhere([1, 2, 1, 3, 4], 1) // → false	false	✔	
isEverywhere([2, 1, 2, 1], 1) // → true	true	✔	
isEverywhere([2, 1, 2, 1], 2) // → true	true	✔	
isEverywhere([2, 1, 2, 3, 1], 2) // → false	false	✔	
isEverywhere([3, 1], 3) // → true	true	✔	
isEverywhere([3, 1], 2) // → false	false	✔	
isEverywhere([3], 1) // → true	true	✔	
isEverywhere([], 1) // → true	true	✔	
isEverywhere([1, 2, 1, 2, 3, 2, 5], 2) // → true	true	✔	
isEverywhere([1, 2, 1, 1, 1, 2], 2) // → false	false	✔	
isEverywhere([2, 1, 2, 1, 1, 2], 2) // → false	false	✔	
isEverywhere([2, 1, 2, 2, 2, 1, 1, 2], 2) // → false	false	✔	
isEverywhere([2, 1, 2, 2, 2, 1, 2, 1], 2) // → true	true	✔	
isEverywhere([2, 1, 2, 1, 2], 2) // → true	true	✔


/* EITHER24
Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.
*/

function either24(nums){
  let seenDoubled = null;
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] === 2 || nums[i] === 4) && nums[i] === nums[i + 1]) {
      if (!seenDoubled) {
        seenDoubled = nums[i];
      } else if (seenDoubled !== nums[i]) {
        return false;
      }
    }
  }
  return !!seenDoubled;
}
either24([1, 2, 2]) // → true	true	✔	
either24([4, 4, 1]) // → true	true	✔	
either24([4, 4, 1, 2, 2]) // → false	false	✔	
either24([1, 2, 3, 4]) // → false	false	✔	
either24([3, 5, 9]) // → false	false	✔	
either24([1, 2, 3, 4, 4]) // → true	true	✔	
either24([2, 2, 3, 4]) // → true	true	✔	
either24([1, 2, 3, 2, 2, 4]) // → true	true	✔	
either24([1, 2, 3, 2, 2, 4, 4]) // → false	false	✔	
either24([1, 2]) // → false	false	✔	
either24([2, 2]) // → true	true	✔	
either24([4, 4]) // → true	true	✔	
either24([2]) // → false	false	✔	
either24([]) // → false	false	✔


/* MATCHUP
Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding 
element in nums2 (at the same index). Return the count of the number of times that the two elements differ 
by 2 or less, but are not equal.
*/

function matchUp(a,b){
  if (a.length < 1) {
    return 0;
  }
  const diff = Math.abs(a[0] - b[0]);
  if (diff !== 0 && diff <= 2) {
    return 1 + matchUp(a.slice(1), b.slice(1));
  }
  return matchUp(a.slice(1), b.slice(1));
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
matchUp([4], [5]) // → 1	1	✔


/* HAS77
Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's 
separated by one element, such as with {7, 1, 7}
*/

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


/* HAS12
Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.
*/

function has12(nums){
  let willFailOn2 = false;
  for (let num of nums) {
    if (num === 1) {
      willFailOn2 = true;
    } else if (willFailOn2 && num === 2) {
      return true;
    }
  }
  return false;
}
has12([1, 3, 2]) // → true	true	✔	
has12([3, 1, 2]) // → true	true	✔	
has12([3, 1, 4, 5, 2]) // → true	true	✔	
has12([3, 1, 4, 5, 6]) // → false	false	✔	
has12([3, 1, 4, 1, 6, 2]) // → true	true	✔	
has12([2, 1, 4, 1, 6, 2]) // → true	true	✔	
has12([2, 1, 4, 1, 6]) // → false	false	✔	
has12([1]) // → false	false	✔	
has12([2, 1, 3]) // → false	false	✔	
has12([2, 1, 3, 2]) // → true	true	✔	
has12([2]) // → false	false	✔	
has12([3, 2]) // → false	false	✔	
has12([3, 1, 3, 2]) // → true	true	✔	
has12([3, 5, 9]) // → false	false	✔	
has12([3, 5, 1]) // → false	false	✔	
has12([3, 2, 1]) // → false	false	✔	
has12([1, 2]) // → true	true	✔


/* MODTHREE
Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.
*/

function modThree(nums){
  // helper: gives value of +1 to even nums, -1 to odd nums
  const addEvenMinusOdd = (num) => {
    if (num % 2 === 0) {
      return 1;
    }
    return -1;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    const typeSum =
      addEvenMinusOdd(nums[i]) +
      addEvenMinusOdd(nums[i + 1]) +
      addEvenMinusOdd(nums[i + 2]);
    if (Math.abs(typeSum) === 3) {
      return true;
    }
  }
  return false;
}
modThree([2, 1, 3, 5]) // → true	true	✔	
modThree([2, 1, 2, 5]) // → false	false	✔	
modThree([2, 4, 2, 5]) // → true	true	✔	
modThree([1, 2, 1, 2, 1]) // → false	false	✔	
modThree([9, 9, 9]) // → true	true	✔	
modThree([1, 2, 1]) // → false	false	✔	
modThree([1, 2]) // → false	false	✔	
modThree([1]) // → false	false	✔	
modThree([]) // → false	false	✔	
modThree([9, 7, 2, 9]) // → false	false	✔	
modThree([9, 7, 2, 9, 2, 2]) // → false	false	✔	
modThree([9, 7, 2, 9, 2, 2, 6]) // → true	true	✔



/* FINDTHEMEDIAN
Write a method that returns the median value of an array. The input array will never be empty. If the
array is odd in length, the median is the value in the centre of the array. If the array is even, the
median should be the average of the two middle values. Hint: You will need to ensure the input array
is sorted - there is a sort() array method you can use for this step.
*/

function findTheMedian(nums){
  const sorted = nums.sort((a, b) => a - b);
  const length = nums.length;
  const mid = Math.floor(length / 2);
  if (length % 2 === 1) {
    return nums[mid];
  } else {
    const [medianLeft, medianRight] = [
      nums[mid - 1], nums[mid]
    ];
    return (medianLeft + medianRight) / 2;
  }
}

findTheMedian([4,9,9,2,1,5]) // → 4.5	4.5	✔	
findTheMedian([1, 5, 3, 1 , 5]) // → 3	3	✔	
findTheMedian([10, 12, 15]) // → 12	12	✔	
findTheMedian([5]) // → 5	5	✔	
findTheMedian([11, 9, 0, 1]) // → 5	5	✔	
findTheMedian([-1, 11, -2, 10, -3, 15]) // → 4.5	4.5	✔	
findTheMedian([2, 10, 15, 13]) // → 11.5	11.5	✔	
findTheMedian([2, 5, -12]) // → 2	2	✔



/* HAVETHREE
Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
*/

function haveThree(nums){
  let counter = 0;
  let wasThreeLast = false;
  for (let num of nums) {
    if (num === 3) {
      if (wasThreeLast === true) return false;

      counter += 1;
      wasThreeLast = true;
    } else {
      wasThreeLast = false;
    }
  }
  return counter === 3;
}

haveThree([3, 1, 3, 1, 3]) // → true	true	✔	
haveThree([3, 1, 3, 3]) // → false	false	✔	
haveThree([3, 4, 3, 3, 4]) // → false	false	✔	
haveThree([1, 3, 1, 3, 1, 2]) // → false	false	✔	
haveThree([1, 3, 1, 3, 1, 3]) // → true	true	✔	
haveThree([1, 3, 3, 1, 3]) // → false	false	✔	
haveThree([1, 3, 1, 3, 1, 3, 4, 3]) // → false	false	✔	
haveThree([3, 4, 3, 4, 3, 4, 4]) // → true	true	✔	
haveThree([3, 3, 3]) // → false	false	✔	
haveThree([1, 3]) // → false	false	✔	
haveThree([3]) // → false	false	✔	
haveThree([1]) // → false	false	✔



/* TWOTWO
Given an array of ints, return true if every 2 that appears in the array is next to another 2.
*/

function twoTwo(nums){
  let isAlreadyTwoGroup = false;
  let isConsecutiveTwos = false;
  for (let num of nums) {
    if (num === 2) {
      if (isAlreadyTwoGroup) return false;

      if (isConsecutiveTwos === false) {
        isConsecutiveTwos = true;
      }
    } else if (isConsecutiveTwos) {
      isAlreadyTwoGroup = true;
      isConsecutiveTwos = false;
    }
  }
  return true;
}

twoTwo([4, 2, 2, 3]) // → true	true	✔	
twoTwo([2, 2, 4]) // → true	true	✔	
twoTwo([2, 2, 4, 2]) // → false	false	✔	
twoTwo([1, 3, 4]) // → true	true	✔	
twoTwo([1, 2, 2, 3, 4]) // → true	true	✔	
twoTwo([1, 2, 3, 4]) // → true	true	✔	
twoTwo([2, 2]) // → true	true	✔	
twoTwo([2, 2, 7]) // → true	true	✔	
twoTwo([2, 2, 7, 2, 1]) // → false	false	✔	
twoTwo([4, 2, 2, 2]) // → true	true	✔	
twoTwo([2, 2, 2]) // → true	true	✔	
twoTwo([1, 2]) // → true	true	✔	
twoTwo([2]) // → true	true	✔	
twoTwo([1]) // → true	true	✔	
twoTwo([]) // → true	true	✔	
twoTwo([5, 2, 2, 3]) // → true	true	✔	
twoTwo([2, 2, 5, 2]) // → false	false	✔


/* TRIPLEUP
Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
*/

function tripleUp(nums){
  if (nums.length <= 0) return false;
  
  for (let i = 0; i < nums.length; i++) {
    const [first, second, third] = [
      nums[i],
      nums[i + 1],
      nums[i + 2]
    ];
    if (second === undefined || third === undefined) {
      return false;
    }

    if (second + 1 !== third) {
      i++;
      continue;
    } else if (first + 1 === second) {
      return true;
    }
  }
}
tripleUp([1, 4, 5, 6, 2]) // → true	true	✔	
tripleUp([1, 2, 3]) // → true	true	✔	
tripleUp([1, 2, 4]) // → false	false	✔	
tripleUp([1, 2, 4, 5, 7, 6, 5, 6, 7, 6]) // → true	true	✔	
tripleUp([1, 2, 4, 5, 7, 6, 5, 7, 7, 6]) // → false	false	✔	
tripleUp([1, 2]) // → false	false	✔	
tripleUp([1]) // → false	false	✔	
tripleUp([]) // → false	false	✔	
tripleUp([10, 9, 8, -100, -99, -98, 100]) // → true	true	✔	
tripleUp([10, 9, 8, -100, -99, 99, 100]) // → false	false	✔	
tripleUp([-100, -99, -99, 100, 101, 102]) // → true	true	✔	
tripleUp([2, 3, 5, 6, 8, 9, 2, 3]) // → false	false	✔


/* FIZZARRAY3
Given start and end numbers, return a new array containing the sequence of integers from start up to but not
including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the
start number. Note that a length-0 array is valid.
*/

function fizzArray3(start,end){
  const output = [];
  for (let i = start; i < end; i++) {
    output.push(i);
  }

  return output;
}
fizzArray3(5, 10) // → 5,6,7,8,9	5,6,7,8,9	✔	
fizzArray3(11, 18) // → 11,12,13,14,15,16,17	11,12,13,14,15,16,17	✔	
fizzArray3(1, 3) // → 1,2	1,2	✔	
fizzArray3(1, 2) // → 1	1	✔	
fizzArray3(1, 1) // →		✔	
fizzArray3(1000, 1005) // → 1000,1001,1002,1003,1004	1000,1001,1002,1003,1004	✔


/* SHIFTLEFT
Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify
and return the given array, or return a new array.
*/

function shiftLeft(nums){
  const toShift = 1 % nums.length;
  return nums.slice(toShift).concat(
    nums.slice(0, toShift)
  );
}
shiftLeft([6, 2, 5, 3]) // → 2,5,3,6	2,5,3,6	✔	
shiftLeft([1, 2]) // → 2,1	2,1	✔	
shiftLeft([1]) // → 1	1	✔	
shiftLeft([]) // →		✔	
shiftLeft([1, 1, 2, 2, 4]) // → 1,2,2,4,1	1,2,2,4,1	✔	
shiftLeft([1, 1, 1]) // → 1,1,1	1,1,1	✔	
shiftLeft([1, 2, 3]) // → 2,3,1	2,3,1	✔


/* TENRUN
For each multiple of 10 in the given array, change all the values following it to be that multiple
of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
*/

function tenRun(nums){
  let overwrite = -1;
  return nums.map(num => {
    if (num % 10 === 0) {
      overwrite = num;
    }

    return overwrite === -1
      ? num
      : overwrite;
  });
}
tenRun([2, 10, 3, 4, 20, 5]) // → 2,10,10,10,20,20	2,10,10,10,20,20	✔	
tenRun([10, 1, 20, 2]) // → 10,10,20,20	10,10,20,20	✔	
tenRun([10, 1, 9, 20]) // → 10,10,10,20	10,10,10,20	✔	
tenRun([1, 2, 50, 1]) // → 1,2,50,50	1,2,50,50	✔	
tenRun([1, 20, 50, 1]) // → 1,20,50,50	1,20,50,50	✔	
tenRun([10, 10]) // → 10,10	10,10	✔	
tenRun([10, 2]) // → 10,10	10,10	✔	
tenRun([0, 2]) // → 0,0	0,0	✔	
tenRun([1, 2]) // → 1,2	1,2	✔	
tenRun([1]) // → 1	1	✔	
tenRun([]) // →		✔


/* PRE4
Given a non-empty array of ints, return a new array containing the elements from the original array that
come before the first 4 in the original array. The original array will contain at least one 4. Note that
it is valid in java to create an array of length 0.
*/

function pre4(nums){
  const output = [];
  for (let num of nums) {
    if (num === 4) break;

    output.push(num);
  }

  return output;
}
pre4([1, 2, 4, 1]) // → 1,2	1,2	✔	
pre4([3, 1, 4]) // → 3,1	3,1	✔	
pre4([1, 4, 4]) // → 1	1	✔	
pre4([1, 4, 4, 2]) // → 1	1	✔	
pre4([1, 3, 4, 2, 4]) // → 1,3	1,3	✔	
pre4([4, 4]) // →		✔	
pre4([3, 3, 4]) // → 3,3	3,3	✔	
pre4([1, 2, 1, 4]) // → 1,2,1	1,2,1	✔	
pre4([2, 1, 4, 2]) // → 2,1	2,1	✔	
pre4([2, 1, 2, 1, 4, 2]) // → 2,1,2,1	2,1,2,1	✔


