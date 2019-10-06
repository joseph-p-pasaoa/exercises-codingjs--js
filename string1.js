// Joseph P. Pasaoa
// Javascript exercises found at https://the-winter.github.io/codingjs/
//



// STRING-1 //

function makeOutWord(out, word){
  let workArr = out.split('');
  workArr.splice(2, 0, word);
  return workArr.join('');
}
makeOutWord('<<>>', 'Yay'); // → <>	<>	✔	
makeOutWord('<<>>', 'WooHoo'); // → <>	<>	✔	
makeOutWord('[[]]', 'word'); // → [[word]]	[[word]]	✔	
makeOutWord('HHoo', 'Hello'); // → HHHellooo	HHHellooo	✔	
makeOutWord('abyz', 'YAY'); // → abYAYyz