function sleepIn(weekday,vacation){
  return !weekday || vacation;
}
sleepIn(true, true); // → true	true	✔	
sleepIn(true, false); // → false	false	✔	
sleepIn(false, true); // → true	true	✔	
sleepIn(false, false); // → true	true	✔


function monkeyTrouble(aSmile,bSmile){
  return aSmile && bSmile || !aSmile && !bSmile;
}
monkeyTrouble(true, true); // → true	true	✔	
monkeyTrouble(false, false); // → true	true	✔	
monkeyTrouble(true, false); // → false	false	✔	
monkeyTrouble(false, true); // → false	false	✔


function sumDouble(a,b){
  return (a === b ? a * 4 : a + b);
}

sumDouble(1, 2); // → 3	3	✔	
sumDouble(3, 2); // → 5	5	✔	
sumDouble(2, 2); // → 8	8	✔	
sumDouble(-1, 0); // → -1	-1	✔	
sumDouble(3, 3); // → 12	12	✔	
sumDouble(0, 0); // → 0	0	✔	
sumDouble(0, 1); // → 1	1	✔	
sumDouble(3, 4); // → 7	7	✔