// ❓ DESCRIPTION
/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
 */

// ✅ SOLUTION
function cleanString(s) {
    const letters = [];
    for (const char of s) {
        if (char === '#') {
            letters.pop();
        }
        else {
            letters.push(char);
        }
    }
    return letters.join('');
}