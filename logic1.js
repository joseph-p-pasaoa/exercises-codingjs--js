// Joseph P. Pasaoa
// Javascript exercises found at https://the-winter.github.io/codingjs/
//



// LOGIC-1 //

function maxMod5(a, b) {
  if (a === b) {
    return 0;
  } else if (a % 5 === b % 5) {
    return (a < b ? a : b);
  }
  return (a > b ? a : b);
}
console.log(
  'maxMod5: ',
  maxMod5(2, 3), // → 3
  maxMod5(6, 2), // → 6
  maxMod5(3, 2), // → 3
  maxMod5(2, 3), // → 3
  maxMod5(6, 2), // → 6
  maxMod5(3, 2), // → 3
  maxMod5(8, 12), // → 12
  maxMod5(7, 12), // → 7
  maxMod5(11, 6), // → 6
  maxMod5(2, 7), // → 2
  maxMod5(7, 7), // → 0
  maxMod5(9, 1), // → 9
  maxMod5(9, 14), // → 9
  maxMod5(1, 2) // → 2
)