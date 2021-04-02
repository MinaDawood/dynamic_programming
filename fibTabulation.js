// Time Complexity O(n)
// Space Complexity O(n)
const fibTabulation = n => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fibTabulation(6)); // 8
console.log(fibTabulation(7)); // 13
console.log(fibTabulation(8)); // 21
console.log(fibTabulation(50)); // 12586269025
