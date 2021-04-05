// m = target.length, n = wordBank.length
// Time Complexity O(n*m^2)
// Space Complexity O(m)
const canConstructTabulation = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(
  canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
); // true
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
); // false
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
); // true
console.log(
  canConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // false
