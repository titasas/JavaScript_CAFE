// TASK 1

// console.log("Hello world.");

// window.alert("I love JavaScript");

// window.prompt("Ready to learn more?");

// let a = window.prompt("Insert a number from 1 to 10, please");

// console.log(a);

// function pieskBetKa(betKas) {
//   console.log(betKas);
// }

// pieskBetKa("tralala");

// TASK 2

// let vardas;
// let birthDay;

// birthDay = "geguzes 12";
// vardas = prompt("Please insert your name");
// console.log(vardas + " yra gimes " + birthDay);

// TASK 3

// const darbingiZmones = 1500000;
// const biudzetas = 11252100000;

// const alga = prompt("Iveskite bazini uzmokescio dydi");

// const rezultatas = (darbingiZmones * alga * 100) / biudzetas;

// document.write(rezultatas);

const darbingiZmones = 1_500_000;
const biudzetas = 11_252_100_000;

const alga = prompt("Iveskite bazini uzmokescio dydi");

function biudzetoProcentoSkaiciuokle(darbingiZmones, biudzetas, alga) {
  return (darbingiZmones * alga * 100) / biudzetas;
}

// const rezultatas = biudzetoProcentoSkaiciuokle(darbingiZmones, biudzetas, alga);

document.write(biudzetoProcentoSkaiciuokle(darbingiZmones, biudzetas, alga));
