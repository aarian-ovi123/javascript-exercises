
/*---------------------------------------------------------
Exercise 1: isPowerOfThree
---------------------------------------------------------*/

// Goal: Return a boolean that tells if a positive integer is a power of three.

/*
    Function name: isPowerOfThree
    Parameter: n
    Return true for 1, 3, 9, 27, … otherwise false
    No loops
*/

function isPowerOfThree(n) {
  // Base Case One: If n equals to 1, it is a power of three (3^0).
  if (n === 1) {
    return true;
  }
  // Base Case Two:
  // If n is less than or equal to 0, it's not a positive power of three.
  if (n <= 0) {
    return false;
  }
  // Step: If n is not divisible by 3, it's not a power of three.
  // This also covers cases where n is not an integer.
  if (n % 3 !== 0) {
    return false;
  }
  // Recursive Step: Recurse with n divided by 3.
  return isPowerOfThree(n / 3);
}

console.log(isPowerOfThree(1));   // Output Result: true
console.log(isPowerOfThree(3));   // Output Result: true
console.log(isPowerOfThree(12));  // Output Result: false
console.log(isPowerOfThree(27));  // Output Result: true

//---------------------------------------------------------
console.log("-----");
//---------------------------------------------------------

/*---------------------------------------------------------
Exercise 2: isMultipleOfThree
---------------------------------------------------------*/

// Goal: Return a boolean that tells if a number is a multiple of three.

/*
    Function name: isMultipleOfThree
    Parameter: n
    Return true if n is a multiple of three otherwise false
    No loops
*/

function isMultipleOfThree(n) {
  // This function works with the absolute value to handle any negative numbers.
  n = Math.abs(n);

  // Base Case One: If n equals to 0, it is a multiple of three.
  if (n === 0) {
    return true;
  }
  // Base Case Two: If n is less than 3 (and not 0), it is not a multiple of three.
  // Using "less than 3" instead of "1 or 2" also stops decimals like 4.5 from recursing forever.
  if (n < 3) {
    return false;
  }
  // Recursive Step: Recurse with n minus 3.
  return isMultipleOfThree(n - 3);
}

console.log(isMultipleOfThree(0)); // Output Result: true
console.log(isMultipleOfThree(3)); // Output Result: true
console.log(isMultipleOfThree(7)); // Output Result: false
console.log(isMultipleOfThree(-12)); // Output Result: true

//---------------------------------------------------------
console.log("-----");
//---------------------------------------------------------

/*---------------------------------------------------------
Exercise 3: isPowerOfTwo
---------------------------------------------------------*/

// Goal: Return a boolean that tells if a positive integer is a power of two.

/*
    Function name: isPowerOfTwo
    Parameter: n
    Return true for 1, 2, 4, 8, 16, … otherwise false
    No loops
*/

function isPowerOfTwo(n) {
  // Base Case One: If n is equal to 1, it is a power of two (2^0).
  if (n === 1) {
    return true;
  }
  // Base Case Two: 
  // If n is less than or equal to 0, it's not a positive power of two.
  if (n <= 0) {
    return false;
  }
  // Step: If n is odd (and we know it's not 1 from the check above), it's not a power of two.
  if (n % 2 !== 0) {
    return false;
  }
  // Recursive Step: Otherwise, divide n by 2 and check if the result is a power of two.
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(1)); // Output Result: true
console.log(isPowerOfTwo(2)); // Output Result: true
console.log(isPowerOfTwo(12)); // Output Result: false
console.log(isPowerOfTwo(16)); // Output Result: true

//---------------------------------------------------------
console.log("-----");
//---------------------------------------------------------

/*---------------------------------------------------------
Exercise 4: isPerfectSquare
---------------------------------------------------------*/

// Goal: Return a boolean that tells if a nonnegative integer is a perfect square.

/*
    Function name: isPerfectSquare
    Parameter: n
    Return true for 0, 1, 4, 9, 16, … otherwise false
    No loops
*/

function isPerfectSquare(n, nextOdd = 1) {
  // Base Case One: If n reaches 0, it means that we have successfully subtracted
  // all consecutive odd numbers, so the original number was a perfect square.
  if (n === 0) {
    return true;
  }
  // Base Case Two: If n becomes negative before reaching 0, it is not a perfect square number.
  if (n < 0) {
    return false;
  }
  // Recursive Step: Subtract the current odd number (nextOdd) from n,
  // and recurse with the newest value of n and the next odd number (nextOdd + 2).
  return isPerfectSquare(n - nextOdd, nextOdd + 2);
}

console.log(isPerfectSquare(0)); // Output Result: true
console.log(isPerfectSquare(1)); // Output Result: true
console.log(isPerfectSquare(8)); // Output Result: false
console.log(isPerfectSquare(16)); // Output Result: true
