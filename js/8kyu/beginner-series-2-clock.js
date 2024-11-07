// ❓ DESCRIPTION
// Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight in milliseconds.
//
// Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000
//
// Input constraints:
//
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// ✅ SOLUTION
function past(h, m, s){
    return new Date(2000, 6, 20, h, m, s) - new Date(2000, 6, 20);

    // return ((h * 60 + m) * 60 + s) * 1000;
}

console.log(past(0, 1, 1));