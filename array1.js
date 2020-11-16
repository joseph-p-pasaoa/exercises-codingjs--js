// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// ARRAY-1
//



/* FIRSTLAST6
Given an array of ints, return true if 6 appears as either the first or last element in the array.
The array will be length 1 or more.
*/

function firstLast6(nums){
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}
firstLast6([1, 2, 6]) // → true	true	✔	
firstLast6([6, 1, 2, 3]) // → true	true	✔	
firstLast6([13, 6, 1, 2, 3]) // → false	false	✔	
firstLast6([13, 6, 1, 2, 6]) // → true	true	✔	
firstLast6([3, 2, 1]) // → false	false	✔	
firstLast6([3, 6, 1]) // → false	false	✔	
firstLast6([3, 6]) // → true	true	✔	
firstLast6([6]) // → true	true	✔	
firstLast6([3]) // → false	false	✔	
firstLast6([5, 6]) // → true	true	✔	
firstLast6([5, 5]) // → false	false	✔	
firstLast6([1, 2, 3, 4, 6]) // → true	true	✔	
firstLast6([1, 2, 3, 4]) // → false	false	✔


/* SAMEFIRSTLAST
Given an array of ints, return true if the array is length 1 or more, and the first element and the
last element are equal.
*/

function sameFirstLast(nums){
  return !!nums[0] && nums[0] === nums[nums.length - 1];
}
sameFirstLast([1, 2, 3]) // → false	false	✔	
sameFirstLast([1, 2, 3, 1]) // → true	true	✔	
sameFirstLast([1, 2, 1]) // → true	true	✔	
sameFirstLast([7]) // → true	true	✔	
sameFirstLast([]) // → false	false	✔	
sameFirstLast([1, 2, 3, 4, 5, 1]) // → true	true	✔	
sameFirstLast([1, 2, 3, 4, 5, 13]) // → false	false	✔	
sameFirstLast([13, 2, 3, 4, 5, 13]) // → true	true	✔	
sameFirstLast([7, 7]) // → true	true	✔


/* MAKEPI
Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.
*/

function makePi(){
  return [3, 1, 4];
}
makePi() // → 3,1,4	3,1,4	✔


/* COMMONEND
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the
same last element. Both arrays will be length 1 or more.
*/

function commonEnd(a,b){
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}
commonEnd([1, 2, 3], [7, 3]) // → true	true	✔	
commonEnd([1, 2, 3], [7, 3, 2]) // → false	false	✔	
commonEnd([1, 2, 3], [1, 3]) // → true	true	✔	
commonEnd([1, 2, 3], [1]) // → true	true	✔	
commonEnd([1, 2, 3], [2]) // → false	false	✔


/* SUM3
Given an array of ints length 3, return the sum of all the elements.
*/

function sum3(nums){
  return nums[0] + nums[1] + nums[2];
}
sum3([1, 2, 3]) // → 6	6	✔	
sum3([5, 11, 2]) // → 18	18	✔	
sum3([7, 0, 0]) // → 7	7	✔	
sum3([1, 2, 1]) // → 4	4	✔	
sum3([1, 1, 1]) // → 3	3	✔	
sum3([2, 7, 2]) // → 11	11	✔


/* ROTATELEFT3
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
*/

function rotateLeft3(nums){
  return [nums[1], nums[2], nums[0]];
}
rotateLeft3([1, 2, 3]) // → 2,3,1	2,3,1	✔	
rotateLeft3([5, 11, 9]) // → 11,9,5	11,9,5	✔	
rotateLeft3([7, 0, 0]) // → 0,0,7	0,0,7	✔	
rotateLeft3([1, 2, 1]) // → 2,1,1	2,1,1	✔	
rotateLeft3([0, 0, 1]) // → 0,1,0	0,1,0	✔


/* REVERSE3
Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.
*/

