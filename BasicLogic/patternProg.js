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

let nLimit = parseInt(prompt("Enter the number of rows and columns: "));
for (let i = 1; i <= nLimit; i++) {
  for (let j = 1; j <= nLimit; j++) {
    for (let k = 1; k <= nLimit; k++) {
      for (let l = 1; l <= nLimit; l++) {
        process.stdout.write("* ");
      }
      console.log();
    }
    console.log();
  }
  console.log();
}
