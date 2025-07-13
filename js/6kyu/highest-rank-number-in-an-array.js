// ❓ DESCRIPTION
/*
Complete the method which returns the number which is most frequent in the given input array.
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */

// ✅ SOLUTION
function highestRank(arr){
    const counts = arr.reduce((seen, cur) => {
        if (!seen[cur]) {
            seen[cur] = 0;
        }
        seen[cur]++;
        return seen;
    }, {});
    let maxCount = 0;
    let result;
    for (const number in counts) {
        if (counts[number] >= maxCount) {
            maxCount = counts[number];
            result = number;
        }
    }
    return +result;
}