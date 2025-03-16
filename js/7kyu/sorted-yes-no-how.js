// ❓ DESCRIPTION
/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
 */

// ✅ SOLUTION
function isSortedAndHow(array) {
    const ascSorted = [...array].sort((a, b) => a - b);
    const descSorted = [...array].sort((a, b) => b - a);
    switch (array.join()) {
        case ascSorted.join(): return "yes, ascending";
        case descSorted.join(): return "yes, descending";
        default: return 'no';
    }
}