function reverse3(nums){
  return nums.reverse();
}
reverse3([1, 2, 3]) // → 3,2,1	3,2,1	✔	
reverse3([5, 11, 9]) // → 9,11,5	9,11,5	✔	
reverse3([7, 0, 0]) // → 0,0,7	0,0,7	✔	
reverse3([2, 1, 2]) // → 2,1,2	2,1,2	✔	
reverse3([1, 2, 1]) // → 1,2,1	1,2,1	✔	
reverse3([2, 11, 3]) // → 3,11,2	3,11,2	✔	
reverse3([0, 6, 5]) // → 5,6,0	5,6,0	✔	
reverse3([7, 2, 3]) // → 3,2,7	3,2,7	✔


/* MAXEND3
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set
all the other elements to be that value. Return the changed array.
*/

function maxEnd3(nums){
  const winner = nums[0] > nums[nums.length - 1] ? nums[0] : nums[nums.length - 1];
  return [winner, winner, winner];
}
maxEnd3([1, 2, 3]) // → 3,3,3	3,3,3	✔	
maxEnd3([11, 5, 9]) // → 11,11,11	11,11,11	✔	
maxEnd3([2, 11, 3]) // → 3,3,3	3,3,3	✔	
maxEnd3([11, 3, 3]) // → 11,11,11	11,11,11	✔	
maxEnd3([3, 11, 11]) // → 11,11,11	11,11,11	✔	
maxEnd3([2, 2, 2]) // → 2,2,2	2,2,2	✔	
maxEnd3([2, 11, 2]) // → 2,2,2	2,2,2	✔	
maxEnd3([0, 0, 1]) // → 1,1,1	1,1,1	✔


/* SUM2
Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less
than 2, just sum up the elements that exist, returning 0 if the array is length 0.
*/

function sum2(nums){
  return (nums[0] || 0) + (nums[1] || 0);
}
sum2([1, 2, 3]) // → 3	3	✔	
sum2([1, 1]) // → 2	2	✔	
sum2([1, 1, 1, 1]) // → 2	2	✔	
sum2([1, 2]) // → 3	3	✔	
sum2([1]) // → 1	1	✔	
sum2([]) // → 0	0	✔	
sum2([4, 5, 6]) // → 9	9	✔	
sum2([4]) // → 4	4	✔


/* MIDDLEWAY
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.
*/

function middleWay(a,b){
  return [a[1], b[1]];
}
middleWay([1, 2, 3], [4, 5, 6]) // → 2,5	2,5	✔	
middleWay([7, 7, 7], [3, 8, 0]) // → 7,8	7,8	✔	
middleWay([5, 2, 9], [1, 4, 5]) // → 2,4	2,4	✔	
middleWay([1, 9, 7], [4, 8, 8]) // → 9,8	9,8	✔	
middleWay([1, 2, 3], [3, 1, 4]) // → 2,1	2,1	✔	
middleWay([1, 2, 3], [4, 1, 1]) // → 2,1	2,1	✔


/* MAKEENDS
Given an array of ints, return a new array length 2 containing the first and last elements from the
original array. The original array will be length 1 or more.
*/

function makeEnds(nums){
  return [nums[0], nums[nums.length - 1]];
}
makeEnds([1, 2, 3]) // → 1,3	1,3	✔	
makeEnds([1, 2, 3, 4]) // → 1,4	1,4	✔	
makeEnds([7, 4, 6, 2]) // → 7,2	7,2	✔	
makeEnds([1, 2, 2, 2, 2, 2, 2, 3]) // → 1,3	1,3	✔	
makeEnds([7, 4]) // → 7,4	7,4	✔	
makeEnds([7]) // → 7,7	7,7	✔	
makeEnds([5, 2, 9]) // → 5,9	5,9	✔	
makeEnds([2, 3, 4, 1]) // → 2,1	2,1	✔


/* HAS23
Given an int array length 2, return true if it contains a 2 or a 3.
*/

function has23(nums){
  return nums.reduce((acc, curr) => acc || (curr === 2 || curr === 3), false);
}
has23([2, 5]) // → true	true	✔	
has23([4, 3]) // → true	true	✔	
has23([4, 5]) // → false	false	✔	
has23([2, 2]) // → true	true	✔	
has23([3, 2]) // → true	true	✔	
has23([3, 3]) // → true	true	✔	
has23([7, 7]) // → false	false	✔	
has23([3, 9]) // → true	true	✔	
has23([9, 5]) // → false	false	✔


