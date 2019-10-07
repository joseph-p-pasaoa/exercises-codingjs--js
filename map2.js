// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//

/* HELPERS */
const log = console.log;



// MAP-2 //

function word0(keyArray){
  let outputObj = {};
  keyArray.map(word => {
    outputObj[word] = 0;
    return;
  });
  return outputObj;
}
    log(word0(["a", "b", "a", "b"])); // → {'a': 0, 'b': 0}
    log(word0(["a", "b", "a", "c", "b"])); // → {'a': 0, 'b': 0, 'c': 0}
    log(word0(["c", "b", "a"])); // → {'c': 0, 'b': 0, 'a': 0}
    log(word0(["c", "c", "c", "c"])); // → {'c': 0}
    log(word0([])); // → {}


function wordAppend(wordArray){
  let dupesObj = {};
  let outputArr = wordArray.map(word => {
      if (!dupesObj[word]) {
        dupesObj[word] = 1;
      } else {
        dupesObj[word] += 1;
        if (dupesObj[word] % 2 === 0) {
          return word;
        }
      }
  });
  return outputArr.join('');
}
    log(wordAppend(["a", "b", "a"])); // → a	a	✔	
    log(wordAppend(["a", "b", "a", "c", "a", "d", "a"])); // → aa	aa	✔	
    log(wordAppend(["a", "", "a"])); // → a	a	✔	
    log(wordAppend([])); // →		✔	
    log(wordAppend(["a", "b", "b", "a", "a"])); // → ba	ba	✔	
    log(wordAppend(["a", "b", "b", "b", "a", "c", "a", "a"])); // → baa	baa	✔	
    log(wordAppend(["a", "b", "b", "b", "a", "c", "a", "a", "a", "b", "a"])); // → baaba	baaba	✔	
    log(wordAppend(["not", "and", "or", "and", "this", "and", "or", "that", "not"])); // → andornot	andornot	✔	
    log(wordAppend(["a", "b", "c"])); // →		✔	
    log(wordAppend(["this", "or", "that", "and", "this", "and", "that"])); // → thisandthat	thisandthat	✔	
    log(wordAppend(["xx", "xx", "yy", "xx", "zz", "yy", "zz", "xx"])); // → xxyyzzxx	xxyyzzxx	✔


