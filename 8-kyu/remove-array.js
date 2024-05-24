/**
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
 */

function removeEveryOther(arr){
    return arr.filter((_, i) => i % 2 === 0);
    // _, => _ is a placeholder for the first argument of the callback function, which is the element itself
}