/* NO23
Given an int array length 2, return true if it does not contain a 2 or 3.
*/

function no23(nums){
  const x = nums[0];
  const y = nums[1];
  return x !== 2 && x !== 3 && y !== 2 && y !== 3; 
}
no23([4, 5]) // → true	true	✔	
no23([4, 2]) // → false	false	✔	
no23([3, 5]) // → false	false	✔	
no23([1, 9]) // → true	true	✔	
no23([2, 9]) // → false	false	✔	
no23([1, 3]) // → false	false	✔	
no23([1, 1]) // → true	true	✔	
no23([2, 2]) // → false	false	✔	
no23([3, 3]) // → false	false	✔	
no23([7, 8]) // → true	true	✔	
no23([8, 7]) // → true	true	✔


/* MAKELAST
Given an int array, return a new array with double the length where its last element is the same
as the original array, and all the other elements are 0. The original array will be length 1 or more.
*/

function makeLast(nums){
  const outputArr = [0];
  for (let i = 1; i <= nums.length * 2 - 2; i++) {
    outputArr.push(0);
  }
  outputArr.push(nums[nums.length - 1]);
  return outputArr;
}
makeLast([4, 5, 6]) // → 0,0,0,0,0,6	0,0,0,0,0,6	✔	
makeLast([1, 2]) // → 0,0,0,2	0,0,0,2	✔	
makeLast([3]) // → 0,3	0,3	✔	
makeLast([0]) // → 0,0	0,0	✔	
makeLast([7, 7, 7]) // → 0,0,0,0,0,7	0,0,0,0,0,7	✔	
makeLast([3, 1, 4]) // → 0,0,0,0,0,4	0,0,0,0,0,4	✔	
makeLast([1, 2, 3, 4]) // → 0,0,0,0,0,0,0,4	0,0,0,0,0,0,0,4	✔	
makeLast([1, 2, 3, 0]) // → 0,0,0,0,0,0,0,0	0,0,0,0,0,0,0,0	✔	
makeLast([2, 4]) // → 0,0,0,4	0,0,0,4	✔


/* DOUBLE23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.
*/

function double23(nums){
  if (nums.length === 2) {
    return nums.every(num => num === 2) || nums.every(num => num === 3);
  }
  return false;
}
double23([2, 2]) // → true	true	✔	
double23([3, 3]) // → true	true	✔	
double23([2, 3]) // → false	false	✔	
double23([3, 2]) // → false	false	✔	
double23([4, 5]) // → false	false	✔	
double23([2]) // → false	false	✔	
double23([3]) // → false	false	✔	
double23([]) // → false	false	✔	
double23([3, 4]) // → false	false	✔


/* FIX23
Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element
to 0. Return the changed array.
*/

function fix23(nums){
  return nums.map((num, i) => {
    if (num === 3 && nums[i - 1] === 2) {
      return 0;
    }
    return num;
  });
}
fix23([1, 2, 3]) // → 1,2,0	1,2,0	✔	
fix23([2, 3, 5]) // → 2,0,5	2,0,5	✔	
fix23([1, 2, 1]) // → 1,2,1	1,2,1	✔	
fix23([3, 2, 1]) // → 3,2,1	3,2,1	✔	
fix23([2, 2, 3]) // → 2,2,0	2,2,0	✔	
fix23([2, 3, 3]) // → 2,0,3	2,0,3	✔


/* START1
Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.
*/

function start1(a,b){
  if (a[0] === 1 && b[0] === 1) {
    return 2;
  }
  return a[0] !== 1 && b[0] !== 1 ? 0 : 1;
}
start1([1, 2, 3], [1, 3]) // → 2	2	✔	
start1([7, 2, 3], [1]) // → 1	1	✔	
start1([1, 2], []) // → 1	1	✔	
start1([], [1, 2]) // → 1	1	✔	
start1([7], []) // → 0	0	✔	
start1([7], [1]) // → 1	1	✔	
start1([1], [1]) // → 2	2	✔	
start1([7], [8]) // → 0	0	✔	
start1([], []) // → 0	0	✔	
start1([1, 3], [1]) // → 2	2	✔


