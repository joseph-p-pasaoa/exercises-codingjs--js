// Joseph P. Pasaoa
// JS Practice. Exercises found at https://codingjs.wmcicompsci.ca/
// MAP-1
//



/* MAPCOUNT
Given a map, count how many of the keys "a", "b" and "c" are part of the map. Return the result as an integer.
*/

function mapCount(someMap){
  let involvedKeys = 0;
  if (someMap.has('a')) involvedKeys++;
  if (someMap.has('b')) involvedKeys++;
  if (someMap.has('c')) involvedKeys++;

  return involvedKeys;
}
mapCount({'a': 'aaa', 'b': 'bb', 'c': 'cake'}) // → 3	3	✔	
mapCount({'yogurt': 'salt', 'bread': 'butter'}) // → 0	0	✔	
mapCount({'a': 'aa', 'b': 'bbb'}) // → 2	2	✔	
mapCount({'a': 'aaa'}) // → 1	1	✔	
mapCount({'b': 'bbb'}) // → 1	1	✔	
mapCount({}) // → 0	0	✔	
mapCount({'a': 'aaa', 'c': 'cake'}) // → 2	2	✔	
mapCount({'a': 'a', 'b': 'b', 'c': 'cake'}) // → 3	3	✔	
mapCount({'ab': 'nope', 'b': 'bbb', 'c': 'ccc'}) // → 2	2	✔	
mapCount({'b': 'b', 'c': 'cake'}) // → 2	2	✔	
mapCount({'a': 'a', 'c': 'cake'}) // → 2	2	✔	
mapCount({'c': 'cat', 'd': 'dog'}) // → 2	2	✔



/* MAPBULLY
Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value,
and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with
the empty string.
*/

function mapBully(someMap){
  const newMap = new Map(someMap);
  if (newMap.has('a')) {
    newMap.set('b', newMap.get('a'));
    newMap.set('a', '');
  }

  return newMap;
}
mapBully({'a': 'candy', 'b': 'dirt'}) // → {'a': '', 'b': 'candy'}	{'a': '', 'b': 'candy'}	✔	
mapBully({'a': 'candy'}) // → {'a': '', 'b': 'candy'}	{'a': '', 'b': 'candy'}	✔	
mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'}) // → {'a': '', 'b': 'candy', 'c': 'meh'}	{'a': '', 'b': 'candy', 'c': 'meh'}	✔	
mapBully({'b': 'carrot'}) // → {'b': 'carrot'}	{'b': 'carrot'}	✔	
mapBully({'c': 'meh'}) // → {'c': 'meh'}	{'c': 'meh'}	✔	
mapBully({'a': 'sparkle', 'c': 'meh'}) // → {'a': '', 'c': 'meh', 'b': 'sparkle'}	{'a': '', 'c': 'meh', 'b': 'sparkle'}	✔



/* MAPSHARE
Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value.
In all cases remove the key "c", leaving the rest of the map unchanged.
*/

function mapShare(someMap){
  const newMap = new Map(someMap);
  if (newMap.has('a')) {
    newMap.set('b', newMap.get('a'));
  }
  newMap.delete('c');

  return newMap;
}
mapShare({'a': 'aaa', 'b': 'bbb', 'c': 'ccc'}) // → {'a': 'aaa', 'b': 'aaa'}	{'a': 'aaa', 'b': 'aaa'}	✔	
mapShare({'b': 'xyz', 'c': 'ccc'}) // → {'b': 'xyz'}	{'b': 'xyz'}	✔	
mapShare({'a': 'aaa', 'c': 'meh', 'd': 'hi'}) // → {'a': 'aaa', 'd': 'hi', 'b': 'aaa'}	{'a': 'aaa', 'd': 'hi', 'b': 'aaa'}	✔	
mapShare({'a': 'xyz', 'b': '1234', 'c': 'yo', 'z': 'zzz'}) // → {'a': 'xyz', 'b': 'xyz', 'z': 'zzz'}	{'a': 'xyz', 'b': 'xyz', 'z': 'zzz'}	✔	
mapShare({'a': 'xyz', 'b': '1234', 'c': 'yo', 'd': 'ddd', 'e': 'everything'}) // → {'a': 'xyz', 'b': 'xyz', 'd': 'ddd', 'e': 'everything'}	{'a': 'xyz', 'b': 'xyz', 'd': 'ddd', 'e': 'everything'}	✔



/* MAPAB
Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys.
If both keys are present, append their 2 string values together and store the result under the key "ab".
*/

