// ❓ DESCRIPTION
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed
characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 */

// ✅ SOLUTION
function encrypt(text, n) {
    if (!text || n < 1) return text;

    for (let i = 0; i < n; i++) {
        const odd = text.split('').filter((c, i) => i % 2 === 1);
        const even = text.split('').filter((c, i) => i % 2 === 0);
        text = odd.join('') + even.join('');
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n < 1) return encryptedText;

    const length = encryptedText.length;
    const oddLength = Math.floor(length / 2);

    for (let i = 0; i < n; i++) {
        const odd = encryptedText.slice(0, oddLength).split('');
        const even = encryptedText.slice(oddLength).split('');
        const resChars = [];
        for (let j = 0; j < length; j++) {
            resChars.push(j % 2 === 1 ? odd.shift() : even.shift());
        }
        encryptedText = resChars.join('');
    }

    return encryptedText;
}