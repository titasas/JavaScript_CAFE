// TASK ONE

// let countries = [
//   ["Peru", 31826018, 1285216],
//   ["Filipinai", 103796832, 300000],
//   ["Portugalija", 10260000, 92212],
//   ["Lietuva", 2814696, 65300],
//   ["Meksika", 130222815, 1972550],
// ];

// for (let i = 0; i < 5; i++) {
//   let spacePerPerson = countries[i][2] / countries[i][1];
//   console.log(
//     `Salis: ${countries[i][0]}, joje gyvena ${(
//       countries[i][1] / 1000000
//     ).toFixed(2)}mln. gyventoju, valstybes plotas - ${
//       countries[i][2]
//     }km^2, plotas, tenkantis vienam gyventojui - ${(
//       spacePerPerson * 1000
//     ).toFixed(2)}m^2`
//   );
// }

//TASK TWO
// let doors = {
//   color: 'brown',
//   isOpen: false,
//   open: function() {
//     if (doors.isOpen === true) {
//       return 'Doors are open';
//     } else {
//       doors.isOpen = true;
//       return 'I am opening the doors';
//     }
//   },
//   close: functionClose() {
//         if (doors.isOpen === true) {
//           doors.isOpen = false;
//           return 'I am closing the doors';
//         } else {
// return 'Doors are already closed';
//         }
//     }
//   }
// console.log(doors.close());

//TASK THREE

// let savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     let verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//     if (amount > this.balance) {
//       return `Ups, you don't have $${amount} in your account`;
//     }
//     return `You have withdrawn $${amount},\nYou have $${this.balance} in your account left.`;
//   },
//   printAccountSummary: function printAccountSummary() {
//     return `Welcome!\n\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%`;
//   },
// };
// console.log(savingsAccount.printAccountSummary());

// console.log(savingsAccount.withdraw(1100));

//TASK FOUR - not finished yet

const cars = [
  { type: "BMW", price: "30.000" },
  { type: "MERCEDES", price: "35.000" },
  { type: "HONDA", price: "18.000" },
  { type: "VOLVO", price: "25.000" },
];

console.log(cars);

cars.forEach((car) =>
  console.log(`${cars.type.toLowerCase()}), car price $${cars.price}`)
);
