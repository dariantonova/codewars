// ❓ DESCRIPTION
/*
Write a method that takes one argument as name and then greets that name,
capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
 */

// ✅ SOLUTION
var greet = function(name) {
    const capName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${capName}!`
};