
/*
CHALLENGE 18: validatePassword(password)

Understand:
  Input: a password as a string.
  Output: "Valid password" if it meets all the rules,
          otherwise "Invalid password".

Rules:
  - At least 8 characters.
  - Contains an uppercase letter.
  - Contains a lowercase letter.
  - Contains a digit.
  - Contains a special character from !@#$%^&*.
  - Contains no spaces.

Examples:
  "Hello123!"  -> "Valid password"
  "Ab1!"       -> "Invalid password"
  "helloworld" -> "Invalid password"

Plan:
  1. Reject inputs that are not strings or are too short.
  2. Create variables to track each requirement.
  3. Loop through every character in the password.
  4. Check for uppercase, lowercase, digit, special character,
     and spaces.
  5. If every requirement is satisfied, return "Valid password".
  6. Otherwise, return "Invalid password".
*/

function validatePassword(password) {
    if (typeof password !== "string" || password.length < 8) {
        return "Invalid password";
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false;
    let hasSpace = false;

    for (let i = 0; i < password.length; i++) {
        const character = password[i];

        if (character >= "A" && character <= "Z") {
            hasUppercase = true;
        }

        if (character >= "a" && character <= "z") {
            hasLowercase = true;
        }

        if (character >= "0" && character <= "9") {
            hasDigit = true;
        }

        if ("!@#$%^&*".includes(character)) {
            hasSpecial = true;
        }

        if (character === " ") {
            hasSpace = true;
        }
    }

    if (
        hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecial &&
        !hasSpace
    ) {
        return "Valid password";
    } else {
        return "Invalid password";
    }
}

console.log("CHALLENGE 18: PASSWORD VALIDATOR");
console.log(validatePassword("Hello123!"));  // Valid password
console.log(validatePassword("Ab1!"));       // Invalid password
console.log(validatePassword("helloworld")); // Invalid password
console.log(validatePassword("Hello 123!")); // Invalid password


/*
CHALLENGE 19: romanNumeral(number)

Understand:
  Input: an integer from 1 to 3999.
  Output: the equivalent Roman numeral as a string.

Examples:
  1    -> "I"
  4    -> "IV"
  9    -> "IX"
  58   -> "LVIII"
  1994 -> "MCMXCIV"
  0    -> "Invalid number"

Plan:
  1. Reject numbers that are not integers or are outside
     the range from 1 to 3999.
  2. Store Roman numeral values from largest to smallest.
  3. Store their corresponding Roman numeral symbols.
  4. Loop through the values.
  5. While the number is greater than or equal to a value,
     add its symbol to the result and subtract its value.
  6. Return the completed Roman numeral.
*/

function romanNumeral(number) {
    if (
        !Number.isInteger(number) ||
        number < 1 ||
        number > 3999
    ) {
        return "Invalid number";
    }

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (number >= values[i]) {
            result += symbols[i];
            number = number - values[i];
        }
    }

    return result;
}

console.log("\nCHALLENGE 19: ROMAN NUMERAL CONVERTER");
console.log(romanNumeral(1));    // I
console.log(romanNumeral(4));    // IV
console.log(romanNumeral(9));    // IX
console.log(romanNumeral(58));   // LVIII
console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(0));    // Invalid number
console.log(romanNumeral(4000)); // Invalid number


/*
CHALLENGE 20: nationalIdCheck(nationalId)

Understand:
  Input: a national ID as a string.
  Output: "Valid national ID format" if it satisfies
          the format rules below, otherwise
          "Invalid national ID".

Assumed format rules for this example:
  - Exactly 16 digits.
  - The first digit must be 1.
  - Positions 2 to 5 contain a year from 1900 to 2026.
  - The sixth digit must be 7 or 8.

Examples:
  "1200071234567890" -> "Valid national ID format"
  "12345"            -> "Invalid national ID"
  "1200A71234567890" -> "Invalid national ID"
  "2200071234567890" -> "Invalid national ID"

Plan:
  1. Reject inputs that are not strings.
  2. Check that the ID contains exactly 16 digits.
  3. Check that the first digit is 1.
  4. Extract the year from positions 2 to 5.
  5. Check that the year is within the assumed range.
  6. Check that the sixth digit is 7 or 8.
  7. Return the appropriate result.
*/

function nationalIdCheck(nationalId) {
    if (typeof nationalId !== "string") {
        return "Invalid national ID";
    }

    if (!/^\d{16}$/.test(nationalId)) {
        return "Invalid national ID";
    }

    if (nationalId[0] !== "1") {
        return "Invalid national ID";
    }

    const year = Number(nationalId.slice(1, 5));

    if (year < 1900 || year > 2026) {
        return "Invalid national ID";
    }

    if (nationalId[5] !== "7" && nationalId[5] !== "8") {
        return "Invalid national ID";
    }

    return "Valid national ID format";
}

console.log("\nCHALLENGE 20: NATIONAL ID CHECK");
console.log(nationalIdCheck("1200071234567890"));
// Valid national ID format

console.log(nationalIdCheck("12345"));
// Invalid national ID

console.log(nationalIdCheck("1200A71234567890"));
// Invalid national ID

console.log(nationalIdCheck("2200071234567890"));
// Invalid national ID

console.log(nationalIdCheck("1200061234567890"));
// Invalid national ID


/*
SOLUTION COMPARISONS

1. Challenge 18: validatePassword
   Checking several password requirements was challenging.
   I used Boolean variables to track each requirement
   and a loop to examine every character.

2. Challenge 19: romanNumeral
   Converting numbers into Roman numerals was challenging.
   I stored values and symbols in matching arrays and used
   a loop to subtract the largest possible values first.

3. Challenge 20: nationalIdCheck
   Validating the ID format was challenging.
   I used string checks, a regular expression, and conditions
   to verify the required format and digit positions.

Note:
   The national ID rules above are assumptions for this example.
   Check the actual workshop instructions before submitting.
*/
