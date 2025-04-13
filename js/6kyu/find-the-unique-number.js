// ❓ DESCRIPTION
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
 */

// ✅ SOLUTION
function findUniq(arr) {
    const uniqueNums = [...new Set(arr)];
    return arr.slice(0, 3).filter(n => n === uniqueNums[0]).length > 1
        ? uniqueNums[1] : uniqueNums[0];
}