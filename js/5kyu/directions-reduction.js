// ❓ DESCRIPTION
/*
Write a function dirReduc which will take an array of strings and returns an array of strings with
the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
 */

// ✅ SOLUTION
function dirReduc(arr){
    const arr2 = arr.map(dir => {
        switch (dir) {
            case 'NORTH': return 1;
            case 'SOUTH': return -1;
            case 'WEST': return 2;
            case 'EAST': return -2;
        }
    })
    let wasReduced = true;
    while (wasReduced) {
        wasReduced = false;
        for (let i = 1; i < arr2.length; i++) {
            if (arr2[i - 1] + arr2[i] === 0) {
                arr.splice(i - 1, 2);
                arr2.splice(i - 1, 2);
                wasReduced = true;
            }
        }
    }
    return arr;
}