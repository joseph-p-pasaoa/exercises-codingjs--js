// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// LOGIC-1 //

function cigarParty(cigars, isWeekend){
  return !(cigars < 40 || (!isWeekend && cigars > 60))
}
      cigarParty(30, false); // → false	false	✔	
      cigarParty(50, false); // → true	true	✔	
      cigarParty(70, true); // → true	true	✔	
      cigarParty(30, true); // → false	false	✔	
      cigarParty(50, true); // → true	true	✔	
      cigarParty(60, false); // → true	true	✔	
      cigarParty(61, false); // → false	false	✔	
      cigarParty(40, false); // → true	true	✔	
      cigarParty(39, false); // → false	false	✔	
      cigarParty(40, true); // → true	true	✔	
      cigarParty(39, true); // → false	false	✔


function dateFashion(you, date){
  if (you <= 2 || date <= 2) {
    return 0;
  }
  if (you >= 8 || date >= 8) {
    return 2;
  }
  return 1;
}
      dateFashion(5, 10); // → 2	2	✔	
      dateFashion(5, 2); // → 0	0	✔	
      dateFashion(5, 5); // → 1	1	✔	
      dateFashion(3, 3); // → 1	1	✔	
      dateFashion(10, 2); // → 0	0	✔	
      dateFashion(2, 9); // → 0	0	✔	
      dateFashion(9, 9); // → 2	2	✔	
      dateFashion(10, 5); // → 2	2	✔	
      dateFashion(2, 2); // → 0	0	✔	
      dateFashion(3, 7); // → 1	1	✔	
      dateFashion(2, 7); // → 0	0	✔	
      dateFashion(6, 2); // → 0	0	✔


function squirrelPlay(temp, isSummer){
  return !(temp < 60 || (isSummer ? temp > 100 : temp > 90));
}
      squirrelPlay(70, false); // → true	true	✔	
      squirrelPlay(95, false); // → false	false	✔	
      squirrelPlay(95, true); // → true	true	✔	
      squirrelPlay(90, false); // → true	true	✔	
      squirrelPlay(90, true); // → true	true	✔	
      squirrelPlay(50, false); // → false	false	✔	
      squirrelPlay(50, true); // → false	false	✔	
      squirrelPlay(100, false); // → false	false	✔	
      squirrelPlay(100, true); // → true	true	✔	
      squirrelPlay(105, true); // → false	false	✔	
      squirrelPlay(59, false); // → false	false	✔	
      squirrelPlay(59, true); // → false	false	✔	
      squirrelPlay(60, false); // → true	true	✔


function caughtSpeeding(speed, isBirthday){
  let speedOfRecord = speed;
  if (isBirthday) {
    speedOfRecord -= 5;
  }
  if (speedOfRecord <= 60) {
    return 0;
  }
  if (speedOfRecord <= 80) {
    return 1;
  }
  return 2;
}
      caughtSpeeding(60, false); // → 0	0	✔	
      caughtSpeeding(65, false); // → 1	1	✔	
      caughtSpeeding(65, true); // → 0	0	✔	
      caughtSpeeding(80, false); // → 1	1	✔	
      caughtSpeeding(85, false); // → 2	2	✔	
      caughtSpeeding(85, true); // → 1	1	✔	
      caughtSpeeding(70, false); // → 1	1	✔	
      caughtSpeeding(75, false); // → 1	1	✔	
      caughtSpeeding(75, true); // → 1	1	✔	
      caughtSpeeding(40, false); // → 0	0	✔	
      caughtSpeeding(40, true); // → 0	0	✔	
      caughtSpeeding(90, false); // → 2	2	✔


function sortaSum(a, b){
  if (a + b >= 10 && a + b <= 19) {
    return 20;
  }
  return a + b;
}
      sortaSum(3, 4); // → 7	7	✔	
      sortaSum(9, 4); // → 20	20	✔	
      sortaSum(10, 11); // → 21	21	✔	
      sortaSum(12, -3); // → 9	9	✔	
      sortaSum(-3, 12); // → 9	9	✔	
      sortaSum(4, 5); // → 9	9	✔	
      sortaSum(4, 6); // → 20	20	✔	
      sortaSum(14, 7); // → 21	21	✔	
      sortaSum(14, 6); // → 20	20	✔


