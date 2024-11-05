// ❓ DESCRIPTION
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ✅ SOLUTION
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('world'));
console.log(reverseString('word'));