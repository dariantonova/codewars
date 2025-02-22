// ❓ DESCRIPTION
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
 */

// ✅ SOLUTION
function capitalize(s){
    const result = [];
    for (let j = 0; j <= 1; j++) {
        const cappedStr = s.split('').map((c, i) => i % 2 === j ? c.toUpperCase() : c).join('');
        result.push(cappedStr);
    }

    return result;
}