function mapAB(someMap){
  const newMap = new Map(someMap);
  if (newMap.has('a') && newMap.has('b')) {
    newMap.set(
      'ab',
      newMap.get('a') + newMap.get('b')
    );
  }

  return newMap;
}
mapAB({'a': 'Hi', 'b': 'There'}) // → {'a': 'Hi', 'b': 'There', 'ab': 'HiThere'}	{'a': 'Hi', 'b': 'There', 'ab': 'HiThere'}	✔	
mapAB({'a': 'Hi'}) // → {'a': 'Hi'}	{'a': 'Hi'}	✔	
mapAB({'b': 'There'}) // → {'b': 'There'}	{'b': 'There'}	✔	
mapAB({'c': 'meh'}) // → {'c': 'meh'}	{'c': 'meh'}	✔	
mapAB({'a': 'aaa', 'ab': 'nope', 'b': 'bbb', 'c': 'ccc'}) // → {'a': 'aaa', 'ab': 'aaabbb', 'b': 'bbb', 'c': 'ccc'}	{'a': 'aaa', 'ab': 'aaabbb', 'b': 'bbb', 'c': 'ccc'}	✔	
mapAB({'ab': 'nope', 'b': 'bbb', 'c': 'ccc'}) // → {'ab': 'nope', 'b': 'bbb', 'c': 'ccc'}	{'ab': 'nope', 'b': 'bbb', 'c': 'ccc'}	✔



/* TOPPING1
Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" is
present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".
*/

function topping1(someMap){
  const newMap = new Map(someMap);
  if (newMap.has('ice cream')) {
    newMap.set('ice cream', 'cherry');
  }
  newMap.set('bread', 'butter');

  return newMap;
}
topping1({'ice cream': 'peanuts'}) // → {'ice cream': 'cherry', 'bread': 'butter'}	{'ice cream': 'cherry', 'bread': 'butter'}	✔	
topping1({}) // → {'bread': 'butter'}	{'bread': 'butter'}	✔	
topping1({'pancake': 'syrup'}) // → {'pancake': 'syrup', 'bread': 'butter'}	{'pancake': 'syrup', 'bread': 'butter'}	✔	
topping1({'bread': 'dirt', 'ice cream': 'strawberries'}) // → {'bread': 'butter', 'ice cream': 'cherry'}	{'bread': 'butter', 'ice cream': 'cherry'}	✔	
topping1({'bread': 'jam', 'ice cream': 'strawberries', 'salad': 'oil'}) // → {'bread': 'butter', 'ice cream': 'cherry', 'salad': 'oil'}	{'bread': 'butter', 'ice cream': 'cherry', 'salad': 'oil'}	✔	
topping1({'bread': 'nutella'}) // → {'bread': 'butter'}	{'bread': 'butter'}	✔



/* TOPPING2
Given a map of food keys and their topping values, modify and return the map as follows: if the key "ice cream"
has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that
value to "nuts".
*/

function topping2(someMap){
  const newMap = new Map(someMap);
  if (newMap.has('ice cream')) {
    newMap.set('yogurt', newMap.get('ice cream'));
  }
  if (newMap.has('spinach')) {
    newMap.set('spinach', 'nuts');
  }
  return newMap;
}
topping2({'ice cream': 'cherry'}) // → {'ice cream': 'cherry', 'yogurt': 'cherry'}	{'ice cream': 'cherry', 'yogurt': 'cherry'}	✔	
topping2({'spinach': 'dirt', 'ice cream': 'cherry'}) // → {'spinach': 'nuts', 'ice cream': 'cherry', 'yogurt': 'cherry'}	{'spinach': 'nuts', 'ice cream': 'cherry', 'yogurt': 'cherry'}	✔	
topping2({'yogurt': 'salt'}) // → {'yogurt': 'salt'}	{'yogurt': 'salt'}	✔	
topping2({'yogurt': 'salt', 'bread': 'butter'}) // → {'yogurt': 'salt', 'bread': 'butter'}	{'yogurt': 'salt', 'bread': 'butter'}	✔	
topping2({}) // → {}	{}	✔	
topping2({'ice cream': 'air', 'salad': 'oil'}) // → {'ice cream': 'air', 'salad': 'oil', 'yogurt': 'air'}	{'ice cream': 'air', 'salad': 'oil', 'yogurt': 'air'}	✔



/* TOPPING3
Given a map of food keys and topping values, modify and return the map as follows: if the key "potato" has a value,
set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key
"spinach".
*/

