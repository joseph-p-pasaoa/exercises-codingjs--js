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


