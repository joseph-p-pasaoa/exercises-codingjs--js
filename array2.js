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


