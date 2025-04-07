// ❓ DESCRIPTION
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

// ✅ SOLUTION
function evaluate(l, op, r) {
    return op === '+' ? l + r
        : op === '-' ? l - r
            : op === '*' ? l * r
                : op === '/' ? Math.trunc(l / r)
                    : null;
}

function zero(rest) {
    return rest ? evaluate(0, ...rest) : 0;
}
function one(rest) {
    return rest ? evaluate(1, ...rest) : 1;
}
function two(rest) {
    return rest ? evaluate(2, ...rest) : 2;
}
function three(rest) {
    return rest ? evaluate(3, ...rest) : 3;
}
function four(rest) {
    return rest ? evaluate(4, ...rest) : 4;
}
function five(rest) {
    return rest ? evaluate(5, ...rest) : 5;
}
function six(rest) {
    return rest ? evaluate(6, ...rest) : 6;
}
function seven(rest) {
    return rest ? evaluate(7, ...rest) : 7;
}
function eight(rest) {
    return rest ? evaluate(8, ...rest) : 8;
}
function nine(rest) {
    return rest ? evaluate(9, ...rest) : 9;
}

function plus(rightOp) {
    return ['+', rightOp];
}
function minus(rightOp) {
    return ['-', rightOp];
}
function times(rightOp) {
    return ['*', rightOp];
}
function dividedBy(rightOp) {
    return ['/', rightOp];
}