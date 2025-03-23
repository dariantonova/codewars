// ❓ DESCRIPTION
/*
 Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */

// ✅ SOLUTION
function getEvenNumbers(numbersArray){
    return numbersArray.filter(n => n % 2 === 0);
}