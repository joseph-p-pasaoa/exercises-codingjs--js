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


