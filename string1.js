// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
//



// STRING-1 //

function helloName(name){
  return `Hello ${name}!`;
}
helloName('Bob'); // → Hello Bob!	Hello Bob!	✔
helloName('Alice'); // → Hello Alice!	Hello Alice!	✔
helloName('X'); // → Hello X!	Hello X!	✔
helloName('Dolly'); // → Hello Dolly!	Hello Dolly!	✔
helloName('Alpha'); // → Hello Alpha!	Hello Alpha!	✔
helloName('Omega'); // → Hello Omega!	Hello Omega!	✔
helloName('Goodbye'); // → Hello Goodbye!	Hello Goodbye!	✔
helloName('ho ho ho'); // → Hello ho ho ho!	Hello ho ho ho!	✔
helloName('xyz!'); // → Hello xyz!!	Hello xyz!!	✔
helloName('Hello!'); // → Hello Hello!! Hello Hello!! ✔


function makeAbba(a, b){
  return a + b + b + a;
}
makeAbba('Hi', 'Bye'); // → HiByeByeHi	HiByeByeHi	✔
makeAbba('Yo', 'Alice'); // → YoAliceAliceYo	YoAliceAliceYo	✔
makeAbba('What', 'Up'); // → WhatUpUpWhat	WhatUpUpWhat	✔
makeAbba('aaa', 'bbb'); // → aaabbbbbbaaa	aaabbbbbbaaa	✔
makeAbba('x', 'y'); // → xyyx	xyyx	✔
makeAbba('x', ''); // → xx	xx	✔
makeAbba('ba', 'Ya'); // → baYaYaba	baYaYaba	✔
makeAbba('Ya', 'Ya'); // → YaYaYaYa YaYaYaYa  ✔


function makeTags(tag, word){
  return `<${tag}>${word}</${tag}>`;
}
makeTags('i', 'Yay'); // → Yay	Yay	✔
makeTags('i', 'Hello'); // → Hello	Hello	✔
makeTags('cite', 'Yay'); // → Yay	Yay	✔
makeTags('address', 'here'); // → here here ✔
makeTags('body', 'Heart'); // → Heart	Heart	✔
makeTags('i', 'i'); // → i	i	✔
makeTags('i', 'i'); // → i	i	✔
makeTags('i', ''); // → ✔


function makeOutWord(out, word){
  let workArr = out.split('');
  workArr.splice(2, 0, word);
  return workArr.join('');
}
makeOutWord('<<>>', 'Yay'); // → <>	<>	✔
makeOutWord('<<>>', 'WooHoo'); // → <>	<>	✔
makeOutWord('[[]]', 'word'); // → [[word]]	[[word]]	✔
makeOutWord('HHoo', 'Hello'); // → HHHellooo	HHHellooo	✔
makeOutWord('abyz', 'YAY'); // → abYAYyz  abYAYyz ✔


function extraEnd(str){
  let newStr = str.slice(-2);
  return newStr + newStr + newStr;
}
extraEnd('Hello'); // → lololo	lololo	✔
extraEnd('ab'); // → ababab	ababab	✔
extraEnd('Hi'); // → HiHiHi	HiHiHi	✔
extraEnd('Candy'); // → dydydy	dydydy	✔
extraEnd('Code'); // → dedede  dedede  ✔


function firstTwo(str){
  if (str.length < 2) {
    return str;
  }
  return str.slice(0, 2);
}
firstTwo('Hello'); // → He	He	✔
firstTwo('abcdefg'); // → ab	ab	✔
firstTwo('ab'); // → ab	ab	✔
firstTwo('a'); // → a	a	✔
firstTwo(''); // →		✔
firstTwo('kitten'); // → ki	ki	✔
firstTwo('hi'); // → hi	hi	✔
firstTwo('hiya'); // → hi	hi	✔


