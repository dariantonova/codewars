// ❓ DESCRIPTION
/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z.
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
 */

// ✅ SOLUTION
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }

    const a1Lengths = a1.map(s => s.length);
    const a2Lengths = a2.map(s => s.length);

    const a1Min = Math.min(...a1Lengths);
    const a1Max = Math.max(...a1Lengths);

    const a2Min = Math.min(...a2Lengths);
    const a2Max = Math.max(...a2Lengths);

    const dif1 = a2Max - a1Min;
    const dif2 = a1Max - a2Min;

    return dif1 > dif2 ? dif1 : dif2;
}