//Tableau utilisation méthode map()
const tableau1 = [1, 4, 9, 16];

copieTableauModifie = tableau1.map((element) => element * 2);

console.log(copieTableauModifie);

//Tableau des racines carrées d'un tableau de nombre
const racineCarree = tableau1.map((element) => Math.sqrt(element));
const racineCarree2 = tableau1.map(Math.sqrt);

console.log(racineCarree);
console.log(racineCarree2);

//Créer un tableau de nombres avec une fonction à un argument
const tableau2 = tableau1.map((element) => {
  return element * 2;
});

const tableau3 = tableau1.map(function (x) {
  return x * 2;
});

console.log(tableau2);
console.log(tableau3);