function firstHalf(str){
  return str.slice(0, str.length / 2);
}
firstHalf('WooHoo'); // → WooHoo	Woo	✔
firstHalf('HelloThere'); // → HelloThere	Hello	✔
firstHalf('abcdefg'); // → abcdefg	abc	✔
firstHalf('ab'); // → ab	a	✔
firstHalf(''); // →		✔
firstHalf('0123456789'); // → 0123456789	01234	✔
firstHalf('kitten'); // → kitten	kit ✔


function withoutEnd(str){
  return str.slice(1, str.length - 1);
}
withoutEnd('Hello'); // → ell	ell	✔
withoutEnd('java'); // → av	av	✔
withoutEnd('coding'); // → odin	odin	✔
withoutEnd('code'); // → od	od	✔
withoutEnd('ab'); // →		✔
withoutEnd('Chocolate!'); // → hocolate	hocolate	✔
withoutEnd('kitten'); // → itte	itte	✔
withoutEnd('woohoo'); // → ooho	ooho	✔


function comboString(a, b){
  if (a.length < b.length) {
    return a + b + a;
  }
  return b + a + b;
}
comboString('Hello', 'hi'); // → hiHellohi	hiHellohi	✔
comboString('Hi', 'Hello'); // → HiHelloHi	HiHelloHi	✔
comboString('aaa', 'b'); // → baaab	baaab	✔
comboString('b', 'aaa'); // → baaab	baaab	✔
comboString('aaa', ''); // → aaa	aaa	✔
comboString('', 'bb'); // → bb	bb	✔
comboString('aaa', '1234'); // → aaa1234aaa	aaa1234aaa	✔
comboString('aaa', 'bb'); // → bbaaabb	bbaaabb	✔
comboString('a', 'bb'); // → abba	abba	✔
comboString('bb', 'a'); // → abba	abba	✔
comboString('a', 'bb'); // → abba	abba	✔
comboString('xyz', 'ab'); // → abxyzab	abxyzab	✔


function nonStart(a, b){
  return a.slice(1) + b.slice(1);
}
nonStart('Hello', 'There'); // → ellohere	ellohere	✔
nonStart('java', 'code'); // → avaode	avaode	✔
nonStart('shotl', 'java'); // → hotlava	hotlava	✔
nonStart('ab', 'xy'); // → by	by	✔
nonStart('ab', 'x'); // → b	b	✔
nonStart('x', 'ac'); // → c	c	✔
nonStart('a', 'x'); // →		✔
nonStart('kit', 'kat'); // → itat	itat	✔
nonStart('mart', 'dart'); // → artart	artart	✔


function left2(str){
  return str.slice(2) + str.slice(0, 2);
}
left2('Hello'); // → lloHe	lloHe	✔
left2('java'); // → vaja	vaja	✔
left2('Hi'); // → Hi	Hi	✔
left2('code'); // → deco	deco	✔
left2('cat'); // → tca	tca	✔
left2('12345'); // → 34512	34512	✔
left2('Chocolate'); // → ocolateCh	ocolateCh	✔
left2('bricks'); // → icksbr	icksbr	✔


function right2(str){
  return str.slice(-2) + str.slice(0, -2);
}
right2('Hello'); // → loHel	loHel	✔
right2('java'); // → vaja	vaja	✔
right2('Hi'); // → Hi	Hi	✔
right2('code'); // → deco	deco	✔
right2('cat'); // → atc	atc	✔
right2('12345'); // → 45123	45123	✔


function theEnd(str, front){
  if (front) {
    return str[0];
  }
  return str.slice(-1);
}
theEnd('Hello', true); // → H	H	✔
theEnd('Hello', false); // → o	o	✔
theEnd('oh', true); // → o	o	✔
theEnd('oh', false); // → h	h	✔
theEnd('x', true); // → x	x	✔
theEnd('x', false); // → x	x	✔
theEnd('java', true); // → j	j	✔
theEnd('chocolate', false); // → e	e	✔
theEnd('1234', true); // → 1	1	✔
theEnd('code', false); // → e	e	✔


