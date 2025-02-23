// ❓ DESCRIPTION
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

// ✅ SOLUTION
function accum(s) {
    return s.split('').map((c, i) => {
        const rep = c.repeat(i + 1);
        return rep.at(0).toUpperCase() + rep.slice(1).toLowerCase();
    })
        .join('-');
}