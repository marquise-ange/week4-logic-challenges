/*
CHALLENGE 13: sumTo(n)

Understand:
  Input: a number n.
  Output: the sum of all numbers from 1 to n.

Examples:
  5 -> 15
  3 -> 6
  0 -> 0

Plan:
  1. Start total at zero.
  2. Loop from 1 to n.
  3. Add each number to total.
  4. Return total.
*/

function sumTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

console.log("CHALLENGE 13: SUM TO N");
console.log(sumTo(5)); // 15
console.log(sumTo(3)); // 6
console.log(sumTo(0)); // 0


/*
Compare the loop with the formula:
  Sum = n * (n + 1) / 2
*/

function sumToFormula(n) {
    return n * (n + 1) / 2;
}

console.log("CHALLENGE 13: FORMULA");
console.log(sumToFormula(5)); // 15
console.log(sumToFormula(3)); // 6
console.log(sumToFormula(0)); // 0



/*
CHALLENGE 14: isPrime(n)


Understand:
  Input: an integer n.
  Output: true if n is prime, otherwise false.

Examples:
  7 -> true
  10 -> false
  1 -> false

Plan:
  1. If n is less than 2, return false.
  2. Check divisors starting from 2.
  3. Stop at the square root of n.
  4. If a divisor divides n exactly, return false.
  5. Otherwise, return true.
*/

function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("\nCHALLENGE 14: PRIME NUMBER");
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(1));   // false





/*
CHALLENGE 15: printPyramid(rows)

Understand:
  Input: the number of rows.
  Output: a centered pyramid of stars.

Examples:
  4 -> a pyramid with four rows
  1 -> *
  0 -> no output

Plan:
  1. Loop through each row.
  2. Calculate the leading spaces.
  3. Calculate the stars: 2 * row - 1.
  4. Use a loop to build spaces.
  5. Use another loop to build stars.
  6. Print the completed row.
*/

function printPyramid(rows) {
    if (!Number.isInteger(rows) || rows <= 0) {
        return;
    }

    for (let row = 1; row <= rows; row++) {
        let line = "";

        for (let space = 1; space <= rows - row; space++) {
            line += " ";
        }

        for (let star = 1; star <= 2 * row - 1; star++) {
            line += "*";
        }

        console.log(line);
    }
}

console.log("\nCHALLENGE 15: FOUR ROWS");
printPyramid(4);




/*
CHALLENGE 16: fibonacci(n)

Understand:
  Input: the number of Fibonacci numbers to generate.
  Output: a string containing the first n numbers.

Examples:
  8 -> "0, 1, 1, 2, 3, 5, 8, 13"
  3 -> "0, 1, 1"
  0 -> ""

Plan:
  1. If n is zero or negative, return an empty string.
  2. Start with first = 0 and second = 1.
  3. Loop n times.
  4. Add the current first number to the result.
  5. Calculate the next number.
  6. Move first and second forward.
  7. Return the result.
*/

function fibonacci(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "";
    }

    let first = 0;
    let second = 1;
    let result = "";

    for (let i = 0; i < n; i++) {
        if (i > 0) {
            result += ", ";
        }

        result += first;

        const next = first + second;
        first = second;
        second = next;
    }

    return result;
}

console.log("\nCHALLENGE 16: FIBONACCI");
console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(3)); // 0, 1, 1
console.log(fibonacci(0)); // ""


/*
CHALLENGE 17: guessingGameSimulator(secret)


Understand:
  Input: a secret integer between 1 and 100.
  Output: the number of guesses required.
  Print every guess.

Examples:
  50 -> 1 guess
  1 -> at most 7 guesses
  100 -> at most 7 guesses

Plan:
  1. Check that the secret is between 1 and 100.
  2. Start with low = 1 and high = 100.
  3. Guess the middle of the remaining range.
  4. Count and print the guess.
  5. If correct, return the number of guesses.
  6. If too low, move low above the guess.
  7. If too high, move high below the guess.
  8. Repeat until the secret is found.
*/

function guessingGameSimulator(secret) {
    if (
        !Number.isInteger(secret) ||
        secret < 1 ||
        secret > 100
    ) {
        return "Invalid secret";
    }

    let low = 1;
    let high = 100;
    let guesses = 0;

    while (low <= high) {
        const guess = Math.floor((low + high) / 2);
        guesses++;

        console.log("Guess " + guesses + ": " + guess);

        if (guess === secret) {
            return guesses;
        } else if (guess < secret) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }

    return guesses;
}

console.log("\nCHALLENGE 17: GUESSING GAME");

console.log(
    "Secret 50, guesses:",
    guessingGameSimulator(50)
);

console.log(
    "Secret 1, guesses:",
    guessingGameSimulator(1)
);

console.log(
    "Secret 100, guesses:",
    guessingGameSimulator(100)
);


/*

SOLUTION COMPARISONS


1. Challenge 13:
   The loop adds numbers one by one, while the formula
   calculates the sum directly. The formula is faster,
   but the loop helps me understand the process.

2. Challenge 17:
   Binary search checks the middle of the remaining
   range. Checking numbers one by one is simpler to
   write, but binary search is much faster.
*/
