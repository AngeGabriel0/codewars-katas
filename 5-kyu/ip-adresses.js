/**
 * Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
 */

function ipsBetween(start, end) {
    let startArr = start.split('.').map(num => parseInt(num));
    let endArr = end.split('.').map(num => parseInt(num));
    let diff = 0;
    for (let i = 0; i < 4; i++) {
        diff += (endArr[i] - startArr[i]) * Math.pow(256, 3 - i);
    }
    return diff;
}
