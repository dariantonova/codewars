// ❓ DESCRIPTION
/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace,
while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a
part of the word in this kata.
 */

// ✅ SOLUTION
function reverse(str){
    return str
        .trim()
        .split(' ')
        .filter(w => w !== '')
        .map((w, i) => i % 2 === 1 ? [...w].reverse().join('') : w)
        .join(' ');
}