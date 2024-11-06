// ❓ DESCRIPTION
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398

// ✅ SOLUTION
function sum (numbers) {
    return numbers.reduce((sum, a) => sum + a, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([-2.398]));