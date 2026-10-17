/*
CHALLENGE 6: reverseString(str)

Understand:
  Input: a string.
  Output: the string written backward.

Examples:
  "hello" -> "olleh"
  "JavaScript" -> "tpircSavaJ"
  "" -> ""

Plan:
  1. Create an empty result string.
  2. Start from the last character.
  3. Move backward through the string.
  4. Add each character to the result.
  5. Return the result.
*/

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log("CHALLENGE 6: REVERSE STRING");
console.log(reverseString("hello"));      // olleh
console.log(reverseString("JavaScript")); // tpircSavaJ
console.log(reverseString(""));           // ""



/*
CHALLENGE 7: countChar(str, char)

Understand:
  Input: a string and a character.
  Output: the number of times that character appears,
  ignoring uppercase and lowercase differences.

Examples:
  "Banana", "a" -> 3
  "Hello", "L" -> 2
  "hello", "z" -> 0

Plan:
  1. Convert both inputs to lowercase.
  2. Start a counter at zero.
  3. Loop through the string.
  4. If a character matches, increase the counter.
  5. Return the counter.
*/

function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log("\nCHALLENGE 7: COUNT CHARACTER");
console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L"));  // 2
console.log(countChar("hello", "z"));  // 0

/*
CHALLENGE 8: isPalindrome(str)

Understand:
  Input: a string.
  Output: true if it reads the same forward and
  backward, otherwise false.

  Ignore spaces, punctuation, and letter case.

Examples:
  "Never odd or even" -> true
  "Hello" -> false
  "" -> true

Plan:
  1. Create an empty cleaned string.
  2. Convert the input to lowercase.
  3. Keep only letters and numbers.
  4. Compare characters from both ends.
  5. If a pair differs, return false.
  6. If all pairs match, return true.
*/

function isPalindrome(str) {
  let cleaned = "";
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57)
    ) {
      cleaned += str[i];
    }
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log("\nCHALLENGE 8: PALINDROME");
console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello"));             // false
console.log(isPalindrome(""));                  // true




/*
CHALLENGE 9: titleCase(str)


Understand:
  Input: a sentence.
  Output: each word starts with an uppercase letter,
  and its remaining letters are lowercase.

Examples:
  "welcome to kigali tech hub"
  -> "Welcome To Kigali Tech Hub"

  "hello WORLD" -> "Hello World"
  "" -> ""

Plan:
  1. Create an empty result string.
  2. Track whether the next character starts a word.
  3. Capitalize the first letter of each word.
  4. Convert other letters to lowercase.
  5. Return the result.
*/

function titleCase(str) {
  let result = "";
  let newWord = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === " ") {
      result += char;
      newWord = true;
    } else if (newWord) {
      result += char.toUpperCase();
      newWord = false;
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}

console.log("\nCHALLENGE 9: TITLE CASE");
console.log(titleCase("welcome to kigali tech hub"));
// Welcome To Kigali Tech Hub

console.log(titleCase("hello WORLD")); // Hello World
console.log(titleCase(""));            // ""



/*
CHALLENGE 10: maskPhone(phone)

Understand:
  Input: a phone number as a string.
  Output: a masked phone number or "Invalid".

Rules:
  The phone number must have 10 digits and start with 07.

Examples:
  "0788123456" -> "078****456"
  "078123" -> "Invalid"
  "0888123456" -> "Invalid"

Plan:
  1. Check that the length is exactly 10.
  2. Check that the number starts with "07".
  3. Check that every character is a digit.
  4. Keep the first three digits.
  5. Add four asterisks and the final three digits.
*/

function maskPhone(phone) {
  if (phone.length !== 10) {
    return "Invalid";
  }

  if (phone[0] !== "0" || phone[1] !== "7") {
    return "Invalid";
  }

  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < "0" || phone[i] > "9") {
      return "Invalid";
    }
  }

  return phone.substring(0, 3) + "****" + phone.substring(7, 10);
}

console.log("\nCHALLENGE 10: MASK PHONE");
console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("078123"));     // Invalid
console.log(maskPhone("0888123456")); // Invalid




/*
CHALLENGE 11: longestWord(sentence)

Understand:
  Input: a sentence.
  Output: its longest word.

If two words have equal lengths, return the first.

Examples:
  "I love JavaScript" -> "JavaScript"
  "red blue green" -> "green"
  "" -> ""

Plan:
  1. Track the current word.
  2. Track the longest word found.
  3. Loop through the sentence.
  4. Add characters until a space appears.
  5. Compare the current word with the longest word.
  6. Check the final word after the loop.
  7. Return the longest word.
*/

function longestWord(sentence) {
  let currentWord = "";
  let longest = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      currentWord += sentence[i];
    } else {
      if (currentWord.length > longest.length) {
        longest = currentWord;
      }

      currentWord = "";
    }
  }

  if (currentWord.length > longest.length) {
    longest = currentWord;
  }

  return longest;
}

console.log("\nCHALLENGE 11: LONGEST WORD");
console.log(longestWord("I love JavaScript")); // JavaScript
console.log(longestWord("red blue green"));    // green
console.log(longestWord(""));                  // ""




/*
CHALLENGE 12: compress(str)


Understand:
  Input: a string.
  Output: each character followed by its consecutive
  repetition count.

Examples:
  "aaabccdddd" -> "a3b1c2d4"
  "abcd" -> "a1b1c1d1"
  "" -> ""

Plan:
  1. If the string is empty, return "".
  2. Start counting the first character.
  3. Loop through the remaining characters.
  4. If the current character matches the previous
     character, increase the count.
  5. Otherwise, add the previous character and count
     to the result, then reset the count.
  6. Add the final character and its count.
  7. Return the result.
*/

function compress(str) {
  if (str.length === 0) {
    return "";
  }

  let result = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  result += str[str.length - 1] + count;

  return result;
}

console.log("\nCHALLENGE 12: STRING COMPRESSION");
console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("abcd"));       // a1b1c1d1
console.log(compress(""));           // ""


/*
SOLUTION COMPARISONS

1. Challenge 8:
   I used two pointers to compare characters from both
   ends. This avoids creating a reversed copy.

2. Challenge 12:
   I used a loop and counter to count consecutive
   characters without using array methods.
*/
