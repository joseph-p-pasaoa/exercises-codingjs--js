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


function last2(str){
  const last2 = str.slice(-2);
  let counter = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 2) === last2) {
      counter += 1;
    }
  }
  return counter;
}
last2('hixxhi') // → 1	1	✔	
last2('xaxxaxaxx') // → 1	1	✔	
last2('axxaaxx') // → 1	1	✔	
last2('xxaxxaxxaxx') // → 3	3	✔	
last2('xaxaxaa') // → 0	0	✔	
last2('xxxx') // → 2	2	✔	
last2('13121312') // → 1	1	✔	
last2('11212') // → 1	1	✔	
last2('13121311') // → 0	0	✔	
last2('hi') // → 0	0	✔	
last2('h') // → 0	0	✔	
last2('') // → 0	0	✔


function arrayCount9(nums){
  let counter = 0;
  for (let num of nums) {
    if (num === 9) {
      counter += 1;
    }
  }
  return counter;
}
arrayCount9([1,2,9]) // → 1	1	✔	
arrayCount9([1,9,9]) // → 2	2	✔	
arrayCount9([1,9,9,3,9]) // → 3	3	✔	
arrayCount9([1,2,3]) // → 0	0	✔	
arrayCount9([]) // → 0	0	✔	
arrayCount9([4,2,4,3,1]) // → 0	0	✔	
arrayCount9([9,2,4,3,1]) // → 1	1	✔


function arrayFront9(nums){
  for (let i = 0; i < 4; i++) {
    if (nums[i]) {
      if (nums[i] === 9) {
        return true;
      }
    }
  }
  return false;
}
arrayFront9([1,2,9,3,4]) // → true	true	✔	
arrayFront9([1,2,3,4,9]) // → false	false	✔	
arrayFront9([1,2,3,4,5]) // → false	false	✔	
arrayFront9([9,2,3]) // → true	true	✔	
arrayFront9([1,9,9]) // → true	true	✔	
arrayFront9([1,2,3]) // → false	false	✔	
arrayFront9([1,9]) // → true	true	✔	
arrayFront9([5,5]) // → false	false	✔	
arrayFront9([2]) // → false	false	✔	
arrayFront9([9]) // → true	true	✔	
arrayFront9([]) // → false	false	✔	
arrayFront9([3,9,2,3,3]) // → true	true	✔


function array123(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 1) {
      if (nums[i + 1] === 2) {
        if (nums[i + 2] === 3) {
          return true;
        }
      }
    }
  }
  return false;
}
array123([-1, -1, 0, 1, 2, 3, 4, 5, 0, 1, 2]); // → true	true	✔	
array123([-1, -2, -3, 1, 2, 0, 0, 1, 2, 3, 0, -1]); // → true	true	✔	
array123([0, 0, -1, 1, 2, 0, 3, 1, 2, 0, 1, -1, -2]); // → false	false	✔	


function stringMatch(a,b){
  let counter = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (!b[i + 1]) {
      return counter;
    }
    if (a[i] === b[i] && a[i + 1] === b[i + 1]) {
      counter += 1;
    }
  }
  return counter;
}
stringMatch('xxcaazz', 'xxbaaz') // → 3	3	✔	
stringMatch('abc', 'abc') // → 2	2	✔	
stringMatch('abc', 'axc') // → 0	0	✔	
stringMatch('hello', 'he') // → 1	1	✔	
stringMatch('he', 'hello') // → 1	1	✔	
stringMatch('', 'hello') // → 0	0	✔	
stringMatch('aabbccdd', 'abbbxxd') // → 1	1	✔	
stringMatch('aaxxaaxx', 'iaxxai') // → 3	3	✔	
stringMatch('iaxxai', 'aaxxaaxx') // → 3	3	✔


function stringX(str){
  const arrayed = str.split('');
  return arrayed.filter((char, i) => {
      return (i === 0 || i === str.length - 1 || char !== 'x');
  }).join('');
}
stringX('xxHxix') // → xHix	xHix	✔	
stringX('abxxxcd') // → abcd	abcd	✔	
stringX('xabxxxcdx') // → xabcdx	xabcdx	✔	
stringX('xKittenx') // → xKittenx	xKittenx	✔	
stringX('Hello') // → Hello	Hello	✔	
stringX('xx') // → xx	xx	✔	
stringX('') // →		✔


function altPairs(str){
  let outputStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      outputStr += str[i];
    }
  }
  return outputStr;
}
altPairs('kitten') // → kien	kien	✔	
altPairs('Chocolate') // → Chole	Chole	✔	
altPairs('CodingHorror') // → Congrr	Congrr	✔	
altPairs('yak') // → ya	ya	✔	
altPairs('ya') // → ya	ya	✔	
altPairs('y') // → y	y	✔	
altPairs('') // →		✔	
altPairs('ThisThatTheOther') // → ThThThth	ThThThth	✔


function array667(nums){
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6) {
      if (nums[i + 1] === 6 || nums[i + 1] === 7) {
        counter += 1;
      }
    }
  }
  return counter;
}
array667([6,6,2]) // → 1	1	✔	
array667([6,6,2,6]) // → 1	1	✔	
array667([6,7,2,6]) // → 1	1	✔	
array667([6,6,2,7,6,7]) // → 2	2	✔	
array667([1,6,3]) // → 0	0	✔	
array667([6,1]) // → 0	0	✔	
array667([]) // → 0	0	✔	
array667([3,6,7,6]) // → 1	1	✔	
array667([3,6,6,7]) // → 2	2	✔	
array667([6,3,6,6]) // → 1	1	✔	
array667([6,7,6,6]) // → 2	2	✔	
array667([1,2,3,5,6]) // → 0	0	✔	
array667([1,2,3,6,6]) // → 1	1	✔


function noTriples(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      return false;
    }
  }
  return true;
}
noTriples([1,1,2,2,1]) // → true	true	✔	
noTriples([1,1,2,2,2,1]) // → false	false	✔	
noTriples([1,1,2,2,2,1]) // → false	false	✔	
noTriples([1,2,1]) // → true	true	✔	
noTriples([1,1,1]) // → false	false	✔	
noTriples([1,1]) // → true	true	✔	
noTriples([1]) // → true	true	✔	
noTriples([1]) // → true	true	✔	
noTriples([]) // → true	true	✔


function has271(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i + 1] - nums[i] === 5) {
      if (Math.abs(nums[i] - 1 - nums[i + 2]) <= 2) {
        return true;
      }
    }
  }
  return false;
}
has271([1,2,7,1]) // → true	true	✔	
has271([1,2,8,1]) // → false	false	✔	
has271([2,7,1]) // → true	true	✔	
has271([3,8,2]) // → true	true	✔	
has271([2,7,3]) // → true	true	✔	
has271([2,7,4]) // → false	false	✔	
has271([2,7,-1]) // → true	true	✔	
has271([2,7,-2]) // → false	false	✔	
has271([4,5,3,8,0]) // → true	true	✔	
has271([2,7,5,10,4]) // → true	true	✔	
has271([2,7,-2,4,9,3]) // → true	true	✔	
has271([2,7,5,10,1]) // → false	false	✔	
has271([2,7,-2,10,2]) // → false	false	✔