function topping3(someMap){
  const newMap = new Map(someMap);
  if (newMap.has('potato')) {
    newMap.set('fries', newMap.get('potato'));
  }
  if (newMap.has('salad')) {
    newMap.set('spinach', newMap.get('salad'));
  }
  return newMap;
}
topping3({'potato': 'ketchup'}) // → {'potato': 'ketchup', 'fries': 'ketchup'}	{'potato': 'ketchup', 'fries': 'ketchup'}	✔	
topping3({'potato': 'butter'}) // → {'potato': 'butter', 'fries': 'butter'}	{'potato': 'butter', 'fries': 'butter'}	✔	
topping3({'salad': 'oil', 'potato': 'ketchup'}) // → {'salad': 'oil', 'potato': 'ketchup', 'fries': 'ketchup', 'spinach': 'oil'}	{'salad': 'oil', 'potato': 'ketchup', 'fries': 'ketchup', 'spinach': 'oil'}	✔	
topping3({'toast': 'butter', 'salad': 'oil', 'potato': 'ketchup'}) // → {'toast': 'butter', 'salad': 'oil', 'potato': 'ketchup', 'fries': 'ketchup', 'spinach': 'oil'}	{'toast': 'butter', 'salad': 'oil', 'potato': 'ketchup', 'fries': 'ketchup', 'spinach': 'oil'}	✔	
topping3({}) // → {}	{}	✔	
topping3({'salad': 'pepper', 'fries': 'salt'}) // → {'salad': 'pepper', 'fries': 'salt', 'spinach': 'pepper'}	{'salad': 'pepper', 'fries': 'salt', 'spinach': 'pepper'}	✔



/* MAPAB2
Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values,
remove them both.
*/

