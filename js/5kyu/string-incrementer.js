// ❓ DESCRIPTION
/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
 */

// ✅ SOLUTION
function incrementString (string) {
    const number = string.match(/\d+$/)?.[0];
    if (!number) {
        return string + 1;
    }
    const incrementedNumber = (parseInt(number) + 1).toString().padStart(number.length, '0');
    return string.slice(0, -number.length) + incrementedNumber;
}