// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 10));

// NAMAI
// PIRMAS VARIANTAS

// const namai = {
//   hasFireplace: true,
//   hasGarage: true,
//   garageIsOpen: false,
//   openGarage: function () {
//     if (this.garageIsOpen === false) {
//       garageIsOpen = true;
//       return "Imagine a garage door that is opening";
//     } else {
//       return "Garage is already open";
//     }
//   },
//   closeGarage: function () {
//     if (this.garageIsOpen === true) {
//       garageIsOpen = false;
//       return "Imagine that a garage door is closing";
//     } else {
//       return "Garage is already closed";
//     }
//   },
// };

// console.log(namai.hasFireplace);

// namai.openGarage();
// console.log(namai.openGarage());
// namai.openGarage();
// console.log(namai.openGarage());
// namai.closeGarage();
// console.log(namai.closeGarage());
// namai.closeGarage();
// console.log(namai.closeGarage());

// ANTRAS VARIANTAS

// const namai = {
//   hasFireplace: true,
//   hasGarage: true,
//   garageIsOpen: false,
//   openGarage: function () {
//     if (this.garageIsOpen === false) {
//       garageIsOpen = true;
//       return "Imagine a garage door that is opening";
//     }
//     return "Garage is already open";
//   },
//   closeGarage: function () {
//     if (this.garageIsOpen === true) {
//       garageIsOpen = false;
//       return "Imagine that a garage door is closing";
//     }
//     return "Garage is already closed";
//   },
// };

// console.log(namai.hasFireplace);

// namai.openGarage();
// console.log(namai.openGarage());
// namai.openGarage();
// console.log(namai.openGarage());
// namai.closeGarage();
// console.log(namai.closeGarage());
// namai.closeGarage();
// console.log(namai.closeGarage());

// TRECIAS VARIANTAS

const namai = {
  hasFireplace: true,
  hasGarage: true,
  garageIsOpen: false,
  openGarage: function () {
    if (this.garageIsOpen === false) {
      this.garageIsOpen = true;
      console.log("Imagine a garage door that is opening");
    } else {
      console.log("Garage is already open");
    }
  },
  closeGarage: function () {
    if (this.garageIsOpen === true) {
      this.garageIsOpen = false;
      console.log("Imagine that a garage door is closing");
    } else {
      console.log("Garage is already closed");
    }
  },
};

console.log(namai.hasFireplace);

namai.openGarage();
namai.openGarage();
namai.closeGarage();
namai.closeGarage();