/* BIGGERTWO
Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return
the array which has the largest sum. In event of a tie, return a.
*/

function biggerTwo(a,b){
  const balance = a[0] + a[1] - (b[0] + b[1]);
  return balance < 0 ? b : a;
}
biggerTwo([1, 2], [3, 4]) // → 3,4	3,4	✔	
biggerTwo([3, 4], [1, 2]) // → 3,4	3,4	✔	
biggerTwo([1, 1], [1, 2]) // → 1,2	1,2	✔	
biggerTwo([2, 1], [1, 1]) // → 2,1	2,1	✔	
biggerTwo([2, 2], [1, 3]) // → 2,2	2,2	✔	
biggerTwo([1, 3], [2, 2]) // → 1,3	1,3	✔	
biggerTwo([6, 7], [3, 1]) // → 6,7	6,7	✔


/* MAKEMIDDLE
Given an array of ints of even length, return a new array length 2 containing the middle two elements
from the original array. The original array will be length 2 or more.
*/

function makeMiddle(nums){
  return [nums[nums.length / 2 - 1], nums[nums.length / 2]];
}
makeMiddle([1, 2, 3, 4]) // → 2,3	2,3	✔	
makeMiddle([7, 1, 2, 3, 4, 9]) // → 2,3	2,3	✔	
makeMiddle([1, 2]) // → 1,2	1,2	✔	
makeMiddle([5, 2, 4, 7]) // → 2,4	2,4	✔	
makeMiddle([9, 0, 4, 3, 9, 1]) // → 4,3	4,3	✔


/* PLUSTWO
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.
*/

function plusTwo(a,b){
  return [...a, ...b];
}
plusTwo([1, 2], [3, 4]) // → 1,2,3,4	1,2,3,4	✔	
plusTwo([4, 4], [2, 2]) // → 4,4,2,2	4,4,2,2	✔	
plusTwo([9, 2], [3, 4]) // → 9,2,3,4	9,2,3,4	✔


/* SWAPENDS
Given an array of ints, swap the first and last elements in the array. Return the modified array.
The array length will be at least 1.
*/

function swapEnds(nums){
  if (nums.length > 1) {
    const [ toEnd, toStart ] = [ nums.shift(), nums.pop() ];
    nums.unshift(toStart);
    nums.push(toEnd);
  }
  return nums;
}
swapEnds([1, 2, 3, 4]) // → 4,2,3,1	4,2,3,1	✔	
swapEnds([1, 2, 3]) // → 3,2,1	3,2,1	✔	
swapEnds([8, 6, 7, 9, 5]) // → 5,6,7,9,8	5,6,7,9,8	✔	
swapEnds([3, 1, 4, 1, 5, 9]) // → 9,1,4,1,5,3	9,1,4,1,5,3	✔	
swapEnds([1, 2]) // → 2,1	2,1	✔	
swapEnds([1]) // → 1	1	✔


/* MIDTHREE
Given an array of ints of odd length, return a new array length 3 containing the elements from the
middle of the array. The array length will be at least 3.
*/

function midThree(nums){
  const a = Math.floor(nums.length / 2 - 1);
  return [ nums[a], nums[a + 1], nums[a + 2] ];
}
midThree([1, 2, 3, 4, 5]) // → 2,3,4	2,3,4	✔	
midThree([8, 6, 7, 5, 3, 0, 9]) // → 7,5,3	7,5,3	✔	
midThree([1, 2, 3]) // → 1,2,3	1,2,3	✔


/* MAXTRIPLE
Given an array of ints of odd length, look at the first, last, and middle values in the array and
return the largest. The array length will be a least 1.
*/

