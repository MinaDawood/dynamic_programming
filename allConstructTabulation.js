// m = target.length, n = wordBank.length
// Time Complexity O(n^m)
// Space Complexity O(n^m)
const allConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
};

console.log(
  allConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl'])
);
// [
//   ['purp', 'le']
//   ['p', 'ur', 'p', 'le']
// ]

console.log(
  allConstructTabulation('abcdef', [
    'ab',
    'abc',
    'cd',
    'def',
    'abcd',
    'ef',
    'c',
  ])
);
// [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]
console.log(
  allConstructTabulation('skateboard', [
    'bo',
    'rd',
    'ate',
    't',
    'ska',
    'sk',
    'boar',
  ])
); // []

console.log(
  allConstructTabulation('aaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
  ])
); // []
