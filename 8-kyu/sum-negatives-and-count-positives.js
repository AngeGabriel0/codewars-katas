/**
 * Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
 */

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }

    let count = 0;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count++;
        } else {
            sum += input[i];
        }
    }

    return [count, sum];
}
