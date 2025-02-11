// ❓ DESCRIPTION
/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while
leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

// ✅ SOLUTION
function sortArray(array) {
    const oddNumbers = [];
    const positions = [];
    array.forEach((n, i) => {
        if (Math.abs(n % 2) === 1) {
            oddNumbers.push(n);
            positions.push(i);
        }
    });
    oddNumbers.sort((a, b) => a - b);
    oddNumbers.forEach((n, i) => {
        array.splice(positions[i], 1, n);
    });
    return array;
}