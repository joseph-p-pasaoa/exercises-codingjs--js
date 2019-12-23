// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// STRING-2 //

function doubleChar(str){
  if (str.length <= 1) {
    return str[0] + str[0] || '';
  }
  return str[0] + str[0] + doubleChar(str.slice(1));
}
doubleChar('The') // → TThhee	TThhee	✔	
doubleChar('AAbb') // → AAAAbbbb	AAAAbbbb	✔	
doubleChar('Hi-There') // → HHii--TThheerree	HHii--TThheerree	✔	
doubleChar('Word!') // → WWoorrdd!!	WWoorrdd!!	✔	
doubleChar('!!') // → !!!!	!!!!	✔	
doubleChar('') →		✔	
doubleChar('a') // → aa	aa	✔	
doubleChar('.') // → ..	..	✔	
doubleChar('aa') // → aaaa	aaaa	✔


function countHi(str){
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.slice(i, i + 2) === 'hi') {
      count += 1;
    }
  }
  return count;
}
countHi('abc hi ho') // → 1	1	✔	
countHi('ABChi hi') // → 2	2	✔	
countHi('hihi') // → 2	2	✔	
countHi('hiHIhi') // → 2	2	✔	
countHi('') // → 0	0	✔	
countHi('h') // → 0	0	✔	
countHi('hi') // → 1	1	✔	
countHi('Hi is no HI on ahI') // → 0	0	✔	
countHi('hiho not HOHIhi') // → 2	2	✔
