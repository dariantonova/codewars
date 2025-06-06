// ❓ DESCRIPTION
/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.
 */

// ✅ SOLUTION
function expandedForm(num) {
    return num.toString().split('')
        .map((digit, i, arr) => {
            if (digit === '0') return '';
            return digit * 10 ** (arr.length - 1 - i);
        })
        .filter(n => n)
        .join(' + ');
}