function withoutEnd2(str){
  return str.slice(1, -1);
}
withoutEnd2('Hello'); // → ell	ell	✔
withoutEnd2('abc'); // → b	b	✔
withoutEnd2('ab'); // →		✔
withoutEnd2('a'); // →		✔
withoutEnd2(''); // →		✔
withoutEnd2('coldy'); // → old	old	✔
withoutEnd2('java code'); // → ava cod	ava cod	✔


function middleTwo(str){
  return str.slice(str.length / 2 - 1, str.length / 2 + 1);
}
middleTwo('string'); // →	ri	✔
middleTwo('code'); // →	od	✔
middleTwo('Practice'); // →	ct	✔
middleTwo('ab'); // →	ab	✔
middleTwo('123456789'); // → 45	✔


function endsLy(str){
  return str.slice(-2) === 'ly';
}
endsLy('oddly'); // → true	true	✔
endsLy('y'); // → false	false	✔
endsLy('oddl'); // → false	false	✔
endsLy('olydd'); // → false	false	✔
endsLy('ly'); // → true	true	✔
endsLy(''); // → false	false	✔
endsLy('falsely'); // → true	true	✔
endsLy('evenly'); // → true	true	✔


function nTwice(str,n){
  return n === 0 ? "" : str.slice(0, n) + str.slice(-n);
}
nTwice('hello', 2) // → helo	helo	✔
nTwice('Chocolate', 3) // → Choate	Choate	✔
nTwice('Chocolate', 1) // → Ce	Ce	✔
nTwice('Chocolate', 0) // →		✔
nTwice('Hello', 4) // → Hellello	Hellello	✔
nTwice('Code', 4) // → CodeCode	CodeCode	✔
nTwice('Code', 2) // → Code	Code	✔


function twoChar(str,index){
  if (index < 0 || index >= str.length - 1) {
    return str.slice(0, 2);
  }
  return str.slice(index, index + 2);
}
twoChar('java', 0) // → ja	ja	✔
twoChar('java', 2) // → va	va	✔
twoChar('java', 3) // → ja	ja	✔
twoChar('java', 4) // → ja	ja	✔
twoChar('java', -1) // → ja	ja	✔
twoChar('Hello', 0) // → He	He	✔
twoChar('Hello', 1) // → el	el	✔
twoChar('Hello', 99) // → He	He	✔
twoChar('Hello', 3) // → lo	lo	✔
twoChar('Hello', 4) // → He	He	✔
twoChar('Hello', 5) // → He	He	✔
twoChar('Hello', -7) // → He	He	✔
twoChar('Hello', 6) // → He	He	✔
twoChar('Hello', -1) // → He	He	✔
twoChar('yay', 0) // → ya	ya	✔


function middleThree(str){
  const start = Math.floor(str.length / 2) - 1;
  return str.slice(start, start + 3);
}
middleThree('Candy') // → and	and	✔
middleThree('and') // → and	and	✔
middleThree('solving') // → lvi	lvi	✔
middleThree('Hi yet Hi') // → yet	yet	✔
middleThree('java yet java') // → yet	yet	✔
middleThree('Chocolate') // → col	col	✔
middleThree('XabcxyzabcX') // → xyz	xyz	✔


function hasBad(str){
  return str.slice(0, 4).includes('bad');
}
hasBad('badxx') // → true	true	✔
hasBad('xbadxx') // → true	true	✔
hasBad('xxbadxx') // → false	false	✔
hasBad('code') // → false	false	✔
hasBad('bad') // → true	true	✔
hasBad('ba') // → false	false	✔
hasBad('xba') // → false	false	✔
hasBad('xbad') // → true	true	✔
hasBad('') // → false	false	✔
hasBad('badyy') // → true	true	✔


function atFirst(str){
  if (str.length < 2) {
    return str[0] ? str + '@' : '@@';
  }
  return str.slice(0, 2);
}
atFirst('hello') // → he	he	✔
atFirst('hi') // → hi	hi	✔
atFirst('h') // → h@	h@	✔
atFirst('') // → @@	@@	✔
atFirst('kitten') // → ki	ki	✔
atFirst('java') // → ja	ja	✔
atFirst('j') // → j@	j@	✔


