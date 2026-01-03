let prompt = require("prompt-sync")();
// let n = parseInt(prompt("Enter the number of rows: "));

// console.log("*".repeat(n));

// let colNum = parseInt(prompt("Enter the number of columns: "));
// let rowNum = parseInt(prompt("Enter the number of rows: "));

// for (let i = 1; i <= rowNum; i++) {
//   for (let j = 1; j <= colNum; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Problem: Pring a square patter with numbers
// let nLimit = parseInt(prompt("Enter the number of rows and columns: "));
// for (let i = 1; i <= nLimit; i++) {
//   for (let j = 1; j <= nLimit; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// let nLimit = parseInt(prompt("Enter the number of rows and columns: "));
// for (let i = 1; i <= nLimit; i++) {
//   for (let j = 1; j <= nLimit; j++) {
//     for (let k = 1; k <= nLimit; k++) {
//       for (let l = 1; l <= nLimit; l++) {
//         process.stdout.write("* ");
//       }
//       console.log();
//     }
//     console.log();
//   }
//   console.log();
// }

// let nLimit = parseInt(prompt("Enter the number of rows and columns: "));
// Print star for right angle triangle

// for (let i = 1; i < nLimit; i++) {
//   console.log("* ".repeat(i));
// }

// Print number for right angle triangle

// for (let i = 1; i <= nLimit; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${j} `);
//   }
//   console.log();
// }

// Print Alphabet for right angle triangle

// for (let i = 1; i <= nLimit; i++) {
//   let charCode = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(charCode) + " ");
//     charCode++;
//   }
//   console.log();
// }

// Now print same thing for left triangle
// for (let i = nLimit; i >= 1; i--) {
//   let charCode = 65;
//   for (let j = 1; j <= i; j++) {
//     // Print Star
//     // process.stdout.write("* ");

//     // Print Number
//     // process.stdout.write(`${j} `);

//     // Print Alphabet
//     process.stdout.write(String.fromCharCode(charCode) + " ");
//     charCode++;
//   }
//   console.log();
// }

// Print X pattern
// let nLimit = parseInt(prompt("Enter the limit: "));
// for (let i = 1; i <= nLimit; i++) {
//   for (let j = 1; j <= nLimit; j++) {
//     if (i === j || i + j == nLimit + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("   ");
//     }
//   }
//   console.log();
// }

// Print V pattern
let nLimit = parseInt(prompt("Enter the limit: "));
for (let i = 1; i <= nLimit; i++) {
  for (let j = 1; j <= i; j++) {
    if (i === j || i + j == nLimit + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("   ");
    }
  }
  console.log();
}
