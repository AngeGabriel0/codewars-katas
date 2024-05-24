/**
 * Build a function that returns an array of integers from n to 1 where n>0.
 */

const reverseSeq = n => {
    return [...Array(n).keys()].map(i => n - i);
  };