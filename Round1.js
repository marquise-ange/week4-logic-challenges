
/*
ROUND 1: NUMBERS & CONDITIONS

CHALLENGE 1: isLeapYear(year)
Understand:
  Input: a year.
  Output: true if it is a leap year, otherwise false.

Examples:
  2024 -> true
  1900 -> false
  2000 -> true

Plan:
  1. If divisible by 400, return true.
  2. Otherwise, if divisible by 100, return false.
  3. Otherwise, if divisible by 4, return true.
  4. Otherwise, return false.
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("CHALLENGE 1: LEAP YEAR");
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true


/*
CHALLENGE 2: getBMICategory(weightKg, heightM)

Understand:
  Input: weight in kilograms and height in metres.
  Output: the BMI category.

Examples:
  50 kg, 1.6 m -> Normal
  90 kg, 1.7 m -> Obese
  70 kg, 0 m -> Invalid

Plan:
  1. Reject height that is zero or negative.
  2. Reject negative weight.
  3. Calculate BMI = weight / height squared.
  4. Use if/else to determine the category.
*/

function getBMICategory(weightKg, heightM) {
  if (heightM <= 0 || weightKg < 0) {
    return "Invalid";
  }

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log("\nCHALLENGE 2: BMI CATEGORY");
console.log(getBMICategory(50, 1.6));  // Normal
console.log(getBMICategory(90, 1.7));  // Obese
console.log(getBMICategory(70, 0));    // Invalid


/*
CHALLENGE 3: motoFare(km)

Understand:
  Input: distance travelled in kilometres.
  Output: fare in RWF.

Examples:
  1 km -> 300 RWF
  3 km -> 407 RWF
  4.5 km -> 621 RWF

Plan:
  1. If distance is zero or negative, return 0.
  2. The first 2 km cost 300 RWF.
  3. For extra distance, round up partial kilometres.
  4. Charge 107 RWF for every extra kilometre.
*/

function motoFare(km) {
  if (km <= 0) {
    return 0;
  } else if (km <= 2) {
    return 300;
  } else {
    const extraKm = Math.ceil(km - 2);
    return 300 + extraKm * 107;
  }
}

console.log("\nCHALLENGE 3: MOTO FARE");
console.log(motoFare(1));    // 300
console.log(motoFare(3));    // 407
console.log(motoFare(0));    // 0


/*
CHALLENGE 4: convertSeconds(total)

Understand:
  Input: a total number of seconds.
  Output: a formatted string showing hours, minutes,
  and seconds.

Examples:
  7389 -> "2h 03m 09s"
  65   -> "0h 01m 05s"
  0    -> "0h 00m 00s"

Plan:
  1. Calculate whole hours.
  2. Calculate remaining minutes.
  3. Calculate remaining seconds.
  4. Add a zero before minutes or seconds below 10.
  5. Return the formatted string.
*/

function convertSeconds(total) {
  if (total < 0) {
    return "Invalid";
  }

  total = Math.floor(total);

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  let minutesText = String(minutes);
  let secondsText = String(seconds);

  if (minutes < 10) {
    minutesText = "0" + minutes;
  }

  if (seconds < 10) {
    secondsText = "0" + seconds;
  }

  return hours + "h " + minutesText + "m " + secondsText + "s";
}

console.log("\nCHALLENGE 4: CONVERT SECONDS");
console.log(convertSeconds(7389)); // 2h 03m 09s
console.log(convertSeconds(65));   // 0h 01m 05s
console.log(convertSeconds(0));    // 0h 00m 00s


/*
CHALLENGE 5: changeMaker(amount)

Understand:
  Input: an amount in RWF.
  Output: a breakdown using the fewest available
  notes and coins.

Examples:
  7385 -> 1 x 5000, 1 x 2000, 3 x 100,
          1 x 50, 1 x 20, 1 x 10, 1 x 5
  5000 -> 1 x 5000
  0 -> No change needed

Plan:
  1. Check that the amount is a non-negative integer.
  2. Store denominations from largest to smallest.
  3. Use a loop to calculate each denomination's count.
  4. Add nonzero counts to a string.
  5. Keep the remaining amount for the next denomination.
*/

function changeMaker(amount) {
  if (!Number.isInteger(amount) || amount < 0) {
    return "Invalid amount";
  }

  const denominations = [
    5000, 2000, 1000, 500, 100,
    50, 20, 10, 5, 1
  ];

  let result = "";
  let remaining = amount;

  for (let i = 0; i < denominations.length; i++) {
    const note = denominations[i];
    const count = Math.floor(remaining / note);

    if (count > 0) {
      if (result !== "") {
        result += ", ";
      }

      result += count + " x " + note;
      remaining = remaining % note;
    }
  }

  if (result === "") {
    return "No change needed";
  }

  return result;
}

console.log("\nCHALLENGE 5: CHANGE MAKER");
console.log(changeMaker(7385));
// 1 x 5000, 1 x 2000, 3 x 100, 1 x 50, 1 x 20, 1 x 10, 1 x 5

console.log(changeMaker(5000));
// 1 x 5000

console.log(changeMaker(0));
// No change needed


/*
SOLUTION COMPARISONS

1. isLeapYear:
   Using if/else makes the leap-year rules easy to read and eay to solve.

3. Challenge 5:
   Finding the fewest notes and coins was challenging.
   I used a loop to check denominations from largest
   to smallest and update the remaining amount.
*/
