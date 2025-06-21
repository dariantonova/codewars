// ❓ DESCRIPTION
/*
Write a method (or function, depending on the language) that converts a string to camelCase,
that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
 */

// ✅ SOLUTION
String.prototype.camelCase=function(){
    return this
        .split(' ')
        .map(word => word.length > 1
            ? word[0].toUpperCase() + word.slice(1).toLowerCase()
            : word.toUpperCase())
        .join('');
}