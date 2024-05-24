/**
 * omplete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
 */

function toCamelCase(str) {
    let words = str.split(/[-_]/);
    let transformedWords = words.map((word, i) => {
        if (i === 0) {
            return word;
        }
        else {
            let firstLetter = word[0].toUpperCase();
            let restOfWord = word.slice(1);
            return firstLetter + restOfWord;
        }
    });
    let camelCaseStr = transformedWords.join('');

    return camelCaseStr;
}