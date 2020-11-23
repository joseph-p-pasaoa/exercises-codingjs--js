// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// MAP-2
//



/* WORD0
Given an array of strings, return a Map containing a key for every different string in the array, always with
the value 0. For example the string "hello" makes the pair "hello":0. We'll do more complicated counting later,
but for this problem the value is simply 0.
*/

function word0(keyArray){
  let exists = new Map();
  for (let key of keyArray) {
    exists.set(key, 0);
  }
  return exists;
}
word0(["a", "b", "a", "b"]) // → {'a': 0, 'b': 0}	{'a': 0, 'b': 0}	✔	
word0(["a", "b", "a", "c", "b"]) // → {'a': 0, 'b': 0, 'c': 0}	{'a': 0, 'b': 0, 'c': 0}	✔	
word0(["c", "b", "a"]) // → {'c': 0, 'b': 0, 'a': 0}	{'c': 0, 'b': 0, 'a': 0}	✔	
word0(["c", "c", "c", "c"]) // → {'c': 0}	{'c': 0}	✔	
word0([]) // → {}	{}	✔


/* WORDLEN
Given an array of strings, return a Map containing a key for every different string in the array,
and the value is that string's length.
*/

function wordLen(wordArray){
  const lengths = new Map();
  for (let word of wordArray) {
    lengths.set(word, word.length);
  }
  return lengths;
}
wordLen(["a", "bb", "a", "bb"]) // → {'a': 1, 'bb': 2}	{'a': 1, 'bb': 2}	✔	
wordLen(["this", "and", "that", "and"]) // → {'this': 4, 'and': 3, 'that': 4}	{'this': 4, 'and': 3, 'that': 4}	✔	
wordLen(["code", "code", "code", "bug"]) // → {'code': 4, 'bug': 3}	{'code': 4, 'bug': 3}	✔	
wordLen([]) // → {}	{}	✔	
wordLen(["z"]) // → {'z': 1}	{'z': 1}	✔	
wordLen(["are", "codes", "and", "cods"]) // → {'are': 3, 'codes': 5, 'and': 3, 'cods': 4}	{'are': 3, 'codes': 5, 'and': 3, 'cods': 4}	✔	
wordLen(["apple", "banana", "tea", "coffee"]) // → {'apple': 5, 'banana': 6, 'tea': 3, 'coffee': 6}	{'apple': 5, 'banana': 6, 'tea': 3, 'coffee': 6}	✔


/* PAIRS
Given an array of non-empty strings, create and return a Map as follows: for each string add its first
character as a key with its last character as the value.
*/

function pairs(wordArray){
  const extremes = new Map();
  for (let word of wordArray) {
    extremes.set(word[0], word[word.length - 1]);
  }
  return extremes;
}
pairs(["code", "bug"]) // → {'c': 'e', 'b': 'g'}	{'c': 'e', 'b': 'g'}	✔	
pairs(["man", "moon", "main"]) // → {'m': 'n'}	{'m': 'n'}	✔	
pairs(["man", "moon", "good", "night"]) // → {'m': 'n', 'g': 'd', 'n': 't'}	{'m': 'n', 'g': 'd', 'n': 't'}	✔	
pairs([]) // → {}	{}	✔	
pairs(["a", "b"]) // → {'a': 'a', 'b': 'b'}	{'a': 'a', 'b': 'b'}	✔	
pairs(["are", "codes", "and", "cods"]) // → {'a': 'd', 'c': 's'}	{'a': 'd', 'c': 's'}	✔	
pairs(["apple", "banana", "tea", "coffee"]) // → {'a': 'e', 'b': 'a', 't': 'a', 'c': 'e'}	{'a': 'e', 'b': 'a', 't': 'a', 'c': 'e'}	✔	


/* WORDCOUNT
The classic word-count algorithm: given an array of strings, return a Map with a key for each different string,
with the value the number of times that string appears in the array.
*/

