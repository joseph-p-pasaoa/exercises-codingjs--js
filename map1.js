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
