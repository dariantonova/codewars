// ❓ DESCRIPTION
/*
The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 */

// ✅ SOLUTION
function count(string) {
    return string.split('').reduce((count, char) => {
        if (!count[char]) {
            count[char] = 1;
        }
        else {
            count[char]++;
        }
        return count;
    }, {});
}