function wordCount(wordArray){
  const instances = new Map();
  for (let word of wordArray) {
    if (instances.has(word)) {
      instances.set(word, instances.get(word) + 1);
    } else {
      instances.set(word, 1);
    }
  }
  return instances;
}
wordCount(["a", "b", "a", "c", "b"]) // → {'a': 2, 'b': 2, 'c': 1}	{'a': 2, 'b': 2, 'c': 1}	✔	
wordCount(["c", "b", "a"]) // → {'c': 1, 'b': 1, 'a': 1}	{'c': 1, 'b': 1, 'a': 1}	✔	
wordCount(["c", "c", "c", "c"]) // → {'c': 4}	{'c': 4}	✔	
wordCount([]) // → {}	{}	✔	
wordCount(["this", "and", "this", ""]) // → {'this': 2, 'and': 1, '': 1}	{'this': 2, 'and': 1, '': 1}	✔	
wordCount(["x", "y", "x", "Y", "X"]) // → {'x': 2, 'y': 1, 'Y': 1, 'X': 1}	{'x': 2, 'y': 1, 'Y': 1, 'X': 1}	✔	
wordCount(["123", "0", "123", "1"]) // → {'123': 2, '0': 1, '1': 1}	{'123': 2, '0': 1, '1': 1}	✔	
wordCount(["d", "a", "e", "d", "a", "d", "b", "b", "z", "a", "a", "b", "z", "x", "b", "f", "x", "two", "b", "one", "two"]) // → {'d': 3, 'a': 4, 'e': 1, 'b': 5, 'z': 2, 'x': 2, 'f': 1, 'two': 2, 'one': 1}	{'d': 3, 'a': 4, 'e': 1, 'b': 5, 'z': 2, 'x': 2, 'f': 1, 'two': 2, 'one': 1}	✔	
wordCount(["apple", "banana", "apple", "apple", "tea", "coffee", "banana"]) // → {'apple': 3, 'banana': 2, 'tea': 1, 'coffee': 1}	{'apple': 3, 'banana': 2, 'tea': 1, 'coffee': 1}	✔	
wordCount(["sask", "sask", "man", "ab", "sask", "man", "sask", "sask"]) // → {'sask': 5, 'man': 2, 'ab': 1}	{'sask': 5, 'man': 2, 'ab': 1}	✔


/* FIRSTCHAR
Given an array of non-empty strings, return a Map with a key for every different first character seen, with the
value of all the strings starting with that character appended together in the order they appear in the array.
*/

function firstChar(wordArray){
  const startWith = new Map();
  for (let word of wordArray) {
    if (startWith.has(word[0])) {
      startWith.set(word[0], startWith.get(word[0]) + word);
    } else {
      startWith.set(word[0], word);
    }
  }
  return startWith;
}
firstChar(["salt", "tea", "soda", "toast"]) // → {'s': 'saltsoda', 't': 'teatoast'}	{'s': 'saltsoda', 't': 'teatoast'}	✔	
firstChar(["aa", "bb", "cc", "aAA", "cCC", "d"]) // → {'a': 'aaaAA', 'b': 'bb', 'c': 'cccCC', 'd': 'd'}	{'a': 'aaaAA', 'b': 'bb', 'c': 'cccCC', 'd': 'd'}	✔	
firstChar([]) // → {}	{}	✔	
firstChar(["apple", "bells", "salt", "aardvark", "bells", "sun", "zen", "bells"]) // → {'a': 'appleaardvark', 'b': 'bellsbellsbells', 's': 'saltsun', 'z': 'zen'}	{'a': 'appleaardvark', 'b': 'bellsbellsbells', 's': 'saltsun', 'z': 'zen'}	✔	
firstChar(["apple", "banana", "ant", "asp", "candy", "coffee", "boat"]) // → {'a': 'appleantasp', 'b': 'bananaboat', 'c': 'candycoffee'}	{'a': 'appleantasp', 'b': 'bananaboat', 'c': 'candycoffee'}	✔


/* WORDAPPEND
Loop over the given array of strings to build a result string like this: when a string appears the 2nd, 4th,
6th, etc. time in the array, append the string to the result. Return the empty string if no string appears a
2nd time.
*/

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
wordAppend(["a", "b", "a"]); // → a	a	✔	
wordAppend(["a", "b", "a", "c", "a", "d", "a"]); // → aa	aa	✔	
wordAppend(["a", "", "a"]); // → a	a	✔	
wordAppend([]); // →		✔	
wordAppend(["a", "b", "b", "a", "a"]); // → ba	ba	✔	
wordAppend(["a", "b", "b", "b", "a", "c", "a", "a"]); // → baa	baa	✔	
wordAppend(["a", "b", "b", "b", "a", "c", "a", "a", "a", "b", "a"]); // → baaba	baaba	✔	
wordAppend(["not", "and", "or", "and", "this", "and", "or", "that", "not"]); // → andornot	andornot	✔	
wordAppend(["a", "b", "c"]); // →		✔	
wordAppend(["this", "or", "that", "and", "this", "and", "that"]); // → thisandthat	thisandthat	✔	
wordAppend(["xx", "xx", "yy", "xx", "zz", "yy", "zz", "xx"]); // → xxyyzzxx	xxyyzzxx	✔


