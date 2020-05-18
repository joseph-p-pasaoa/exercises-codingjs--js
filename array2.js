// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// Array-2 //

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
fizzArray(0) →		✔	
fizzArray(2) // → 0,1	0,1	✔	
fizzArray(7) // → 0,1,2,3,4,5,6	0,1,2,3,4,5,6	✔


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
fizzArray2(0) →		✔	
fizzArray2(7) // → 0,1,2,3,4,5,6	0,1,2,3,4,5,6	✔	
fizzArray2(9) // → 0,1,2,3,4,5,6,7,8	0,1,2,3,4,5,6,7,8	✔	
fizzArray2(11) // → 0,1,2,3,4,5,6,7,8,9,10	0,1,2,3,4,5,6,7,8,9,10	✔


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



// Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding 
// element in nums2 (at the same index). Return the count of the number of times that the two elements differ 
// by 2 or less, but are not equal.
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



// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's 
// separated by one element, such as with {7, 1, 7}
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



// Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.
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



// Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.
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



