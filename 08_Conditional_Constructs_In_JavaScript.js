// -------------------------------------------------------------------------------
// 1. Simple if: Check marks eligibility

let marks = 80; // Marks obtained by the student
if (marks > 70) { // Check if marks are greater than 70
    console.log("Welcome to college"); // Print success message
} else {
    console.log("Sorry, you are not eligible"); // Print failure message
}

// Expected Output: "Welcome to college"

// -------------------------------------------------------------------------------
// 2. Nested if-else: Check if number is odd/even and positive/negative

let number = 19; // Input number
if (number > 0) { // Check if number is positive
    console.log(number + " is positive");
    if (number % 2 === 0) { // Check if number is even
        console.log(number + " is even");
    } else { // If not even, it's odd
        console.log(number + " is odd");
    }
} else {
    console.log(number + " is negative"); // Handle negative numbers
}

// Expected Output: 
// "19 is positive"
// "19 is odd"

// -------------------------------------------------------------------------------
// 3. Find greater between two numbers

let num1 = 99; // First number
let num2 = 108; // Second number

if (num1 > num2) { // Check which number is greater
    console.log(num1 + " is greater");
} else {
    console.log(num2 + " is greater");
}

// Expected Output: "108 is greater"

// -------------------------------------------------------------------------------
// 4. Voting eligibility check

let age = 21; // Age of the person
if (age >= 18) { // Check if age is 18 or above
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// Expected Output: "You are eligible to vote"

// -------------------------------------------------------------------------------
// 5. Else-if ladder: Determine life stage based on age

/* Age categories:
   - Less than 5 -> Baby
   - 5 to 12 -> Child
   - 13 to 19 -> Teen
   - 20 and above -> Adult
*/
age = 12; // Input age
if (age < 5) {
    console.log("Baby");
} else if (age >= 5 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teen");
} else {
    console.log("Adult");
}

// Expected Output: "Child"

// -------------------------------------------------------------------------------
// 6. Switch case: Print day of the week

let day = "saturday"; // Input day (case-insensitive)

switch (day.toLowerCase()) { // Convert input to lowercase for consistency
    case "sunday":
        console.log("Sunday");
        break;
    case "monday":
        console.log("Monday");
        break;
    case "tuesday": // Corrected spelling from "Thueday"
        console.log("Tuesday");
        break;
    case "wednesday":
        console.log("Wednesday");
        break;
    case "thursday":
        console.log("Thursday");
        break;
    case "friday":
        console.log("Friday");
        break;
    case "saturday":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day"); // Handle invalid input
}

// Expected Output: "Saturday"

// -------------------------------------------------------------------------------
// 7. Switch case with seasons

/* Seasons based on month:
   - 11, 12, 1, 2 -> Winter
   - 3, 4, 5, 6 -> Summer
   - 7, 8 -> Monsoon
   - 9, 10 -> Autumn
*/
let month = 10; // Input month number

switch (month) {
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;
    case 7:
    case 8:
        console.log("Monsoon");
        break;
    case 9:
    case 10:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month"); // Handle invalid input
}

// Expected Output: "Autumn"
