// m = target.length, n = wordBank.length
// Time Complexity O(n*m^2)
// Space Complexity O(m)
const canConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
};

console.log(
  canConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl'])
); // 2
console.log(
  canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
); // 1
console.log(
  canConstructTabulation('skateboard', [
    'bo',
    'rd',
    'ate',
    't',
    'ska',
    'sk',
    'boar',
  ])
); // 0
console.log(
  canConstructTabulation('enterapotentpot', [
    'a',
    'p',
    'ent',
    'enter',
    'ot',
    'o',
    't',
  ])
); // 4
console.log(
  canConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // 0
