let countries = [
  ["Peru", 31826018, 1285216],
  ["Filipinai", 103796832, 300000],
  ["Portugalija", 10260000, 92212],
  ["Lietuva", 2814696, 65300],
  ["Meksika", 130222815, 1972550],
];

for (let i = 0; i < 5; i++) {
  let spacePerPerson = countries[i][2] / countries[i][1];
  console.log(
    `Salis: ${countries[i][0]}, joje gyvena ${(
      countries[i][1] / 1000000
    ).toFixed(2)}mln. gyventoju, valstybes plotas - ${
      countries[i][2]
    }km^2, plotas, tenkantis vienam gyventojui - ${(
      spacePerPerson * 1000
    ).toFixed(2)}m^2`
  );
}
