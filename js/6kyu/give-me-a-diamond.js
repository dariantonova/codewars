// ❓ DESCRIPTION
/*
You need to return a string that looks like a diamond shape when printed on the screen,
using asterisk (*) characters. Trailing spaces should be removed, and every line must be
terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible
to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
 */

// ✅ SOLUTION
function diamond(n){
    if (n % 2 === 0 || n < 0) {
        return null;
    }
    const rows = [];
    const middle = Math.ceil(n / 2);
    for (let i = 1; i <= n; i++) {
        const offset = Math.abs(middle - i);
        const row = ' '.repeat(offset) + '*'.repeat(n - offset * 2);
        rows.push(row);
    }
    return rows.map(r => r + '\n').join('');
}