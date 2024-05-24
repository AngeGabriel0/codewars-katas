/**
 * 
 * You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

Task:
Return an array or a tuple or a string depending on the language (see "Sample Tests") with

the smallest number you got
the index i of the digit d you took, i as small as possible
the index j (as small as possible) where you insert this digit d to have the smallest number. */

function smallest(n) {
    let nStr = n.toString();
    let min = n;
    let minI = 0;
    let minJ = 0;
    for (let i = 0; i < nStr.length; i++) {
        for (let j = 0; j < nStr.length; j++) {
            let nArr = nStr.split('');
            let digit = nArr.splice(i, 1)[0];
            nArr.splice(j, 0, digit);
            let num = parseInt(nArr.join(''));
            if (num < min) {
                min = num;
                minI = i;
                minJ = j;
            }
        }
    }
    return [min, minI, minJ];
}