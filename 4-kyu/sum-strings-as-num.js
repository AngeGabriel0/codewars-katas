/**
 * Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
 */

function sumStrings(a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += +a[i--];
    if (j >= 0) sum += +b[j--];
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry) result = carry + result;
  return result.replace(/^0+/, "");
}
