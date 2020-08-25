//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer//

//lancio dadi, giocatore 1
var giocatore1 = Math.floor(Math.random() * 6) + 1;

//lancio dadi, pc
var giocatore2 = Math.floor(Math.random() * 6) + 1;

console.log("Giocatore 1" + giocatore1);
console.log("Giocatore 2" + giocatore2);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.//
// se il giocatore 1 è > giocatore 2, allora ha vinto giocatore 1
// se il giocatore 2 è > giocatore 1, allora ha vinto giocatore 2
// se sono uguali, pareggio.

if (giocatore1 > giocatore2) {
  console.log("ha vinto il giocatore1: ");
} else if (giocatore2 > giocatore1) {
  console.log("ha vinto il giocatore2 :" );
} else {
  console.log("Parità!")
}
