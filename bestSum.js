// m = target sum, n = array length
// Time Complexity O(m^2 * n)
// Space Complexity O(m^2)
const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombniation = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];

      if (
        shortestCombniation === null ||
        combination.length < shortestCombniation.length
      ) {
        shortestCombniation = combination;
      }
    }
  }

  memo[targetSum] = shortestCombniation;
  return shortestCombniation;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [5, 3]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