function alarmClock(day, vacation){
  if (!vacation && (day >=1 && day <= 5)) {
    return "7:00";
  }
  if (vacation && (day === 0 || day === 6)) {
    return "off";
  }
  return "10:00";
}
      alarmClock(1, false); // → 7:00	7:00	✔	
      alarmClock(5, false); // → 7:00	7:00	✔	
      alarmClock(0, false); // → 10:00	10:00	✔	
      alarmClock(6, false); // → 10:00	10:00	✔	
      alarmClock(0, true); // → off	off	✔	
      alarmClock(6, true); // → off	off	✔	
      alarmClock(1, true); // → 10:00	10:00	✔	
      alarmClock(3, true); // → 10:00	10:00	✔	
      alarmClock(5, true); // → 10:00	10:00	✔


function love6(a, b){
  return (a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6);
}
      love6(6, 4); // → true	true	✔	
      love6(4, 5); // → false	false	✔	
      love6(1, 5); // → true	true	✔	
      love6(1, 6); // → true	true	✔	
      love6(1, 8); // → false	false	✔	
      love6(1, 7); // → true	true	✔	
      love6(7, 5); // → false	false	✔	
      love6(8, 2); // → true	true	✔	
      love6(6, 6); // → true	true	✔	
      love6(-6, 2); // → false	false	✔	
      love6(-4, -10); // → true	true	✔	
      love6(-7, 1); // → false	false	✔	
      love6(7, -1); // → true	true	✔	
      love6(-6, 12); // → true	true	✔	
      love6(-2, -4); // → false	false	✔	
      love6(7, 1); // → true	true	✔	
      love6(0, 9); // → false	false	✔	
      love6(8, 3); // → false	false	✔	
      love6(3, 3); // → true	true	✔	
      love6(3, 4); // → false	false	✔


function in1To10(n, outsideMode){
  if (outsideMode) {
    return n <= 1 || n >= 10;
  }
  return n >= 1 && n <= 10;
}
      in1To10(5, false); // → true	true	✔	
      in1To10(11, false); // → false	false	✔	
      in1To10(11, true); // → true	true	✔	
      in1To10(10, false); // → true	true	✔	
      in1To10(10, true); // → true	true	✔	
      in1To10(9, false); // → true	true	✔	
      in1To10(9, true); // → false	false	✔	
      in1To10(1, false); // → true	true	✔	
      in1To10(1, true); // → true	true	✔	
      in1To10(0, false); // → false	false	✔	
      in1To10(0, true); // → true	true	✔	
      in1To10(-1, false); // → false	false	✔


function specialEleven(n){
  return (n % 11 === 0 || n % 11 === 1);
}
      specialEleven(22); // → true	true	✔	
      specialEleven(23); // → true	true	✔	
      specialEleven(24); // → false	false	✔	
      specialEleven(21); // → false	false	✔	
      specialEleven(11); // → true	true	✔	
      specialEleven(12); // → true	true	✔	
      specialEleven(10); // → false	false	✔	
      specialEleven(9); // → false	false	✔	
      specialEleven(8); // → false	false	✔	
      specialEleven(0); // → true	true	✔	
      specialEleven(1); // → true	true	✔	
      specialEleven(2); // → false	false	✔	
      specialEleven(121); // → true	true	✔	
      specialEleven(122); // → true	true	✔	
      specialEleven(123); // → false	false	✔	
      specialEleven(46); // → false	false	✔	
      specialEleven(49); // → false	false	✔	
      specialEleven(52); // → false	false	✔	
      specialEleven(54); // → false	false	✔	
      specialEleven(55); // → true	true	✔


function more20(n){
  return (n % 20 === 1 || n % 20 === 2);
}
      more20(20); // → false	false	✔	
      more20(21); // → true	true	✔	
      more20(22); // → true	true	✔	
      more20(23); // → false	false	✔	
      more20(25); // → false	false	✔	
      more20(30); // → false	false	✔	
      more20(31); // → false	false	✔	
      more20(59); // → false	false	✔	
      more20(60); // → false	false	✔	
      more20(61); // → true	true	✔	
      more20(62); // → true	true	✔	
      more20(1020); // → false	false	✔	
      more20(1021); // → true	true	✔	
      more20(1000); // → false	false	✔	
      more20(1001); // → true	true	✔	
      more20(50); // → false	false	✔	
      more20(55); // → false	false	✔	
      more20(40); // → false	false	✔	
      more20(41); // → true	true	✔	
      more20(39); // → false	false	✔	
      more20(42); // → true	true	✔


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
