// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// Array-1 //

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


function makePi(){
  return [3, 1, 4];
}
makePi() // → 3,1,4	3,1,4	✔


function commonEnd(a,b){
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}
commonEnd([1, 2, 3], [7, 3]) // → true	true	✔	
commonEnd([1, 2, 3], [7, 3, 2]) // → false	false	✔	
commonEnd([1, 2, 3], [1, 3]) // → true	true	✔	
commonEnd([1, 2, 3], [1]) // → true	true	✔	
commonEnd([1, 2, 3], [2]) // → false	false	✔


function sum3(nums){
  return nums[0] + nums[1] + nums[2];
}
sum3([1, 2, 3]) // → 6	6	✔	
sum3([5, 11, 2]) // → 18	18	✔	
sum3([7, 0, 0]) // → 7	7	✔	
sum3([1, 2, 1]) // → 4	4	✔	
sum3([1, 1, 1]) // → 3	3	✔	
sum3([2, 7, 2]) // → 11	11	✔


function rotateLeft3(nums){
  return [nums[1], nums[2], nums[0]];
}
rotateLeft3([1, 2, 3]) // → 2,3,1	2,3,1	✔	
rotateLeft3([5, 11, 9]) // → 11,9,5	11,9,5	✔	
rotateLeft3([7, 0, 0]) // → 0,0,7	0,0,7	✔	
rotateLeft3([1, 2, 1]) // → 2,1,1	2,1,1	✔	
rotateLeft3([0, 0, 1]) // → 0,1,0	0,1,0	✔


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


function middleWay(a,b){
  return [a[1], b[1]];
}
middleWay([1, 2, 3], [4, 5, 6]) // → 2,5	2,5	✔	
middleWay([7, 7, 7], [3, 8, 0]) // → 7,8	7,8	✔	
middleWay([5, 2, 9], [1, 4, 5]) // → 2,4	2,4	✔	
middleWay([1, 9, 7], [4, 8, 8]) // → 9,8	9,8	✔	
middleWay([1, 2, 3], [3, 1, 4]) // → 2,1	2,1	✔	
middleWay([1, 2, 3], [4, 1, 1]) // → 2,1	2,1	✔


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


