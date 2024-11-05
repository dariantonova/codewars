// ❓ DESCRIPTION
// Write a function which calculates the average of the numbers in a given array.
//
// Note: Empty arrays should return 0.

// ✅ SOLUTION
function findAverage(array) {
    if (array.length === 0) return 0;

    return array.reduce((sum, item) => sum + item, 0) / array.length;
}

console.log(findAverage([2, 54, 2, 4, 5])); // 13.4