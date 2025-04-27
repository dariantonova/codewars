// ❓ DESCRIPTION
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

// ✅ SOLUTION
function high(x){
    const words = x.split(' ');
    const scores = words.map(word => word.split('').reduce((score, letter) => {
        return score + letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }, 0));
    const maxScore = Math.max(...scores);
    const maxScoreIndex = scores.indexOf(maxScore);
    return words[maxScoreIndex];
}