function lastChars(a,b){
  return (a[0] || '@') + (b[b.length - 1] || '@');
}
lastChars('last', 'chars') // → ls	ls	✔
lastChars('yo', 'java') // → ya	ya	✔
lastChars('hi', '') // → h@	h@	✔
lastChars('', 'hello') // → @o	@o	✔
lastChars('', '') // → @@	@@	✔
lastChars('kitten', 'hi') // → ki	ki	✔
lastChars('k', 'zip') // → kp	kp	✔
lastChars('kitten', '') // → k@	k@	✔
lastChars('kitten', 'zip') // → kp	kp	✔


function conCat(a,b){
  if (a.slice(-1) === b[0]) {
    return a.slice(0, -1) + b;
  }
  return a + b;
}
conCat('abc', 'cat') // → abcat	abcat	✔
conCat('dog', 'cat') // → dogcat	dogcat	✔
conCat('abc', '') // → abc	abc	✔
conCat('', 'cat') // → cat	cat	✔
conCat('pig', 'g') // → pig	pig	✔
conCat('pig', 'doggy') // → pigdoggy	pigdoggy	✔


function lastTwo(str){
  if (str.length < 2) {
    return str;
  }
  return str.slice(0, -2) + str[str.length - 1] + str[str.length - 2];
}
lastTwo('coding') // → codign	codign	✔
lastTwo('cat') // → cta	cta	✔
lastTwo('ab') // → ba	ba	✔
lastTwo('a') // → a	a	✔
lastTwo('') // →		✔


function seeColor(str){
  if (str.slice(0, 3) === 'red') {
    return 'red';
  }
  if (str.slice(0, 4) === 'blue') {
    return 'blue';
  }
  return '';
}
seeColor('redxx') // → red	red	✔
seeColor('xxred') // →		✔
seeColor('blueTimes') // → blue	blue	✔
seeColor('NoColor') // →		✔
seeColor('red') // → red	red	✔
seeColor('re') // →		✔
seeColor('blu') // →		✔
seeColor('blue') // → blue	blue	✔
seeColor('a') // →		✔
seeColor('') // →		✔
seeColor('xyzred') // →		✔


function frontAgain(str){
  if (str.length < 2) {
    return false;
  }
  return str.slice(0, 2) === str.slice(-2);
}
frontAgain('edited') // → true	true	✔
frontAgain('edit') // → false	false	✔
frontAgain('ed') // → true	true	✔
frontAgain('jj') // → true	true	✔
frontAgain('jjj') // → true	true	✔
frontAgain('jjjj') // → true	true	✔
frontAgain('jjjk') // → false	false	✔
frontAgain('x') // → false	false	✔
frontAgain('') // → false	false	✔
frontAgain('java') // → false	false	✔
frontAgain('javaja') // → true	true	✔


function minCat(a, b){
  if (a.length === 0 || b.length === 0) {
    return '';
  }
  if (a.length > b.length) {
    return a.slice(-b.length) + b;
  }
  if (b.length > a.length) {
    return a + b.slice(-a.length);
  }
  return a + b;
}
minCat('Hello', 'Hi'); // → loHi	loHi	✔
minCat('Hello', 'java'); // → ellojava	ellojava	✔
minCat('java', 'Hello'); // → javaello	javaello	✔
minCat('abc', 'x'); // → cx	cx	✔
minCat('x', 'abc'); // → xc	xc	✔
minCat('abc', ''); // →  ✔


function extraFront(str){
  return str.slice(0,2) + str.slice(0,2) + str.slice(0,2);
}
extraFront('Hello') // → HeHeHe	HeHeHe	✔
extraFront('ab') // → ababab	ababab	✔
extraFront('H') // → HHH	HHH	✔
extraFront('') // →		✔
extraFront('Candy') // → CaCaCa	CaCaCa	✔
extraFront('Code') // → CoCoCo	CoCoCo	✔