function mapAB2(someMap){
  const newMap = new Map(someMap);
  if (
    newMap.has('a') &&
    newMap.get('a') === newMap.get('b')
    ) {
    newMap.delete('a');
    newMap.delete('b');
  }
  return newMap;
}
mapAB2({'a': 'aaa', 'b': 'aaa', 'c': 'cake'}) // → {'c': 'cake'}	{'c': 'cake'}	✔	
mapAB2({'a': 'aaa', 'b': 'bbb'}) // → {'a': 'aaa', 'b': 'bbb'}	{'a': 'aaa', 'b': 'bbb'}	✔	
mapAB2({'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}) // → {'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}	{'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}	✔	
mapAB2({'a': 'aaa'}) // → {'a': 'aaa'}	{'a': 'aaa'}	✔	
mapAB2({'b': 'bbb'}) // → {'b': 'bbb'}	{'b': 'bbb'}	✔	
mapAB2({'a': '', 'b': '', 'c': 'ccc'}) // → {'c': 'ccc'}	{'c': 'ccc'}	✔	
mapAB2({}) // → {}	{}	✔	
mapAB2({'a': 'a', 'b': 'b', 'z': 'zebra'}) // → {'a': 'a', 'b': 'b', 'z': 'zebra'}	{'a': 'a', 'b': 'b', 'z': 'zebra'}	✔



/* MAPAB3
Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map
(but not both), set the other to have that same value in the map.
*/

function mapAB3(someMap){
  const newMap = new Map(someMap);
  const [isA, isB] = [
    newMap.has('a'),
    newMap.has('b')
  ];

  if (
    (isA && isB) || !(isA || isB)
  ) return newMap;

  if (isA) {
    newMap.set('b', newMap.get('a'));
  } else {
    newMap.set('a', newMap.get('b'));
  }

  return newMap;
}
mapAB3({'a': 'aaa', 'c': 'cake'}) // → {'a': 'aaa', 'c': 'cake', 'b': 'aaa'}	{'a': 'aaa', 'c': 'cake', 'b': 'aaa'}	✔	
mapAB3({'b': 'bbb', 'c': 'cake'}) // → {'b': 'bbb', 'c': 'cake', 'a': 'bbb'}	{'b': 'bbb', 'c': 'cake', 'a': 'bbb'}	✔	
mapAB3({'a': 'aaa', 'b': 'bbb', 'c': 'cake'}) // → {'a': 'aaa', 'b': 'bbb', 'c': 'cake'}	{'a': 'aaa', 'b': 'bbb', 'c': 'cake'}	✔	
mapAB3({'ccc': 'ccc'}) // → {'ccc': 'ccc'}	{'ccc': 'ccc'}	✔	
mapAB3({'c': 'a', 'd': 'b'}) // → {'c': 'a', 'd': 'b'}	{'c': 'a', 'd': 'b'}	✔	
mapAB3({}) // → {}	{}	✔	
mapAB3({'a': ''}) // → {'a': '', 'b': ''}	{'a': '', 'b': ''}	✔	
mapAB3({'b': ''}) // → {'b': '', 'a': ''}	{'b': '', 'a': ''}	✔	
mapAB3({'a': '', 'b': ''}) // → {'a': '', 'b': ''}	{'a': '', 'b': ''}	✔	
mapAB3({'aa': 'aa', 'a': 'apple', 'z': 'zzz'}) // → {'aa': 'aa', 'a': 'apple', 'z': 'zzz', 'b': 'apple'}	{'aa': 'aa', 'a': 'apple', 'z': 'zzz', 'b': 'apple'}	✔



/* MAPAB4
Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths,
then set "c" to have the longer value. If the values exist and have the same length, change them both to an
empty string.
*/

function mapAB4(someMap){
  const newMap = new Map(someMap);
  if (!newMap.has('a') || !newMap.has('b')) {
    return newMap;
  }

  const [aValue, bValue] = [
    newMap.get('a'),
    newMap.get('b')
  ];

  if (aValue.length === bValue.length) {
    newMap.set('a', '');
    newMap.set('b', '');
  } else {
    if (aValue.length > bValue.length) {
      newMap.set('c', aValue);
    } else {
      newMap.set('c', bValue);
    }
  }

  return newMap;
}
mapAB4({'a': 'aaa', 'b': 'bb', 'c': 'cake'}) // → {'a': 'aaa', 'b': 'bb', 'c': 'aaa'}	{'a': 'aaa', 'b': 'bb', 'c': 'aaa'}	✔	
mapAB4({'a': 'aa', 'b': 'bbb', 'c': 'cake'}) // → {'a': 'aa', 'b': 'bbb', 'c': 'bbb'}	{'a': 'aa', 'b': 'bbb', 'c': 'bbb'}	✔	
mapAB4({'a': 'aa', 'b': 'bbb'}) // → {'a': 'aa', 'b': 'bbb', 'c': 'bbb'}	{'a': 'aa', 'b': 'bbb', 'c': 'bbb'}	✔	
mapAB4({'a': 'aaa'}) // → {'a': 'aaa'}	{'a': 'aaa'}	✔	
mapAB4({'b': 'bbb'}) // → {'b': 'bbb'}	{'b': 'bbb'}	✔	
mapAB4({'a': 'aaa', 'b': 'bbb', 'c': 'cake'}) // → {'a': '', 'b': '', 'c': 'cake'}	{'a': '', 'b': '', 'c': 'cake'}	✔	
mapAB4({'a': 'a', 'b': 'b', 'c': 'cake'}) // → {'a': '', 'b': '', 'c': 'cake'}	{'a': '', 'b': '', 'c': 'cake'}	✔	
mapAB4({'a': '', 'b': 'b', 'c': 'cake'}) // → {'a': '', 'b': 'b', 'c': 'b'}	{'a': '', 'b': 'b', 'c': 'b'}	✔	
mapAB4({'a': 'a', 'b': '', 'c': 'cake'}) // → {'a': 'a', 'b': '', 'c': 'a'}	{'a': 'a', 'b': '', 'c': 'a'}	✔	
mapAB4({'c': 'cat', 'd': 'dog'}) // → {'c': 'cat', 'd': 'dog'}	{'c': 'cat', 'd': 'dog'}	✔	
mapAB4({'ccc': 'ccc'}) // → {'ccc': 'ccc'}	{'ccc': 'ccc'}	✔	
mapAB4({'c': 'a', 'd': 'b'}) // → {'c': 'a', 'd': 'b'}	{'c': 'a', 'd': 'b'}	✔	
mapAB4({}) // → {}	{}	✔	
mapAB4({'a': '', 'z': 'z'}) // → {'a': '', 'z': 'z'}	{'a': '', 'z': 'z'}	✔	
mapAB4({'b': '', 'z': 'z'}) // → {'b': '', 'z': 'z'}	{'b': '', 'z': 'z'}	✔	
mapAB4({'a': 'cat', 'b': 'dog', 'c': 'pig'}) // → {'a': '', 'b': '', 'c': 'pig'}	{'a': '', 'b': '', 'c': 'pig'}	✔
