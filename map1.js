function mapCount(someMap){
  const wanted = {a: true, b: true, c: true};
  let involvedKeys = 0;
  for (let [key, value] of someMap) {
    if (wanted[key]) involvedKeys++;
  }
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
  if (someMap.has('a')) {
    someMap.set('b', someMap.get('a'));
    someMap.set('a', '');
  }
  return someMap;
}

mapBully({'a': 'candy', 'b': 'dirt'}) // → {'a': '', 'b': 'candy'}	{'a': '', 'b': 'candy'}	✔	
mapBully({'a': 'candy'}) // → {'a': '', 'b': 'candy'}	{'a': '', 'b': 'candy'}	✔	
mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'}) // → {'a': '', 'b': 'candy', 'c': 'meh'}	{'a': '', 'b': 'candy', 'c': 'meh'}	✔	
mapBully({'b': 'carrot'}) // → {'b': 'carrot'}	{'b': 'carrot'}	✔	
mapBully({'c': 'meh'}) // → {'c': 'meh'}	{'c': 'meh'}	✔	
mapBully({'a': 'sparkle', 'c': 'meh'}) // → {'a': '', 'c': 'meh', 'b': 'sparkle'}	{'a': '', 'c': 'meh', 'b': 'sparkle'}	✔
