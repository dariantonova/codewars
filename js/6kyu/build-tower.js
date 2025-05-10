// ❓ DESCRIPTION
/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
 */

// ✅ SOLUTION
function towerBuilder(nFloors) {
    const pyramid = [];
    for (let i = 1; i <= nFloors; i++) {
        const row = ' '.repeat(nFloors - i)
            + '*'.repeat(1 + 2 * (i - 1))
            + ' '.repeat(nFloors - i);
        pyramid.push(row);
    }
    return pyramid;
}
