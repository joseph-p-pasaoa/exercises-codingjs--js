// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// STRING-3
//



/* COUNTYZ
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in
"fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of
a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char)
tests if a char is an alphabetic letter.)
*/

function countYZ(str){
  let targetedWords = 0;

  for (let i = 1; i < str.length; i++) {
    const [prev, curr] = [
      str[i - 1].toLowerCase(),
      str[i].toLowerCase()
    ];
    const isCurrNotLetter = curr.toLowerCase() === curr.toUpperCase();
    const isPrevTarget = prev === 'y' || prev === 'z';
    if (isCurrNotLetter && isPrevTarget) {
      targetedWords++;
    }
  }
  const last = str[str.length - 1].toLowerCase();
  if (last === 'y' || last === 'z') {
    targetedWords++;
  }

  return targetedWords;
}
countYZ('fez day') // → 2	2	✔	
countYZ('day fez') // → 2	2	✔	
countYZ('day fyyyz') // → 2	2	✔	
countYZ('day yak') // → 1	1	✔	
countYZ('day:yak') // → 1	1	✔	
countYZ('!!day--yaz!!') // → 2	2	✔	
countYZ('yak zak') // → 0	0	✔	
countYZ('DAY abc XYZ') // → 2	2	✔	
countYZ('aaz yyz my') // → 3	3	✔	
countYZ('y2bz') // → 2	2	✔	
countYZ('zxyx') // → 0	0	✔


