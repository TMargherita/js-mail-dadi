//Chiedi all’utente la sua email//
//controlla che sia nella lista di chi può accedere//
//stampa un messaggio appropriato sull’esito del controllo//

//1. crea lista email
var listaEmails = ["margherit.testi@gmail.com", "ciao@ciao.it", "pincopallino@ciao.it"]
//2. chiedi l email all utente//
var emailUtente = prompt("Inserisci la tua email");
var emailUtente = "blue@colore.com";
var trovato = false;
//verifica se la email e nella lista//
for (i=0 ; i < email.lenght ; i++) {
  if (listaEmails[i] == emailUtente) {
    trovato = true;
  }
}

if (trovato) {
  console.log("L'email è stata trovata");
} else if{
  console.log("L'email NON è stata trovata");
}
