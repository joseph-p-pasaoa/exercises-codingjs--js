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


function frontTimes(str,n){
  let output = "";
  for (let i = n; i > 0; i--) {
    output += str.slice(0, 3);
  }
  return output;
}
frontTimes('Chocolate', 2) // → ChoCho	ChoCho	✔	
frontTimes('Chocolate', 3) // → ChoChoCho	ChoChoCho	✔	
frontTimes('Abc', 3) // → AbcAbcAbc	AbcAbcAbc	✔	
frontTimes('Ab', 4) // → AbAbAbAb	AbAbAbAb	✔	
frontTimes('A', 4) // → AAAA	AAAA	✔	
frontTimes('',4) // →		✔	
frontTimes('Abc', 0) // →		✔


function countXX(str){
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === "xx") {
      counter += 1;
    }
  }
  return counter;
}
countXX('abcxx') // → 1	1	✔	
countXX('xxx') // → 2	2	✔	
countXX('xxxx') // → 3	3	✔	
countXX('abc') // → 0	0	✔	
countXX('Hello There') // → 0	0	✔	
countXX('Hexxo Thxxe') // → 2	2	✔	
countXX('') // → 0	0	✔	
countXX('Kittens') // → 0	0	✔	
countXX('Kittensxxx') // → 2	2	✔


function doubleX(str){
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      return str[i + 1] === "x";
    }
  }
  return false;
}
doubleX('axxbb') // → true	true	✔	
doubleX('axaxax') // → false	false	✔	
doubleX('xxxxx') // → true	true	✔	
doubleX('xaxxx') // → false	false	✔	
doubleX('aaaax') // → false	false	✔	
doubleX('') // → false	false	✔	
doubleX('abc') // → false	false	✔	
doubleX('x') // → false	false	✔	
doubleX('xx') // → true	true	✔	
doubleX('xaxx') // → false	false	✔


function stringBits(str){
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!(i % 2)) {
      outputStr += str[i];
    }
  }
  return outputStr;
}
stringBits('Hello') // → Hlo	Hlo	✔	
stringBits('Hi') // → H	H	✔	
stringBits('Heeololeo') // → Hello	Hello	✔	
stringBits('HiHiHi') // → HHH	HHH	✔	
stringBits('') →		✔	
stringBits('Greetings') // → Getns	Getns	✔	
stringBits('Chocolate') // → Cooae	Cooae	✔	
stringBits('pi') // → p	p	✔	
stringBits('Hello Kitten') // → HloKte	HloKte	✔	
stringBits('hxaxpxpxy') // → happy	happy	✔


function stringSplosion(str){
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      outputStr += str[j];
    }
  }
  return outputStr;
}
stringSplosion("Code") // → CCoCodCode	✔	