/* WORDMULTIPLE
Given an array of strings, return a Map where each different string is a key and its value is true if that
string appears 2 or more times in the array.
*/

function wordMultiple(wordArray){
  const atLeastTwice = new Map();
  for (let str of wordArray) {
    if (atLeastTwice.get(str) === false) {
      atLeastTwice.set(str, true);
    } else if (!atLeastTwice.has(str)) {
      atLeastTwice.set(str, false);
    }
  }
  return atLeastTwice;
}
wordMultiple(["a", "b", "a", "c", "b"]) // → {'a': true, 'b': true, 'c': false}	{'a': true, 'b': true, 'c': false}	✔	
wordMultiple(["c", "b", "a"]) // → {'c': false, 'b': false, 'a': false}	{'c': false, 'b': false, 'a': false}	✔	
wordMultiple(["c", "c", "c", "c"]) // → {'c': true}	{'c': true}	✔	
wordMultiple([]) // → {}	{}	✔	
wordMultiple(["this", "and", "this"]) // → {'this': true, 'and': false}	{'this': true, 'and': false}	✔	
wordMultiple(["d", "a", "e", "d", "a", "d", "b", "b", "z", "a", "a", "b", "z", "x"]) // → {'d': true, 'a': true, 'e': false, 'b': true, 'z': true, 'x': false}	{'d': true, 'a': true, 'e': false, 'b': true, 'z': true, 'x': false}	✔


/* ALLSWAP
We'll say that 2 strings "match" if they are non-empty and their first chars are the same. Loop over and then
return the given array of non-empty strings as follows: if a string matches an earlier string in the array,
swap the 2 strings in the array. When a position in the array has been swapped, it no longer matches anything.
Using a map, this can be solved making just one pass over the array. More difficult than it looks.
*/

function allSwap(wordArray){
  const output = [];
  const firstsMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    const [currWord, leadChar] = [
      wordArray[i],
      wordArray[i][0]
    ];

    if (!firstsMap.has(leadChar)) {
      const wordInfo = {
        index: i,
        word: currWord
      };
      firstsMap.set(leadChar, wordInfo);
      output.push(currWord);
    } else {
      const past = firstsMap.get(leadChar);
      firstsMap.delete(leadChar);
      output[past.index] = currWord;
      output.push(past.word);
    }
  }

  return output;
}
allSwap(["ab", "ac"]) // → ac,ab	ac,ab	✔	
allSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"]) // → ay,by,cy,cx,bx,ax,azz,aaa	ay,by,cy,cx,bx,ax,azz,aaa	✔	
allSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"]) // → ay,by,ax,bx,aj,ai,by,bx	ay,by,ax,bx,aj,ai,by,bx	✔	
allSwap(["ax", "bx", "cx", "ay", "cy", "aaa", "abb"]) // → ay,bx,cy,ax,cx,abb,aaa	ay,bx,cy,ax,cx,abb,aaa	✔	
allSwap(["easy", "does", "it", "every", "ice", "eaten"]) // → every,does,ice,easy,it,eaten	every,does,ice,easy,it,eaten	✔	
allSwap(["list", "of", "words", "swims", "over", "lily", "water", "wait"]) // → lily,over,water,swims,of,list,words,wait	lily,over,water,swims,of,list,words,wait	✔	
allSwap(["4", "8", "15", "16", "23", "42"]) // → 42,8,16,15,23,4	42,8,16,15,23,4	✔	
allSwap(["aaa"]) // → aaa	aaa	✔	
allSwap([]) // →		✔	
allSwap(["a", "b", "c", "xx", "yy", "zz"]) // → a,b,c,xx,yy,zz	a,b,c,xx,yy,zz	✔


