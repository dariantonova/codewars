// ❓ DESCRIPTION
// Timmy & Sarah think they are in love, but around where they live, they will
// only know once they pick a flower each. If one of the flowers has an even
// number of petals and the other has an odd number of petals it means they
// are in love.
//
// Write a function that will take the number of petals of each flower and
// return true if they are in love and false if they aren't.

// ✅ SOLUTION
function lovefunc(flower1, flower2){
    // moment of truth
    return flower1 % 2 + flower2 % 2 === 1;
}

console.log(lovefunc(6, 8));
console.log(lovefunc(5, 7));
console.log(lovefunc(5, 8));