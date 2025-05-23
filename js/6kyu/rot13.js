// ❓ DESCRIPTION
/*
ROT13 is a simple letter substitution cipher that replaces a letter
with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string,
they should be returned as they are. Only letters from the latin/english
alphabet should be shifted, like in the original Rot13 "implementation".
 */

// ✅ SOLUTION
function rot13(message){
    return message.replace(/([a-z])|([A-Z])/g, (letter, lower) => {
        const caseChars = lower ? 'a-z' : 'A-Z';
        const pattern = new RegExp(`[${caseChars}]`);
        const code = letter.charCodeAt(0);
        if (String.fromCharCode(code + 13).match(pattern)) {
            return String.fromCharCode(code + 13);
        }
        else {
            return String.fromCharCode(code - 13);
        }
    });
}