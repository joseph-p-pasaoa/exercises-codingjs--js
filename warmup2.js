// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// Warmup-2 //

function stringTimes(str,n){
  let outputStr = "";
  for (let i = n; i > 0; i--){
    outputStr += str;
  }
  return outputStr;
}
stringTimes('Hi', 2) // → HiHi	HiHi	✔	
stringTimes('Hi', 3) // → HiHiHi	HiHiHi	✔	
stringTimes('Hi', 1) // → Hi	Hi	✔	
stringTimes('Hi', 0) →		✔	
stringTimes('Hi', 5) // → HiHiHiHiHi	HiHiHiHiHi	✔	
stringTimes('Oh Boy!', 2) // → Oh Boy!Oh Boy!	Oh Boy!Oh Boy!	✔	
stringTimes('x', 4) // → xxxx	xxxx	✔	
stringTimes('', 4) →		✔	
stringTimes('code', 2) // → codecode	codecode	✔	
stringTimes('code', 3) // → codecodecode	codecodecode	✔


