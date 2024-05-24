/**
 * Create a function

hasTwoCubeSums(n) 
which checks if a given number n can be written as the sum of two cubes in two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should be different and greater than 0.

E.g. 1729 = 9³+10³ = 1³+12³.

hasTwoCubeSums(1729); // true
hasTwoCubeSums(42);   // false
 */

function hasTwoCubeSums(n) {
  let max = Math.floor(Math.cbrt(n));
  let pairs = new Set();

  for (let i = 1; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      if (i ** 3 + j ** 3 === n) {
        pairs.add([i, j].toString());
      }
    }
  }

  return pairs.size >= 2;
}

console.log(hasTwoCubeSums(17)); // false
console.log(hasTwoCubeSums(42)); // false
console.log(hasTwoCubeSums(1729)); // true, bc 1729 = 9³+10³ = 1³+12³
console.log(hasTwoCubeSums(4104));
