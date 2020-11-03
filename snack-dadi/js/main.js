
//1. Genera un  numero random da 1 a 6, per giocatore
var numeroPc = Math.floor(Math.random() * (6 - 1)) + 1;

//2. Genera un  numero random da 1 a 6,per pc
var numeroUtente = Math.floor(Math.random() * (6 - 1)) + 1;

var messaggio = "pari!"

console.log("Giocatore 1" + " " + numeroPc);
console.log("Giocatore 2" + " " + numeroUtente);

//3. Stabilisce chi fa punteggio più alto = vincitore
if (numeroPc > numeroUtente) {
  console.log("Ha vinto il Giocatore 1 con: " + " " + numeroPc);
} else if (numeroUtente > numeroPc){
  console.log("Ha vinto il Giocatore 2 con: " + " " + numeroUtente);
} else {
  console.log(messaggio);
}