function without2(str){
  if (str.length !== 1 && str.slice(0,2) === str.slice(-2)) {
    return str.slice(2);
  }
  return str;
}
without2('HelloHe') // → lloHe	lloHe	✔
without2('HelloHi') // → HelloHi	HelloHi	✔
without2('Hi') // →		✔
without2('Chocolate') // → Chocolate	Chocolate	✔
without2('xxx') // → x	x	✔
without2('xx') // →		✔
without2('x') // → x	x	✔
without2('') // →		✔
without2('Fruits') // → Fruits	Fruits	✔


function deFront(str){
  let output = '';
  if (str[0] === 'a') {
    output += 'a';
  }
  if (str[1] === 'b') {
    output += 'b';
  }
  return output += str.slice(2);
}
deFront('Hello') // → llo	llo	✔
deFront('java') // → va	va	✔
deFront('away') // → aay	aay	✔
deFront('axy') // → ay	ay	✔
deFront('abc') // → abc	abc	✔
deFront('xby') // → by	by	✔
deFront('ab') // → ab	ab	✔
deFront('ax') // → a	a	✔
deFront('axb') // → ab	ab	✔
deFront('aaa') // → aa	aa	✔
deFront('xbc') // → bc	bc	✔
deFront('bbb') // → bb	bb	✔
deFront('bazz') // → zz	zz	✔
deFront('ba') // →		✔
deFront('abxyz') // → abxyz	abxyz	✔
deFront('hi') // →		✔
deFront('his') // → s	s	✔
deFront('xz') // →		✔
deFront('zzz') // → z	z	✔


function startWord(str,word){
  if (word.length === 1 || word.slice(1) === str.slice(1, word.length)) {
    return str.slice(0, word.length);
  }
  return '';
}
startWord('hippo', 'hi') // → hi	hi	✔
startWord('hippo', 'xip') // → hip	hip	✔
startWord('hippo', 'i') // → h	h	✔
startWord('hippo', 'ix') // →		✔
startWord('h', 'ix') // →		✔
startWord('', 'i') // →		✔
startWord('hip', 'zi') // → hi	hi	✔
startWord('hip', 'zip') // → hip	hip	✔
startWord('hip', 'zig') // →		✔
startWord('h', 'z') // → h	h	✔
startWord('hippo', 'xippo') // → hippo	hippo	✔
startWord('hippo', 'xyz') // →		✔
startWord('hippo', 'hip') // → hip	hip	✔
startWord('kitten', 'cit') // → kit	kit	✔
startWord('kit', 'cit') // → kit	kit	✔


function withoutX(str) {
  let output = str.split('');
  if (str[0] === 'x') {
    output.shift();
  }
  if (str[str.length - 1] === 'x') {
    output.pop();
  }
  return output.join('');
}
withoutX('xHix') // → Hi	Hi	✔
withoutX('xHi') // → Hi	Hi	✔
withoutX('Hxix') // → Hxi	Hxi	✔
withoutX('Hi') // → Hi	Hi	✔
withoutX('xxHi') // → xHi	xHi	✔
withoutX('Hix') // → Hi	Hi	✔
withoutX('xaxbx') // → axb	axb	✔
withoutX('xx') // →		✔
withoutX('x') // →		✔
withoutX('') // →		✔
withoutX('Hello') // → Hello	Hello	✔
withoutX('Hexllo') // → Hexllo	Hexllo	✔


function withoutX2(str){
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (i >= 2 || str[i] !== 'x') {
output += str[i];
    }
  }
  return output;
}
withoutX2('xHi') // → Hi	Hi	✔
withoutX2('Hxi') // → Hi	Hi	✔
withoutX2('Hi') // → Hi	Hi	✔
withoutX2('xxHi') // → Hi	Hi	✔
withoutX2('Hix') // → Hix	Hix	✔
withoutX2('xaxb') // → axb	axb	✔
withoutX2('xx') // →		✔
withoutX2('x') // →		✔
withoutX2('') // →		✔
withoutX2('Hello') // → Hello	Hello	✔
withoutX2('Hexllo') // → Hexllo	Hexllo	✔
withoutX2('xHxllo') // → Hxllo	Hxllo	✔
