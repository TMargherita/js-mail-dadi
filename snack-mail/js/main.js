//Mail
//1.Chiedi all'utente la sua email

var emailUtente = "rossi@ciao.it";

//2.controlla che sia nella lista di chi può accedere,
var listaEmails = ['bianchi@ciao.it','pinco@ciao.it','pallino@ciao.it'];

//3.stampa un messaggio appropriato sull'esito del controllo.

for (var i = 0; i < listaEmails.length; i++) {
  if (emailUtente === listaEmails[i]) {
    console.log("La tua email" + emailUtente + " " + "è presente: " + listaEmails);
  } else {
    console.log("La tua email" + emailUtente + " " + "non è presente: " + listaEmails);
  }
}
