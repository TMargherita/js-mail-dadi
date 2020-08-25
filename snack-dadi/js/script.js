//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer//
//Stabilire il vincitore, in base a chi fa il punteggio più alto.//

var pc = Math.floor(Math.random() * 10);
pc <=6
var giocatore = parseInt(prompt("Scegli un numero da 1 a 6"));

var vittoria;

if ( pc > giocatore && pc <=6) {
  vittoria = pc;
} else if (giocatore > pc && giocatore <=6){
  vittoria = giocatore;
}

console.log(vittoria);
