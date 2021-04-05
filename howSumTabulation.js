// m = target sum, n = array length
// Time Complexity O(m^2*n)
// Space Complexity O(m^2)
const howSumTabulation = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(howSumTabulation(7, [2, 3])); // [3,2,2]
console.log(howSumTabulation(7, [5, 3, 4, 7])); // [4,3]
console.log(howSumTabulation(7, [2, 4])); // null
console.log(howSumTabulation(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSumTabulation(300, [7, 14])); // null
