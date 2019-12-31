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


