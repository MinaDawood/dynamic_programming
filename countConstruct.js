// m = target.length, n = wordBank.length
// Time Complexity O(n*m^2)
// Space Complexity O(m^2)
const countConstrcut = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstrcut(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstrcut('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstrcut('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(
  countConstrcut('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // 0
console.log(
  countConstrcut('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // 4
console.log(
  countConstrcut('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // 0
