// ❓ DESCRIPTION
/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that
makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the
result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)
(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
 */

// ✅ SOLUTION
function meeting(s) {
    const friends = s.toUpperCase().split(';').map(friend => {
        const [first, last] = friend.split(':');
        return { first, last };
    });
    friends.sort((a, b) => {
        if (a.last < b.last) {
            return -1;
        }
        else if (b.last < a.last) {
            return 1;
        }
        else if (a.first < b.first) {
            return -1;
        }
        else if (b.first < a.first) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return friends.map(friend => `(${friend.last}, ${friend.first})`).join('');
}