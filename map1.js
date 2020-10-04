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



