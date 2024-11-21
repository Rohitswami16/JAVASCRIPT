// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Right-aligned triangle pattern
// Prints a triangle pattern of stars

for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star += "* ";
    }
    console.log(star);
}
// Expected Output:
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Hollow square pattern
// Prints a hollow square pattern of stars

for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 5) {
            star += "* ";
        } else {
            star += "  ";
        }
    }
    console.log(star);
}
// Expected Output:
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Number pattern with "x"
// Prints a number pattern with "x" as a separator

let x = 1;
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        if (j === i) {
            star += "" + i; // Add the number without "x" for the last column
            x++;
        } else {
            star += "" + i + "x"; // Add "x" after the number
            x++;
        }
    }
    console.log(star);
}
// Expected Output:
// 1
// 2x2
// 3x3x3
// 4x4x4x4
// 5x5x5x5x5

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Alphabet grid pattern
// Prints a grid pattern of alphabets based on ASCII codes

let pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        pattern += String.fromCharCode(i + 64); // Convert row number to uppercase letter
    }
    pattern += "\n";
}
console.log(pattern);
// Expected Output:
// AAAAA
// BBBBB
// CCCCC
// DDDDD
// EEEEE

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


