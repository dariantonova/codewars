// ❓ DESCRIPTION
/*
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
 */

// ✅ SOLUTION
function replace(s){
    return s.replace(/[aiueo]/gi, '!');
}