// ❓ DESCRIPTION
/*
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: the result should be rounded down to the nearest integer.
 */

// ✅ SOLUTION
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const sqrSum = [...arguments].reduce((sum, n) => sum + n*n, 0);
    return Math.floor(Math.sqrt(sqrSum) / 2);
}