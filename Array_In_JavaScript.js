
// Iterate through the array and replace even numbers with "e" and odd numbers with "o"
arr = [1, 2, 4, 3, 7, 9, 4, 2, 1];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr[i] = "e"; // Even number
    } else {
        arr[i] = "o"; // Odd number
    }
}

// Expected Output:
// ["o", "e", "e", "o", "o", "o", "e", "e", "o"]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Splice method example to modify an array
let colors = ["red", "green", "yellow", "pink"];
colors.splice(1, 2, "blue", "black");
console.log(colors); // ["red", "blue", "black", "pink"]

// Expected Output:
// ["red", "blue", "black", "pink"]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Slice method to extract parts of an array
let colors1 = ["red", "green", "yellow", "pink"];
let cls = colors1.slice(1, 3); // Extract from index 1 to index 3 (not including index 3)
console.log(colors1); // Original array remains unchanged
console.log(cls);     // Extracted portion ["green", "yellow"]

// Expected Output:
// ["red", "green", "yellow", "pink"]
// ["green", "yellow"]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// IndexOf and Includes methods
let colors2 = ["red", "green", "yellow", "pink"];
console.log(colors2);
console.log(colors2.indexOf("yellow")); // Output: 2
console.log(colors2.indexOf("black"));  // Output: -1 (not found)

console.log(colors2.includes("yellow")); // Output: true
console.log(colors2.includes("black"));  // Output: false

console.log(colors2.sort()); // Sorting the array alphabetically

// Expected Output:
// ["red", "green", "yellow", "pink"]
// 2
// -1
// true
// false
// ["green", "pink", "red", "yellow"]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Iterating over the array using forEach
let fruits = ["Apple", "Mango", "Banana", "Cherry"];
fruits.forEach(f => console.log(f + " is a fruit"));

// Expected Output:
// Apple is a fruit
// Mango is a fruit
// Banana is a fruit
// Cherry is a fruit

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using map to square the numbers in the array
let num = [1, 2, 3];
let squaredNum = num.map(n => n * n);
console.log(squaredNum); // [1, 4, 9]

// Expected Output:
// [1, 4, 9]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using filter to get even numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = nums.filter(n => n % 2 == 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Expected Output:
// [2, 4, 6, 8, 10]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using reduce to calculate the sum of numbers in the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 55

// Expected Output:
// 55

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Using reduce to calculate the product of numbers in the array
let product = numbers.reduce((total, n) => total * n, 1);
console.log(product); // Output: 3628800

// Expected Output:
// 3628800

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Concatenating two arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// Expected Output:
// [1, 2, 3, 4]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Joining array elements into a string
let words = ["hello", "World"];
let sentence = words.join(" ");
console.log(sentence); // "hello World"

// Expected Output:
// "hello World"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Define an array with mixed data types
arr = [10, 20, 6.44, "js", true];
console.log(arr);
console.log(typeof(arr)); // Output: object (since arrays are objects in JavaScript)

console.log(arr[2]); // Accessing the 3rd element (6.44)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Expected Output:
// [10, 20, 6.44, "js", true]
// object
// 6.44
// 10
// 20
// 6.44
// js
// true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Array Program to find the average of all elements
let a = [10, 20, 30, 40, 50, 60, 70];
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}

console.log(sum / a.length); // Output: 35

// Expected Output:
// 35

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Odd & even numbers separated into different arrays
a = [10, 21, 33, 49, 56, 62, 71];
let odd = [];
let even = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        even.push(a[i]);
    } else {
        odd.push(a[i]);
    }
}

console.log(odd);  // [21, 33, 49, 71]
console.log(even); // [10, 56, 62]

// Expected Output:
// [21, 33, 49, 71]
// [10, 56, 62]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Rotate array elements by 1
a = [10, 21, 33, 49, 56, 62, 71];
console.log("Original array:", a);

let tmp = a[a.length - 1];
for (let i = a.length - 1; i >= 1; i--) {
    a[i] = a[i - 1];
}
a[0] = tmp;

console.log("Array after rotation:", a); // Output: [71, 10, 21, 33, 49, 56, 62]

// Expected Output:
// Original array: [10, 21, 33, 49, 56, 62, 71]
// Array after rotation: [71, 10, 21, 33, 49, 56, 62]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
