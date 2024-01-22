/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 

string- dato in seuenza si caratteri in alfanumerico
lat- dichiarazione di una variabile
boolean- tipo di dato che può qassumere valori vero falso
null- messo in variabili dichiarate ma a cui non si ha ancora assgnato un valore
messo intenzionalmente 
undefined-uando qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName= "Riccardo";
console.log (myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a=12;
let b=20;
console.log ( "la somma di 12 e 20 è ",a + b );

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x=12;
console.log (x);


/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 /* let myName = "Adorni"  .se voi dichiarate una variabile const(invece di let) diventa una variabile non cambiabile
 perché accetta solo il primo valore che assegniamo...quindi a priori se myName era 
 una const non poteva essere cambiata...la coretta sintassi per cambiarla è myName="cognome" */

 myName= "Adorni";
 console.log (myName )

  // const myName ="Adorni";
  // myName = "Riccardo";

 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log ("4-x",4-x);
let sott= 4-x;
console.log (sott)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1=("jhon");
let name2=("Jhon");
console.log("jhon è uguale a Jhon?", name1==name2)

console.log("jhon è diverso da Jhon ma con toLowerCase lo rendiamo uguale",name1.toLowerCase()===name2.toLowerCase())
