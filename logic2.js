// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// LOGIC-2 //

function makeBricks(small,big,goal){
  if (Math.floor(goal / 5) <= big) {
    return small >= goal % 5;
  }
  return small >= goal - (big * 5);
}
makeBricks(3, 1, 8) // → true	true	✔	
makeBricks(3, 1, 9) // → false	false	✔	
makeBricks(3, 2, 10) // → true	true	✔	
makeBricks(3, 2, 8) // → true	true	✔	
makeBricks(3, 2, 9) // → false	false	✔	
makeBricks(6, 1, 11) // → true	true	✔	
makeBricks(6, 0, 11) // → false	false	✔	
makeBricks(1, 4, 11) // → true	true	✔	
makeBricks(0, 3, 10) // → true	true	✔	
makeBricks(1, 4, 12) // → false	false	✔	
makeBricks(3, 1, 7) // → true	true	✔	
makeBricks(1, 1, 7) // → false	false	✔	
makeBricks(2, 1, 7) // → true	true	✔	
makeBricks(7, 1, 11) // → true	true	✔	
makeBricks(7, 1, 8) // → true	true	✔	
makeBricks(7, 1, 13) // → false	false	✔	
makeBricks(43, 1, 46) // → true	true	✔	
makeBricks(40, 1, 46) // → false	false	✔	
makeBricks(40, 2, 47) // → true	true	✔	
makeBricks(40, 2, 50) // → true	true	✔	
makeBricks(40, 2, 52) // → false	false	✔	
makeBricks(22, 2, 33) // → false	false	✔	
makeBricks(0, 2, 10) // → true	true	✔	
makeBricks(1000000, 1000, 1000100) // → true	true	✔	
makeBricks(2, 1000000, 100003) // → false	false	✔	
makeBricks(20, 0, 19) // → true	true	✔	
makeBricks(20, 0, 21) // → false	false	✔	
makeBricks(20, 4, 51) // → false	false	✔	
makeBricks(20, 4, 39) // → true	true	✔


function loneSum(a,b,c){
  let sum = 0;
  if (a !== b && a !== c) {
    sum += a;
  }
  if (b !== a && b !== c) {
    sum += b;
  }
  if (c !== a && c !== b) {
    sum += c;
  }
  return sum;
}
loneSum(1, 2, 3) // → 6	6	✔	
loneSum(3, 2, 3) // → 2	2	✔	
loneSum(3, 3, 3) // → 0	0	✔	
loneSum(9, 2, 2) // → 9	9	✔	
loneSum(2, 2, 9) // → 9	9	✔	
loneSum(2, 9, 2) // → 9	9	✔	
loneSum(2, 9, 3) // → 14	14	✔	
loneSum(4, 2, 3) // → 9	9	✔	
loneSum(1, 3, 1) // → 3	3	✔


function luckySum(a,b,c){
  let sum = 0;
  const arr = [a, b, c];
  for (let num of arr) {
    if (num === 13) {
      return sum;
    }
    sum += num;
  }
  return sum;
}
luckySum(1, 2, 3) // → 6	6	✔	
luckySum(1, 2, 13) // → 3	3	✔	
luckySum(1, 13, 3) // → 1	1	✔	
luckySum(1, 13, 13) // → 1	1	✔	
luckySum(6, 5, 2) // → 13	13	✔	
luckySum(13, 2, 3) // → 0	0	✔	
luckySum(13, 2, 13) // → 0	0	✔	
luckySum(13, 13, 2) // → 0	0	✔	
luckySum(9, 4, 13) // → 13	13	✔	
luckySum(8, 13, 2) // → 8	8	✔	
luckySum(7, 2, 1) // → 10	10	✔	
luckySum(3, 3, 13) // → 6	6	✔


function noTeenSum(a,b,c){
  function zeroFilter(num) {
    if (num === 13 || num === 14) {
      return 0;
    }
    if (num >= 17 && num <= 19) {
      return 0;
    }
    return num;
  }
  return zeroFilter(a) + zeroFilter(b) + zeroFilter(c);
}
noTeenSum(1, 2, 3) // → 6	6	✔	
noTeenSum(2, 13, 1) // → 3	3	✔	
noTeenSum(2, 1, 14) // → 3	3	✔	
noTeenSum(2, 1, 15) // → 18	18	✔	
noTeenSum(2, 1, 16) // → 19	19	✔	
noTeenSum(2, 1, 17) // → 3	3	✔	
noTeenSum(17, 1, 2) // → 3	3	✔	
noTeenSum(2, 15, 2) // → 19	19	✔	
noTeenSum(16, 17, 18) // → 16	16	✔	
noTeenSum(17, 18, 19) // → 0	0	✔	
noTeenSum(15, 16, 1) // → 32	32	✔	
noTeenSum(15, 15, 19) // → 30	30	✔	
noTeenSum(15, 19, 16) // → 31	31	✔	
noTeenSum(5, 17, 18) // → 5	5	✔	
noTeenSum(17, 18, 16) // → 16	16	✔	
noTeenSum(17, 19, 18) // → 0	0	✔


