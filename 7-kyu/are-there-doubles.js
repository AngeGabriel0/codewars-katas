/**
 * Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.
 */

function doubleCheck(str){
    return /(.)\1/i.test(str);
}

console.log(doubleCheck('abca') === false);
console.log(doubleCheck('aabc') === true);
console.log(doubleCheck('a 11 c') === true);
console.log(doubleCheck('a') === false);