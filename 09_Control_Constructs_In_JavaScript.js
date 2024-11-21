// -----------------------------------------------------------
// Multiplication table using `for` loop
// Prints the multiplication table of the given number

let num = 9;
for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (num * i));
}
// Expected Output:
// 9 * 1 = 9
// 9 * 2 = 18
// 9 * 3 = 27
// 9 * 4 = 36
// 9 * 5 = 45
// 9 * 6 = 54
// 9 * 7 = 63
// 9 * 8 = 72
// 9 * 9 = 81
// 9 * 10 = 90

// -----------------------------------------------------------
// Multiplication table using `while` loop
// Prints the multiplication table of the given number

num = 11;
let i = 1;
while (i <= 10) {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
}
// Expected Output:
// 11 * 1 = 11
// 11 * 2 = 22
// 11 * 3 = 33
// 11 * 4 = 44
// 11 * 5 = 55
// 11 * 6 = 66
// 11 * 7 = 77
// 11 * 8 = 88
// 11 * 9 = 99
// 11 * 10 = 110

// -----------------------------------------------------------
// Check if a given number is a palindrome
// A palindrome reads the same backward as forward

num = 121;
let duplicate = num; // Store the original number for comparison
let newNum = 0;

while (num !== 0) {
    let lastDigit = num % 10; // Extract the last digit
    newNum = (newNum * 10) + lastDigit; // Build the reversed number
    num = Math.floor(num / 10); // Remove the last digit
}

if (duplicate === newNum) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
// Expected Output:
// Palindrome

// -----------------------------------------------------------
// Multiples of 5 from 1 to 100 using `do-while` loop

i = 1;
let result = ""; // String to store multiples of 5
do {
    if (i % 5 === 0) {
        result += i + " ";
    }
    i++;
} while (i <= 100);

console.log(result);
// Expected Output:
// 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100

// -----------------------------------------------------------
// Array iteration using `for-of` loop
// Prints all elements of an array

let fruits = ["Apple", "Mango", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
// Expected Output:
// Apple
// Mango
// Banana
// Cherry

// -----------------------------------------------------------
// Object iteration using `for-in` loop
// Prints keys and values of an object

let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key + " : " + person[key]);
}
// Expected Output:
// name : Alice
// age : 25

// -----------------------------------------------------------Jumping Statements----------------------------------------------------------------------------------
// Use of `break` statement
// Exits the loop when a condition is met

for (i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Exit the loop when `i` equals 3
    }
    console.log(i);
}
// Expected Output:
// 1
// 2

// -----------------------------------------------------------
// Use of `continue` statement
// Skips the current iteration when a condition is met

for (i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip the iteration when `i` equals 3
    }
    console.log(i);
}
// Expected Output:
// 1
// 2
// 4
// 5
