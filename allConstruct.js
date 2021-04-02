// m = target.length, n = wordBank.length
// Time Complexity O(n^m)
// Space Complexity O(m)

const allConstruts = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruts(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruts('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [
//   ['purp', 'le']
//   ['p', 'ur', 'p', 'le']
// ]

console.log(
  allConstruts('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
// [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]
console.log(
  allConstruts('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // []

console.log(
  allConstruts('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
  ])
); // []
