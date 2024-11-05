// ❓ DESCRIPTION
// Complete the method that takes a boolean value and return
// a "Yes" string for true, or a "No" string for false.

// ✅ SOLUTION
function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

const res1 = boolToWord(true);
const res2 = boolToWord(false);
console.log(res1);
console.log(res2);