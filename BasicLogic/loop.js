// for (i = 1; i <= 5; i++) {
//   console.log(`for loop ${i}`);
// }
// let index = 1;
// while (index <= 5) {
//   console.log(`while loop ${index}`);
//   index++;
// }

// let doIndex = false;

// do {
//   console.log(`do while loop ${doIndex}`);
// } while (doIndex);

// // Problem: sum of n natural number
// const number = prompt("Enter a number");
// if (number === null) {
//   console.log("Action cancelled");
// } else {
//   let ans = Number(number);
//   let sum = 0;
//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//       for (let i = 1; i <= ans; i++) {
//         sum += i;
//       }
//       console.log(`Sum of 1 to ${ans} is: ${sum}`);
//     } else {
//       console.log("Number should be positive and greater than 0");
//     }
//   }
// }

// Problem: find the factorial of a number
// let number = prompt("Enter a number: ");
// if (number === null) {
//   console.log("Action Cancelled");
// } else {
//   let ans = Number(number);
//   if (isNaN(ans)) {
//     console.log("Invalid Input");
//   } else {
//     if (ans < 0) {
//       console.log("Number should be positive");
//     } else {
//       let factorial = 1;
//       for (let i = ans; i >= 1; i--) {
//         factorial *= i;
//       }
//       console.log(`Factorial of ${ans} is: ${factorial}`);
//     }
//   }
// }

// Problem: find the factors of a number
// let number = prompt("Enter a number: ");
// if (number === null) {
//   console.log("Action Cancelled");
// } else {
//   let ans = Number(number);
//   if (isNaN(ans)) {
//     console.log("Invalid Input");
//   } else {
//     if (ans < 0) {
//       console.log("Number should be positive");
//     } else {
//       let numbers = [];
//       for (let i = 1; i <= Math.floor(ans / 2); i++) {
//         if (ans % i === 0) {
//           numbers.push(i);
//         }
//       }
//       numbers.push(ans);
//       console.log(`Factors of ${ans} are: ${numbers}`);
//     }
//   }
// }

// Problem: Number is prime or not
// let number = prompt("Enter a number: ");
// if (number === null) {
//   console.log("Action Cancelled");
// } else {
//   let ans = Number(number);
//   if (isNaN(ans)) {
//     console.log("Invalid Input");
//   } else {
//     if (ans < 0) {
//       console.log("Number should be positive");
//     } else {
//       let isPrime = true;
//       for (let i = 2; i <= Math.floor(ans / 2); i++) {
//         if (ans % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       console.log(`${ans}  ${isPrime ? "is Prime" : "is not Prime"}`);
//     }
//   }
// }

// While Loop
// let userInput = prompt("Enter anything you want(exit for close)");
// while (userInput !== "exit") {
//   userInput = prompt("Enter anything you want(exit for close)");
// }

// Problem: Sum of digit by while loop
// let number = prompt("Enter a number: ");
// if (number === null) {
//   console.log("Action Cancelled");
// } else {
//   let ans = Number(number);
//   if (isNaN(ans)) {
//     console.log("Invalid Input");
//   } else {
//     if (ans < 0) {
//       console.log("Number should be positive");
//     } else {
//       let sum = 0;
//       while (ans > 0) {
//         let rem = ans % 10;
//         sum += rem;
//         ans = Math.floor(ans / 10);
//       }
//       console.log(`Sum of digit - ${number} is: ${sum}`);
//     }
//   }
// }

// Problem: Reverse the number
// let number = prompt("Enter a number: ");
// if (number === null) {
//   console.log("Action Cancelled");
// } else {
//   let ans = Number(number);
//   if (isNaN(ans)) {
//     console.log("Invalid Input");
//   } else {
//     if (ans < 0) {
//       console.log("Number should be positive");
//     } else {
//       let rev = 0;
//       while (ans > 0) {
//         let rem = ans % 10;
//         rev = rev * 10 + rem;
//         ans = Math.floor(ans / 10);
//       }
//       console.log(rev);
//     }
//   }
// }

// Problem: Check Strong Number(logic: number == factorial of each digit of the number)
// let number = prompt("Enter a number: ");
// if (number === null) {
//   console.log("Action Cancelled");
// } else {
//   let ans = Number(number);
//   if (isNaN(ans)) {
//     console.log("Invalid Input");
//   } else {
//     if (ans < 0) {
//       console.log("Number should be positive");
//     } else {
//       let sum = 0;
//       while (ans > 0) {
//         let rem = ans % 10;
//         let fact = 1;
//         for (let i = 1; i <= rem; i++) {
//           fact *= i;
//         }
//         sum += fact;
//         ans = Math.floor(ans / 10);
//       }
//       console.log(
//         Number(number) === sum ? "Strong Number" : "Is not Strong Number"
//       );
//     }
//   }
// }

// Problem: Guess the number

// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let guess = -1;

// while (guess !== randomNumber) {
//   guess = Number(prompt("Enter a number between 1 to 100"));

//   // Validate input
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("Please enter a valid number (1 to 100)");
//     continue;
//   }

//   if (guess > randomNumber) {
//     console.log("Number is too high, please try again!");
//   } else if (guess < randomNumber) {
//     console.log("Number is too low, please try again!");
//   } else {
//     console.log(`Congrats! The number was ${randomNumber}`);
//   }
// }

// let userInput = Number(
//   prompt(
//     "Enter what you want to do -- 1: addition, 2: substruction, 3: multiplication, 4: division"
//   )
// );

// if (userInput === 1 || userInput === 2 || userInput === 3 || userInput === 4) {
//   if (userInput === 1) {
//     let n1 = Number(prompt("Enter the first number"));
//     let n2 = Number(prompt("Enter the second number"));
//     console.log(`Addition of ${n1} and ${n2} is: ${n1 + n2}`);
//   }
//   if (userInput === 2) {
//     let n1 = Number(prompt("Enter the first number"));
//     let n2 = Number(prompt("Enter the second number"));
//     console.log(`Subtraction of ${n1} and ${n2} is: ${n1 - n2}`);
//   }
//   if (userInput === 3) {
//     let n1 = Number(prompt("Enter the first number"));
//     let n2 = Number(prompt("Enter the second number"));
//     console.log(`Multiplication of ${n1} and ${n2} is: ${n1 * n2}`);
//   }
//   if (userInput === 4) {
//     let n1 = Number(prompt("Enter the first number"));
//     let n2 = Number(prompt("Enter the second number"));
//     console.log(`Division of ${n1} and ${n2} is: ${n1 / n2}`);
//   }
// } else {
//   console.log("You entered invalid number");
// }
