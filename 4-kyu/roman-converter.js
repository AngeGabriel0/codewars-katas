/**
 * Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four"). */

class RomanNumerals {
    static toRoman(num) {
        let roman = '';
        const romanNumList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const decimalNumList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        for (let i = 0; i < decimalNumList.length; i++) {
            while (num >= decimalNumList[i]) {
            roman += romanNumList[i];
            num -= decimalNumList[i];
            }
        }
        return roman;
    }
    

    static fromRoman(str) {
        const romanNumList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const decimalNumList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let num = 0;
        for (let i = 0; i < romanNumList.length; i++) {
            while (str.indexOf(romanNumList[i]) === 0) {
            num += decimalNumList[i];
            str = str.replace(romanNumList[i], '');
            }
        }
        return num;
    }
  }