function maxTriple(nums){
  return Math.max(nums[0], nums[nums.length - 1], nums[Math.floor(nums.length / 2)]); 
}
maxTriple([1, 2, 3]) // → 3	3	✔	
maxTriple([1, 5, 3]) // → 5	5	✔	
maxTriple([5, 2, 3]) // → 5	5	✔	
maxTriple([1, 2, 3, 1, 1]) // → 3	3	✔	
maxTriple([1, 7, 3, 1, 5]) // → 5	5	✔	
maxTriple([5, 1, 3, 7, 1]) // → 5	5	✔	
maxTriple([5, 1, 7, 3, 7, 8, 1]) // → 5	5	✔	
maxTriple([5, 1, 7, 9, 7, 8, 1]) // → 9	9	✔	
maxTriple([5, 1, 7, 3, 7, 8, 9]) // → 9	9	✔	
maxTriple([2, 2, 5, 1, 1]) // → 5	5	✔


function unlucky1(nums){
  for (let i = 0; i < nums.length; i++) {
    const limit = {0: true, 1: true, [nums.length - 2]: true};
    if (limit[i]) {
      if (nums[i] === 1 && nums[i + 1] === 3) {
        return true;
      }
    }
  }
  return false;
}
unlucky1([1, 3, 4, 5]) // → true	true	✔	
unlucky1([2, 1, 3, 4, 5]) // → true	true	✔	
unlucky1([1, 1, 1]) // → false	false	✔	
unlucky1([1, 3, 1]) // → true	true	✔	
unlucky1([1, 1, 3]) // → true	true	✔	
unlucky1([1, 2, 3]) // → false	false	✔	
unlucky1([3, 3, 3]) // → false	false	✔	
unlucky1([1, 3]) // → true	true	✔	
unlucky1([1, 4]) // → false	false	✔	
unlucky1([1]) // → false	false	✔	
unlucky1([]) // → false	false	✔	
unlucky1([1, 1, 1, 3, 1]) // → false	false	✔	
unlucky1([1, 1, 3, 1, 1]) // → true	true	✔	
unlucky1([1, 1, 1, 1, 3]) // → true	true	✔	
unlucky1([1, 4, 1, 5]) // → false	false	✔	
unlucky1([1, 1, 2, 3]) // → false	false	✔	
unlucky1([2, 3, 2, 1]) // → false	false	✔	
unlucky1([2, 3, 1, 3]) // → true	true	✔	
unlucky1([1, 2, 3, 4, 1, 3]) // → true	true	✔


/* MAKE2
Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements
from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2
or more elements available between the 2 arrays.
*/

function make2(a,b){
  return a.concat(b).slice(0, 2);
}
make2([4, 5], [1, 2, 3]) // → 4,5	4,5	✔	
make2([4], [1, 2, 3]) // → 4,1	4,1	✔	
make2([], [1, 2]) // → 1,2	1,2	✔	
make2([1, 2], []) // → 1,2	1,2	✔	
make2([3], [1, 2, 3]) // → 3,1	3,1	✔	
make2([3], [1]) // → 3,1	3,1	✔	
make2([3, 1, 4], []) // → 3,1	3,1	✔	
make2([1], [1]) // → 1,1	1,1	✔	
make2([1, 2, 3], [7, 8]) // → 1,2	1,2	✔	
make2([7, 8], [1, 2, 3]) // → 7,8	7,8	✔	
make2([7], [1, 2, 3]) // → 7,1	7,1	✔	
make2([5, 4], [2, 3, 7]) // → 5,4	5,4	✔


/* FRONT11
Given 2 int arrays, a and b, of any length, return a new array with the first element of each array.
If either array is length 0, ignore that array.
*/

function front11(a,b){
  return [a, b].filter(x => x.length).map(x => x[0]);
}
front11([1, 2, 3], [7, 9, 8]) // → 1,7	1,7	✔	
front11([1], [2]) // → 1,2	1,2	✔	
front11([1, 7], []) // → 1	1	✔	
front11([], [2, 8]) // → 2	2	✔	
front11([], []) // →		✔	
front11([3], [1, 4, 1, 9]) // → 3,1	3,1	✔	
front11([1, 4, 1, 9], []) // → 1	1	✔
