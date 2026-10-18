# Week 4 Logic Challenges

## About the Project

This repository contains my solutions to the Week 4 JavaScript Logic Challenges. The challenges helped me practise problem-solving, conditional statements, loops, functions, strings, arrays, and input validation.

## Challenges Solved

### Round 1: Numbers and Conditions
- Challenge 1: `isLeapYear()` — checks whether a year is a leap year.
- Challenge 2: `getBMICategory()` — calculates BMI and returns the corresponding category.
- Challenge 3: `motoFare()` — calculates a motorcycle taxi fare based on distance.
- Challenge 4: `convertSeconds()` — converts seconds into hours, minutes, and seconds.
- Challenge 5: `changeMaker()` — calculates the notes and coins needed for an amount.

### Round 2: Strings and Loops
- Challenge 6: `reverseString()`
- Challenge 7: `countChar()`
- Challenge 8: `isPalindrome()`
- Challenge 9: `titleCase()`
- Challenge 10: `maskPhone()`
- Challenge 11: `longestWord()`
- Challenge 12: `compress()`

### Round 3: Algorithms and Problem-Solving
- Challenge 13: `sumTo()`
- Challenge 14: `isPrime()`
- Challenge 15: `printPyramid()`
- Challenge 16: `fibonacci()`
- Challenge 17: `guessingGameSimulator()`

### Boss Round
- Challenge 18: `validatePassword()` — checks password requirements.
- Challenge 19: `romanNumeral()` — converts numbers into Roman numerals.
- Challenge 20: `nationalIdCheck()` — checks an ID against the specified format rules.

## Total Points

**Total points earned: [ENTER YOUR ACTUAL SCORE]**

## The Bug That Took Me the Longest to Find

The bug that took me the longest to find was in **Challenge 19: `romanNumeral()`**, which converts numbers into Roman numerals.

At first, I thought I could convert a number by repeatedly using the basic Roman numeral symbols. However, I discovered that some numbers require special combinations. For example, 4 must be represented as `IV` instead of `IIII`, and 9 must be represented as `IX` instead of `VIIII`.

To solve this problem, I arranged the Roman numeral values from largest to smallest and included special values such as 900, 400, 90, 40, 9, and 4. I then used a loop to select the largest possible value, add its corresponding symbol to the result, and subtract that value from the remaining number.

I tested the function using different inputs, including 4, 9, 58, and 1994, as well as invalid inputs such as 0 and 4000. These tests helped me check whether the function returned the expected results.

This challenge taught me the importance of testing edge cases, understanding special rules, and breaking a complex problem into smaller steps before writing the code.


### 1. Challenge 5: `changeMaker()` — Round 1

**Difficulty:** Calculating the correct notes and coins.

This challenge required me to calculate the fewest available notes and coins needed to make a particular amount of money. I had to arrange the denominations from largest to smallest and use a loop to calculate how many of each denomination were needed.

The difficult part was updating the remaining amount correctly after each calculation. I learned how loops, division, and the remainder operator work together to solve a real-world problem.

### 2. Challenge 4: `convertSeconds()` — Round 1

**Difficulty:** Converting seconds into hours, minutes, and seconds.

This challenge required me to convert a total number of seconds into a properly formatted time. I used division and the remainder operator to calculate the hours, minutes, and remaining seconds.

One important detail was adding a leading zero to single-digit minutes and seconds, such as displaying `03m` instead of `3m`. This helped me understand mathematical operations and string formatting.

### 3. Challenge 8: `isPalindrome()` — Round 2

**Difficulty:** Comparing characters correctly.

This challenge required me to determine whether a word or phrase reads the same forwards and backwards. I had to consider uppercase letters, lowercase letters, spaces, and punctuation.

I learned that normalizing the text before comparing characters makes the solution more reliable. This challenge also helped me understand how to compare characters from opposite ends of a string.

### 4. Challenge 12: `compress()` — Round 2

**Difficulty:** Counting consecutive repeated characters.

This challenge required me to identify consecutive repeated characters and represent them using a compressed format.

The difficult part was knowing when one group of repeated characters ended and another began. I also needed to make sure the final group was processed after the loop finished.

This challenge helped me understand loops, string manipulation, and the importance of checking the last item in a sequence.

### 5. Challenge 14: `isPrime()` — Round 3

**Difficulty:** Checking whether a number is prime.

This challenge required me to determine whether a number has any divisors other than 1 and itself. I needed to check divisibility while handling special cases such as 0, 1, and negative numbers.

I learned that small edge cases are important because a function can appear correct for ordinary numbers but still produce incorrect results for special inputs.

### 6. Challenge 16: `fibonacci()` — Round 3

**Difficulty:** Updating values in the correct order.

This challenge required me to generate Fibonacci numbers, where each new number is calculated by adding the previous two numbers.

The difficult part was updating the variables without losing the values needed for the next calculation. This helped me understand how variable assignment, loops, and sequences work together.

## What I Learned

Working on these challenges helped me improve my JavaScript problem-solving skills. I learned to break problems into smaller steps, write pseudocode before coding, test different inputs, and pay attention to edge cases.

I also learned that debugging is an important part of programming because testing and correcting mistakes helps me understand how my code works.


## Solution Comparisons: Readability vs. Cleverness

### Challenge 1: `isLeapYear()`

One solution uses `if/else` statements to check the leap-year rules in order. Another solution could combine the rules into one Boolean expression.

The `if/else` version is easier for a beginner to read and understand, while the Boolean expression is shorter but can be harder to understand at first.

### Challenge 5: `changeMaker()`

One solution uses a loop to process denominations from largest to smallest. Another solution could calculate each denomination separately using repeated division and remainder operations.

The loop avoids repeating similar code and makes it easier to change the denomination list. The separate calculations may be straightforward for a fixed list but become repetitive.

## What I Learned

- How to break problems into pseudocode before writing JavaScript.
- How to use conditions and loops to solve problems.
- How to test normal inputs and edge cases.
- How to compare solutions based on readability and simplicity.
- How to use Git and GitHub to manage and share my work.


