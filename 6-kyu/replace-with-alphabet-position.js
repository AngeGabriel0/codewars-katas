/**
 * Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
 */

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .split('')
        .filter(char => /[A-Z]/.test(char))
        .map(char => char.charCodeAt(0) - 64)
        .join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))