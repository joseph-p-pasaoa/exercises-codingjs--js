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


