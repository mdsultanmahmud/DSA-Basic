// let a = 20;
// let b = 10;
// console.log("Sum of 20 and 10 " + (a + b));
// console.log("4" - 2);
// console.log(typeof ("4" - 2));
// console.log("4" + 2);
// console.log("4" * 2);
// console.log("4" / 2);
// console.log("sultan" - "sul");

// swap
let a = 20;
let b = 30;

// Method one
// let c = a;
// a = b;
// b = c;

// Method two
// a = a + b;
// b = a - b;
// a = a - b;

// Method three
[b, a] = [a, b];
// console.log("value of a: ", a);
// console.log("value of b: ", b);

// Math Function
// console.log(Math.trunc(18.98));

// Problem: Count the payable amount after discount
// let amount = Number(
//   prompt("Enter the total amount you expenditure for shopping: ")
// );

// let discount = 0;
// if (amount > 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// }

// let payableAmount = amount - Math.round((amount * discount) / 100);
// console.log("Your payable amount is: ", payableAmount);

// Problem: calculate electricity bill
// let unit = prompt("What is your used unit?");
// let usedUnit = unit;
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }

// if ((unit > 200) & (unit <= 400)) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }
// amount += unit * 4;
// console.log(
//   `You used ${usedUnit} units and your total payable bill is: ${amount}`
// );

let amount = prompt("Enter the amount: ");
let usedAmount = amount;
let thousand = 0,
  fiveH = 0,
  twoH = 0,
  oneH = 0,
  fifty = 0,
  twenty = 0,
  ten = 0,
  five = 0,
  two = 0,
  one = 0;
if (amount >= 1000) {
  thousand = Math.floor(amount / 1000);
  amount = amount % 1000;
}
if (amount >= 500) {
  fiveH = Math.floor(amount / 500);
  amount = amount % 500;
}
if (amount >= 200) {
  twoH = Math.floor(amount / 200);
  amount = amount % 200;
}
if (amount >= 100) {
  oneH = Math.floor(amount / 100);
  amount = amount % 100;
}
if (amount >= 50) {
  fifty = Math.floor(amount / 50);
  amount = amount % 50;
}
if (amount >= 20) {
  twenty = Math.floor(amount / 20);
  amount = amount % 20;
}
if (amount >= 10) {
  ten = Math.floor(amount / 10);
  amount = amount % 10;
}
if (amount >= 5) {
  five = Math.floor(amount / 5);
  amount = amount % 5;
}
if (amount >= 2) {
  two = Math.floor(amount / 2);
  amount = amount % 2;
}
one = amount;

console.log(`
  Your entering amount: ${usedAmount} 
  1000 note: ${thousand} 
  500 note: ${fiveH} 
  200 note: ${twoH} 
  100 note: ${oneH} 
  50 note: ${fifty} 
  20 note: ${twenty} 
  10 note: ${ten} 
  5 note: ${five} 
  2 note: ${two} 
  1 note: ${one}
  Total note: ${
    thousand + fiveH + twoH + oneH + fifty + twenty + ten + five + two + one
  } 
  `);
